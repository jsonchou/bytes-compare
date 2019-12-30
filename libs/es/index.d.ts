/**
 * bytes compare.
 * @module bytesCompare
 * @author jsonchou
 * @description bytes compare module
 * @see https://github.com/jsonchou/bytes-compare
 */
import bytes from 'bytes';
declare const format: typeof bytes.format, parse: typeof bytes.parse;
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
declare const compare: (num: number, pattern: string) => boolean;
declare const bytesCompare: {
    format(value: number, options?: bytes.BytesOptions | undefined): string;
    parse(value: string | number): number;
    compare: (num: number, pattern: string) => boolean;
};
export { compare, parse, format, };
export default bytesCompare;
