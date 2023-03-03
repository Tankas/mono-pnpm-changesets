"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/aa.js
var aa_exports = {};
__export(aa_exports, {
  default: () => aa_default
});
module.exports = __toCommonJS(aa_exports);
var bb = require("@hs/bb");
var ans = bb();
console.log("ans", ans);
var aa = () => {
  return "ss11";
};
var es6Test = new Promise(() => {
});
var aa_default = aa;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
