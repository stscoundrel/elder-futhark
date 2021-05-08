import elderFuthark from '../src';

describe('Letter mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = elderFuthark.getLetterMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Common letters have matching runes', () => {
    const resultMap = elderFuthark.getLetterMapping();

    expect(resultMap.get('a')).toBe('ᚨ');
    expect(resultMap.get('á')).toBe('ᚨ');
    expect(resultMap.get('b')).toBe('ᛒ');
    expect(resultMap.get('c')).toBe('ᚲ');
    expect(resultMap.get('d')).toBe('ᛞ');
    expect(resultMap.get('ð')).toBe('ᚦ');
    expect(resultMap.get('e')).toBe('ᛖ');
    expect(resultMap.get('é')).toBe('ᛖ');
    expect(resultMap.get('f')).toBe('ᚠ');
    expect(resultMap.get('g')).toBe('ᚷ');
    expect(resultMap.get('h')).toBe('ᚻ');
    expect(resultMap.get('i')).toBe('ᛁ');
    expect(resultMap.get('í')).toBe('ᛁ');
    expect(resultMap.get('j')).toBe('ᛃ');
    expect(resultMap.get('k')).toBe('ᚲ');
    expect(resultMap.get('l')).toBe('ᛚ');
    expect(resultMap.get('m')).toBe('ᛗ');
    expect(resultMap.get('n')).toBe('ᚾ');
    expect(resultMap.get('ŋ')).toBe('ᛜ');
    expect(resultMap.get('o')).toBe('ᛟ');
    expect(resultMap.get('ó')).toBe('ᛟ');
    expect(resultMap.get('p')).toBe('ᛈ');
    expect(resultMap.get('q')).toBe('ᚲ');
    expect(resultMap.get('r')).toBe('ᚱ');
    expect(resultMap.get('s')).toBe('ᛋ');
    expect(resultMap.get('t')).toBe('ᛏ');
    expect(resultMap.get('u')).toBe('ᚢ');
    expect(resultMap.get('ú')).toBe('ᚢ');
    expect(resultMap.get('v')).toBe('ᚹ');
    expect(resultMap.get('w')).toBe('ᚹ');
    expect(resultMap.get('x')).toBe('ᛋ');
    expect(resultMap.get('y')).toBe('ᛁ');
    expect(resultMap.get('ý')).toBe('ᛁ');
    expect(resultMap.get('z')).toBe('ᛉ');
    expect(resultMap.get('å')).toBe('ᛟ');
    expect(resultMap.get('ä')).toBe('ᛇ');
    expect(resultMap.get('æ')).toBe('ᛇ');
    expect(resultMap.get('ö')).toBe('ᚢ');
    expect(resultMap.get('ø')).toBe('ᚢ');
    expect(resultMap.get('þ')).toBe('ᚦ');
    expect(resultMap.get(' ')).toBe(':');
  });
});
