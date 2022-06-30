# Elder Futhark

Transform latin letters to Elder Futhark runes & vice versa

Other runic alphabets:
- [Younger Futhark](https://github.com/stscoundrel/younger-futhark)
- [Futhorc (Anglo-Saxon runes)](https://github.com/stscoundrel/futhorc)
- [Futhork (Medieval runes)](https://github.com/stscoundrel/futhork)
- [Staveless Futhark](https://github.com/stscoundrel/staveless-futhark)

### Install

`yarn add elder-futhark`

#### Usage

You can either transform runes to text, or text to runes.

Latin text to runes:

```javascript
import { lettersToRunes } from 'elder-futhark'

// Proto-norse text from 4th century axe in Jutland
const result = lettersToRunes('wagagastiz alu wihgu sikijaz aiþalataz')

console.log(result) // ᚹᚨᚷᚨᚷᚨᛋᛏᛁᛉ:ᚨᛚᚢ:ᚹᛁᚻᚷᚢ:ᛋᛁᚲᛁᛃᚨᛉ:ᚨᛁᚦᚨᛚᚨᛏᚨᛉ
```

Runes to latin text:

```javascript
import { runesToLetters } from 'elder-futhark'

const result = runesToLetters('ᚠᚢᚦᚨᚱᚲ')

console.log(result) // fuþark
```

### About Elder Futhark

The Elder Futhark, also known as the Older Futhark, is the oldest form of the runic alphabets. It was a writing system used by Germanic peoples for Northwest Germanic dialects in the Migration Period. It was used to write Proto-Norse language, predecessor of Old Norse.

In Scandinavia it later evolved to simplified Younger Futhark.
