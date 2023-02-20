"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("norhan");
const users_json_1 = __importDefault(require("./users.json"));
//1
const sortByUsername1 = users_json_1.default.sort((a, b) => a.username.localeCompare(b.username));
console.log(sortByUsername1);
//2
users_json_1.default.filter((x) => {
    if (x.address.geo.lat >= "-37.1496" && x.address.geo.lat <= "-68.6102" && x.address.geo.lng >= "62.5342" && x.address.geo.lng <= "81.1496")
        console.log(x.id);
});
//3
const createGoogleMapLinks = users_json_1.default.map(user => `https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`);
console.log(createGoogleMapLinks);
