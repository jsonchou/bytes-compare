/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import bytesCompare, { compare } from '../src/index';
import { log } from '../src/_utils/index';

describe('bytesCompare', () => {
  const keys = Object.keys(bytesCompare);
  keys.forEach((par) => {
    it(`should have ${par} method`, () => {
      expect(bytesCompare).toHaveProperty(par);
      expect(bytesCompare[par]).toBeInstanceOf(Function);
    });
  });

  it('compare', () => {
    expect(compare(1024, '')).toEqual(false);
    expect(compare(1024, '>=')).toEqual(false);
    expect(compare(1024, '=')).toEqual(false);
    expect(compare(1024, '1KB')).toEqual(false);

    expect(compare(1024, '=1KB')).toEqual(true);
    expect(compare(1024 * 1024, '=1MB')).toEqual(true);
    expect(compare(1024, '=1Kb')).toEqual(true);
    expect(compare(1024, '=1kb')).toEqual(true);
    expect(compare(1024, '=1kB')).toEqual(true);
    expect(compare(1024 + 1, '=1kB')).toEqual(false);

    expect(compare(1024 + 1, '>=1KB')).toEqual(true);
    expect(compare(1024 * 1024 + 1, '>=1MB')).toEqual(true);
    expect(compare(1024 + 1, '>=1Kb')).toEqual(true);
    expect(compare(1024 + 1, '>=1kb')).toEqual(true);
    expect(compare(1024 + 1, '>=1kB')).toEqual(true);
    expect(compare(1024 - 1, '>=1kB')).toEqual(false);

    expect(compare(1024 + 1, '>1KB')).toEqual(true);
    expect(compare(1024 * 1024 + 1, '>1MB')).toEqual(true);
    expect(compare(1024 + 1, '>1Kb')).toEqual(true);
    expect(compare(1024 + 1, '>1kb')).toEqual(true);
    expect(compare(1024 + 1, '>1kB')).toEqual(true);
    expect(compare(1024, '>1kB')).toEqual(false);

    expect(compare(1024 - 1, '<=1KB')).toEqual(true);
    expect(compare(1024 * 1024 - 1, '<=1MB')).toEqual(true);
    expect(compare(1024 - 1, '<=1Kb')).toEqual(true);
    expect(compare(1024 - 1, '<=1kb')).toEqual(true);
    expect(compare(1024 - 1, '<=1kB')).toEqual(true);
    expect(compare(1024 + 1, '<=1kB')).toEqual(false);

    expect(compare(1024 - 1, '<1KB')).toEqual(true);
    expect(compare(1024 * 1024 - 1, '<1MB')).toEqual(true);
    expect(compare(1024 - 1, '<1Kb')).toEqual(true);
    expect(compare(1024 - 1, '<1kb')).toEqual(true);
    expect(compare(1024 - 1, '<1kB')).toEqual(true);
    expect(compare(1024, '<1kB')).toEqual(false);
  });
});

describe('log', () => {
  it('should invoke success', () => {
    const res = log('test');
    expect(log).toBeInstanceOf(Function);
    expect(res).toBeTruthy();
  });

  it('should return a function', () => {
    const res = log('test');
    expect(log).toBeInstanceOf(Function);
    expect(res).toBeTruthy();
    expect(res).toBeInstanceOf(Function);

    const res2 = log('test', 'extra param');
    expect(log).toBeInstanceOf(Function);
    expect(res2).toBeTruthy();
    expect(res2).toBeInstanceOf(Function);

    const res3 = log();
    expect(res3).toBeTruthy();
    expect(res3).toBeInstanceOf(Function);
  });
});
