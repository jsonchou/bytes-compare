/* eslint-disable no-param-reassign */
/**
 * bytes compare.
 * @module bytesCompare
 * @author jsonchou
 * @description bytes compare module
 * @see https://github.com/jsonchou/bytes-compare
 */

import bytes from 'bytes';

const { format, parse } = bytes;

type Nothing = {

}

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
const compare = (num: number, pattern :string): boolean => {
  if (!pattern) {
    return false;
  }
  pattern = pattern.replace(/ /gi, '');
  const segments = pattern.split(/(>|=|<)/);
  const volumn = segments.pop();
  if (volumn) {
    const operator = segments.reduce((sum, item) => sum + item, '');
    if (operator) {
      switch (operator) {
        case '=':
          if (num === bytes.parse(volumn)) {
            return true;
          }
          return false;
        case '>=':
          if (num >= bytes.parse(volumn)) {
            return true;
          }
          return false;
        case '<=':
          if (num <= bytes.parse(volumn)) {
            return true;
          }
          return false;
        case '>':
          if (num > bytes.parse(volumn)) {
            return true;
          }
          return false;
        case '<':
          if (num < bytes.parse(volumn)) {
            return true;
          }
          return false;
          /* istanbul ignore next */
        default:
          return true;
      }
    } else {
      return false;
    }
  }
  return false;
};

const bytesCompare = {
  compare,
  /* istanbul ignore next */
  ...bytes,
};

export {
  compare,
  /* istanbul ignore next */
  parse,
  /* istanbul ignore next */
  format,
};

export default bytesCompare;
