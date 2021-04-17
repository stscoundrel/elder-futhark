import elderFuthark from '../src';

describe('Runes to letters transformation tests', () => {
  test('Transforms runes to letters', () => {
    const runes = 'ᚠᚢᚦᚨᚱᚲ';
    const expected = 'fuþark';

    const result = elderFuthark.runesToLetters(runes);

    expect(result).toBe(expected);
  });

  test('Transforms full rune sentence', () => {
    // From 4th century axe in Jutland
    const runes = 'ᚹᚨᚷᚨᚷᚨᛋᛏᛁᛉ:ᚨᛚᚢ:ᚹᛁᚻᚷᚢ:ᛋᛁᚲᛁᛃᚨᛉ:ᚨᛁᚦᚨᛚᚨᛏᚨᛉ';
    const expected = 'wagagastiz alu wihgu sikijaz aiþalataz';

    const result = elderFuthark.runesToLetters(runes);

    expect(result).toBe(expected);
  });
});
