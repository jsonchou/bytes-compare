/* eslint-disable no-param-reassign */
/**
 * bytes compare.
 * @module bytesCompare
 * @author jsonchou
 * @description bytes compare module
 * @see https://github.com/jsonchou/bytes-compare
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "bytes"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bytes_1 = __importDefault(require("bytes"));
    var format = bytes_1.default.format, parse = bytes_1.default.parse;
    exports.format = format;
    exports.parse = parse;
    /**
     * bytes compare
     *
     * @example
     * ```js
     * compare(1024, ">=1024KB")
     * => true
     *
     *
     * compare(1024 * 1024, ">=1024MB")
     * => true
     *
     *
     * compare(1024 * 1024 * 1024, ">=1024GB")
     * => true
     *
     * ```
     *
     * @param num {Number} num
     * @param pattern {String} pattern
     * @returns {Boolean} compare result
     */
    var compare = function (num, pattern) {
        if (!pattern) {
            return false;
        }
        pattern = pattern.replace(/ /gi, '');
        var segments = pattern.split(/(>|=|<)/);
        var volumn = segments.pop();
        if (volumn) {
            var operator = segments.reduce(function (sum, item) { return sum + item; }, '');
            if (operator) {
                switch (operator) {
                    case '=':
                        if (num === bytes_1.default.parse(volumn)) {
                            return true;
                        }
                        return false;
                    case '>=':
                        if (num >= bytes_1.default.parse(volumn)) {
                            return true;
                        }
                        return false;
                    case '<=':
                        if (num <= bytes_1.default.parse(volumn)) {
                            return true;
                        }
                        return false;
                    case '>':
                        if (num > bytes_1.default.parse(volumn)) {
                            return true;
                        }
                        return false;
                    case '<':
                        if (num < bytes_1.default.parse(volumn)) {
                            return true;
                        }
                        return false;
                    /* istanbul ignore next */
                    default:
                        return true;
                }
            }
            else {
                return false;
            }
        }
        return false;
    };
    exports.compare = compare;
    var bytesCompare = __assign({ compare: compare }, bytes_1.default);
    exports.default = bytesCompare;
});
//# sourceMappingURL=index.js.map