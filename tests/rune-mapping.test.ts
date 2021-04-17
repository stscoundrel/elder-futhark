import elderFuthark from '../src';

describe('Rune mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = elderFuthark.getRuneMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Runes in map have matching letters', () => {
    const resultMap = elderFuthark.getRuneMapping();

    expect(resultMap.get('ᚠ')).toBe('f');
    expect(resultMap.get('ᚢ')).toBe('u');
    expect(resultMap.get('ᚦ')).toBe('þ');
    expect(resultMap.get('ᚨ')).toBe('a');
    expect(resultMap.get('ᚱ')).toBe('r');
    expect(resultMap.get('ᚲ')).toBe('k');
    expect(resultMap.get('ᚷ')).toBe('g');
    expect(resultMap.get('ᚹ')).toBe('w');
    expect(resultMap.get('ᚺ')).toBe('h');
    expect(resultMap.get('ᚻ')).toBe('h');
    expect(resultMap.get('ᚾ')).toBe('n');
    expect(resultMap.get('ᛁ')).toBe('i');
    expect(resultMap.get('ᛃ')).toBe('j');
    expect(resultMap.get('ᛇ')).toBe('ï');
    expect(resultMap.get('ᛈ')).toBe('p');
    expect(resultMap.get('ᛉ')).toBe('z');
    expect(resultMap.get('ᛊ')).toBe('s');
    expect(resultMap.get('ᛋ')).toBe('s');
    expect(resultMap.get('ᛏ')).toBe('t');
    expect(resultMap.get('ᛒ')).toBe('b');
    expect(resultMap.get('ᛖ')).toBe('e');
    expect(resultMap.get('ᛗ')).toBe('m');
    expect(resultMap.get('ᛚ')).toBe('l');
    expect(resultMap.get('ᛜ')).toBe('ŋ');
    expect(resultMap.get('ᛝ')).toBe('ŋ');
    expect(resultMap.get('ᛟ')).toBe('o');
    expect(resultMap.get('ᛞ')).toBe('d');
    expect(resultMap.get(':')).toBe(' ');
  });
});
