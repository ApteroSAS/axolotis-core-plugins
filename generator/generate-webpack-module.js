//console.log("start generating code");
//Parse the ts file find the class that extends WebpackModuleLoader and generate the file axolotis-frontend\src\generated\webpack\module
const ts = require("typescript");
var fs = require("fs");
var path = require("path");

const genPath = "./src/lib/generated/webpack/module/";
const scope = "./src/lib/";
const packagename = "@aptero/axolotis-core-plugins";
const packageprefix = "@root/lib";

let webpackInterfaceName = ["WebpackAsyncModuleFactory", "WebpackLazyModule"];
var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

function doesClassImplementInterface(
    checker, //: ts.TypeChecker
    cd /*: ts.ClassDeclaration*/) {
    if (!cd.heritageClauses) {
        return;
    }
    for (const hc of cd.heritageClauses) {
        //console.log("heritage clause: " + hc.getText())
        for (const string of webpackInterfaceName) {
            if (hc.getText().indexOf(string) !== -1) {
                return true;
            }
        }
    }
}

function generateWebpackModules(
    fileNames,// string[],
    options//ts.CompilerOptions
) {
    // Build a program using the set of root file names in fileNames
    let program = ts.createProgram(fileNames, options);
    // Get the checker, we will use it to find more about classes
    let checker = program.getTypeChecker();

    /** True if this is visible outside this file, false otherwise */
    function isNodeExported(node) {
        return (
            (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0 ||
            (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
        );
    }

    let dict = {};
    // Visit every sourceFile in the program
    for (const sourceFile of program.getSourceFiles()) {
        if (!sourceFile.isDeclarationFile) {
            // Walk the tree to search for classes
            ts.forEachChild(sourceFile, (node) => {
                // Only consider exported nodes
                if (!isNodeExported(node)) {
                    return;
                }
                if (ts.isClassDeclaration(node) && node.name) {
                    // This is a top level class, get its symbol
                    let symbol = checker.getSymbolAtLocation(node.name);
                    if (symbol) {
                        if (doesClassImplementInterface(checker, node)) {
                            let cwd = process.cwd();
                            cwd = cwd.replace(/\\/g, "/");
                            let module = sourceFile.fileName.replace(cwd, "");
                            module = module.replace("/src", "");
                            module = module.replace("src", "");
                            module = module.replace(".ts", "");
                            module = "@root" + module;
                            dict[module] = module;
                        }
                    }
                } else if (ts.isModuleDeclaration(node)) {
                    // This is a namespace, visit its children
                    ts.forEachChild(node, visit);
                }
            });
        }
    }

    {
        //https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
        let imortsLines = "";
        for (const importLine in dict) {
            let className = "Factory";
            let modifiedImport = importLine.replace(packageprefix,packagename);
            imortsLines += "  ret[\""+modifiedImport+"\"] = async () => {\n" +
                "    const module = await import(" +
                " /* " +
                " webpackPrefetch: 0" + // 0 is same as true
                ", " +
                " webpackMode: 'lazy'" +
                ", " +
                " webpackChunkName: \""+modifiedImport+"\" " +
                " */" +
                " \""+importLine+"\");\n" +
                "    return {module, classname: module.Factory.name}\n" +
                "  };\n";
        }

        let file = `
export function loadModules(): { [id: string]: () => Promise<{module:any,classname:string}>} {
  let ret = {};
  //Autogenerated
  /* Webpack use module name for loading and computing code bundle and split chunk so we cannot introduce variable in the import thus we create this redirecting file*/
  
%CASES%  return ret;
}
`;

        file = file.replace("%CASES%", imortsLines);
        //console.log(file);
        fs.writeFile(genPath +"WebpackLoader.ts", file, err => {
            if (err) {
                console.error(err);
                return;
            }
            //file written successfully
            console.log(genPath +"WebpackLoader.ts");
        });
    }
}

walk(scope, function(err, results) {
    if (err) throw err;
    results = results.filter(file => {
        return file.endsWith(".ts");
    });
    const configPath = ts.findConfigFile(
        /*searchPath*/ "./",
        ts.sys.fileExists,
        "tsconfig.json"
    );
    var options = fs.readFileSync(configPath);
    generateWebpackModules(results, options);
});


//https://stackoverflow.com/questions/59518993/typescript-compiler-api-function-which-can-check-if-a-class-implements-an-interf
