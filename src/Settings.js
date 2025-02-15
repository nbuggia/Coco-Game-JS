"use strict";

export class Settings {
  static #properties = {};

  static get(p) {
    return this.#properties[p];
  }

  static add(p, value) {
    if (!Object.getOwnPropertyDescriptor(this)[p]) {
      Object.defineProperty(this, p, {
        configurable: true,
        enumerable: true,
        get: () => this.#properties[p],
        set: (v) => {
          this.#properties[p] = v;
        },
      });
    }
    this.#properties[p] = value;
  }

  static remove(p) {
    delete this.#properties[p];
  }
}
