// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {createWorld, Entity, LazyEntity, registerLocalModule} from "@aptero/axolotis-player";
import {ComponentExample} from "../../../demo/page/basic/ComponentExample";
import {ServiceExample} from "../../../demo/page/basic/ServiceExample";
import {FrameLoop} from "../../modules/frame/FrameLoop";

//const { test, expect } = require('@playwright/test');
//https://dev.to/anishkny/code-coverage-for-a-nextjs-app-using-playwright-tests-18n7
import { test, expect } from './baseFixtures';

test('test1', async ({ page }) => {
    const world = await createWorld();
    const entity = new Entity();
    entity.addComponent(new ComponentExample(new ServiceExample(),{text:"hello"}));
    world.addComponent(entity);
});

test('createWorld 2', async ({ page }) => {
    let localModuleStorage = {};
    registerLocalModule("@local/ServiceExample", async () => {
        const module = await import("../../../demo/page/basic/ServiceExample");
        return {module, classname: module.Factory.name}
    },localModuleStorage);

    registerLocalModule("@local/ComponentExample", async () => {
        const module = await import("../../../demo/page/basic/ComponentExample");
        return {module, classname: module.Factory.name}
    },localModuleStorage);
    let worldEntity = await createWorld({
        version:"2.0",
        entities:[
            {components:[
                    {module:"@local/ComponentExample",config:{text:"hello 1"}},
                    {module:"@local/ComponentExample",config:{text:"hello 2"}}
                ]}
        ]
    },()=>{},localModuleStorage);
    let entity = new LazyEntity(worldEntity);
    worldEntity.addComponent(entity);
    entity.addComponent<FrameLoop>(new FrameLoop());
    await entity.addComponentAsync("@local/ComponentExample", {text: "hello"});
    await entity.addComponentAsync("@local/ComponentExample", {text: "hello2"});
});

test('test', async ({ page }) => {
    //npx playwright codegen http://localhost:9080/
    // Go to http://localhost:9080/
    await page.goto('http://localhost:9080/');
    // Click text=Basic demo
    await page.locator('text=Basic demo').click();
    await expect(page).toHaveURL('http://localhost:9080/basic/index.html');
    // Click #progresscontainer div >> nth=0
    await page.locator('#progresscontainer div').first().click();
    await page.mainFrame().waitForLoadState('networkidle');
    await page.mainFrame().waitForLoadState('domcontentloaded');
    await page.mainFrame().waitForLoadState('load');
});