export function hexToRgb(hex: any): {
    r: number;
    g: number;
    b: number;
};
export function rgbToHex(rgb: any): string;
export function mergeData(data_main: any, data_to_merge: any): any;
export function isTrue(s: any): boolean;
export function extend(dest: any, ...args: any[]): any;
/**
 * Register a callback to be executed when trace is called in this runtime.
 * Callbacks will be called with whatever was passed to `trace` which is
 * expected to be a string.
 * @param {callable} cb
 */
export function addTraceHandler(cb: any): void;
/**
 * Pass the given `msg` to each registered trace handler.
 * This is a crude adaptation of the original Timeline trace
 * function which assumed access to a global `debug` flag.
 *
 * @param {string} msg
 */
export function trace(msg: string): void;
export function pad(val: any, len: any): any;
/**
 * Remove any leading or trailing whitespace from the given string.
 * If `str` is undefined or does not have a `replace` function, return
 * an empty string.
 */
export function trim(str: any): any;
export function maxDepth(ary: any): number;
/**
 * Implement mixin behavior. Based on
 *     https://blog.bitsrc.io/understanding-mixins-in-javascript-de5d3e02b466
 * @param {class} cls
 * @param  {...class} src
 */
export function classMixin(cls: any, ...src: any[]): void;
export function ensureUniqueKey(obj: any, candidate: any): any;
export function isEmptyObject(o: any): boolean;
export function slugify(str: any): any;
export function unique_ID(size: any, prefix: any): string;
export function findNextGreater(list: any, current: any, default_value: any): any;
export function findNextLesser(list: any, current: any, default_value: any): any;
export function isEven(n: any): boolean;
export function findArrayNumberByUniqueID(id: any, array: any, prop: any, defaultVal: any): any;
export function unlinkify(text: any): any;
export function setData(obj: any, data: any): void;
export function htmlify(str: any): any;
export function unhtmlify(str: any): any;
export function linkify(text: any, targets: any, is_touch: any): any;
/**
 * Try to make seamless the process of interpreting a URL to a web page which embeds an image for sharing purposes
 * as a direct image link. Some services have predictable transformations we can use rather than explain to people
 * this subtlety.
 */
export function transformImageURL(url: any): any;
export function getUrlVars(string: any): any[];
export function getParamString(obj: any): string;
export function getObjectAttributeByIndex(obj: any, index: any): any;
export function parseYouTubeTime(s: any): number;
export function stripMarkup(txt: any): string;
export function stamp(obj: any): any;
export namespace ratio {
    function square(size: any): {
        w: number;
        h: number;
    };
    function r16_9(size: any): number;
    function r4_3(size: any): number;
}
export namespace base58 {
    function encode(enc: any): string;
    function decode(dec: any): number;
}
