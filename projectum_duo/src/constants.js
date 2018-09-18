const path = (path, subPath='') => './../resources/' + path + subPath;
const imgPath = (category) => path('graphics/') + category;
const soundPath = (category) => path('audio/') + category;
const txtPath = (category) => path('text/') + category;

const animalsImgPath = imgPath('animals/');
const flagsImgPath = imgPath('flags/');
const memesImgPath = imgPath('memes/');

const animalsSoundPath = soundPath('animals/');
const flagsSoundPath = soundPath('flags/');
const memesSoundPath = soundPath('memes/');

const animalsTxtPath = txtPath('animals/');
const flagsTxtPath = txtPath('flags/');
const memesTxtPath = txtPath('memes/');

export const imgUrls = {
    animals: [
      animalsImgPath + 'fish.svg',
      animalsImgPath + 'flamingo.svg',
      animalsImgPath + 'animal.svg',
      animalsImgPath + 'hedgehog.svg',
    ],
    flags: [
      flagsImgPath + 'iceland.svg',
      flagsImgPath + 'italy.svg',
      flagsImgPath + 'norway.svg',
      flagsImgPath + 'usa.svg',
    ],
    memes: [
      memesImgPath + 'forever.svg',
      memesImgPath + 'okay.svg',
      memesImgPath + 'yaoming.svg',
      memesImgPath + 'yuno.svg',
    ],
  }

export const textUrls = {
    animals: [
      animalsTxtPath + 'animals_1.json',
      animalsTxtPath + 'animals_2.json',
      animalsTxtPath + 'animals_3.json',
      animalsTxtPath + 'animals_4.json',
    ],
    flags: [
      flagsTxtPath + 'flags_1.json',
      flagsTxtPath + 'flags_2.json',
      flagsTxtPath + 'flags_3.json',
      flagsTxtPath + 'flags_4.json',
    ],
    memes: [
      memesTxtPath + 'memes_1.json',
      memesTxtPath + 'memes_2.json',
      memesTxtPath + 'memes_3.json',
      memesTxtPath + 'memes_4.json',
    ],
  }

export const soundUrls = {
    animals: [
      animalsSoundPath + 'fish.mp3',
      animalsSoundPath + 'flamingo.mp3',
      animalsSoundPath + 'monkey.mp3',
      animalsSoundPath + 'origami.mp3',
    ],
    flags: [
      flagsSoundPath + 'italy.mp3',
      flagsSoundPath + 'korea.mp3',
      flagsSoundPath + 'norway.mp3',
      flagsSoundPath + 'russia.mp3',
    ],
    memes: [
      memesSoundPath + 'illuminati.mp3',
      memesSoundPath + 'mlg.mp3',
      memesSoundPath + 'profanity.mp3',
      memesSoundPath + 'triple.3',
    ],
  }
