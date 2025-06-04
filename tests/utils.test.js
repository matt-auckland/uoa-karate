import { describe, it, expect, vi } from 'vitest';
import utils from '../src/libs/utils.js';

describe('utils.randomiseArr', () => {
  it('returns shuffled array preserving items', () => {
    const randomSpy = vi.spyOn(Math, 'random');
    randomSpy
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.4)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.1);
    const arr = [1, 2, 3, 4, 5];
    const result = utils.randomiseArr(arr);
    randomSpy.mockRestore();
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});

describe('utils.calculateDateString', () => {
  it('formats start and end dates', () => {
    const start = '2023-01-01';
    const end = '2023-01-02';
    const optionsStart = utils.calculateFormatterOptions(start);
    const optionsEnd = utils.calculateFormatterOptions(end);
    const expectedStart = new Intl.DateTimeFormat('default', optionsStart).format(new Date(start));
    const expectedEnd = new Intl.DateTimeFormat('default', optionsEnd).format(new Date(end));
    const result = utils.calculateDateString(start, end);
    expect(result).toBe(`${expectedStart} - ${expectedEnd}`);
  });

  it('handles single date input', () => {
    const date = '2022-01-01';
    const options = utils.calculateFormatterOptions(date);
    const expected = new Intl.DateTimeFormat('default', options).format(new Date(date));
    expect(utils.calculateDateString(date)).toBe(expected);
  });
});
