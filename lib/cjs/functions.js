"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeid = void 0;
function makeid(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return parseInt(result);
}
exports.makeid = makeid;
