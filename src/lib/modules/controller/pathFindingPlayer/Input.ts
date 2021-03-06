import { Component } from "@aptero/axolotis-player";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { Service } from "@aptero/axolotis-player";
import { LazyServices } from "@aptero/axolotis-player";

export class Input implements Component {
  private _keyMap: any;
  private events: any[];
  constructor() {
    this._keyMap = {};
    this.events = [];

    this.AddKeyDownListner(this._onKeyDown);
    this.AddKeyUpListner(this._onKeyUp);
  }

  getType(): string {
    return Input.name;
  }

  _addEventListner(element, type, callback) {
    element.addEventListener(type, callback);
    this.events.push({ element, type, callback });
  }

  AddKeyDownListner(callback) {
    this._addEventListner(document, "keydown", callback);
  }

  AddKeyUpListner(callback) {
    this._addEventListner(document, "keyup", callback);
  }

  AddMouseMoveListner(callback) {
    this._addEventListner(document, "mousemove", callback);
  }

  AddClickListner(callback) {
    this._addEventListner(document.body, "click", callback);
  }

  AddMouseDownListner(callback) {
    this._addEventListner(document.body, "mousedown", callback);
  }

  AddMouseUpListner(callback) {
    this._addEventListner(document.body, "mouseup", callback);
  }

  _onKeyDown = (event) => {
    this._keyMap[event.code] = 1;
  };

  _onKeyUp = (event) => {
    this._keyMap[event.code] = 0;
  };

  GetKeyDown(code) {
    return this._keyMap[code] === undefined ? 0 : this._keyMap[code];
  }

  ClearEventListners() {
    this.events.forEach((e) => {
      e.element.removeEventListener(e.type, e.callback);
    });

    this.events = [];
    this.AddKeyDownListner(this._onKeyDown);
    this.AddKeyUpListner(this._onKeyUp);
  }
}

export class Factory implements WebpackLazyModule, Service<Input> {
  async createService(services: LazyServices): Promise<Input> {
    return new Input();
  }
}
