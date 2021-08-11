"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookEventProvider = exports.FacebookEventTrackerContext = void 0;
var react_1 = __importStar(require("react"));
var index_1 = __importDefault(require("../index"));
exports.FacebookEventTrackerContext = react_1.createContext(null);
var FacebookEventProvider = function (_a) {
    var children = _a.children, config = _a.config;
    var fbTracker = react_1.useState(new index_1.default(config.pixelId, config.testCode))[0];
    fbTracker.config(config.apiKey, config.wrapperUrl);
    fbTracker.init();
    return (react_1.default.createElement(exports.FacebookEventTrackerContext.Provider, { value: fbTracker }, children));
};
exports.FacebookEventProvider = FacebookEventProvider;
