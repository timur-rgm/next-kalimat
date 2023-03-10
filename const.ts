export enum Tabs {
  Root = 'Главная',
  Examples = 'Примеры',
  Сognates = 'Однокоренные слова',
  Conjugation = 'Спряжение',
  Interpretations = 'Толкования',
  Connections = 'Связи',
}

export const diacritics: {[key: string]: string} = {
  a: 'А',
  i: 'И',
  u: 'У',
};

export const partsOfSpeech: {[key: string]: string} = {
  noun: 'Исм (имя)',
  verb: 'Глагол (фи`ль)',
  particle: 'Частица (харф)',
};

export const keyboardLetters = {
  firstRow: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', 'َ', 'ِ', 'ُ'],
  secondRow: ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', 'ْْ'],
  thirdRow: ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ذ'],
  fourthRow: ['ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ', 'ط'],
  firstRowB: ['', '', '', '', '', '', '', '', '', 'ً', 'ٍ', 'ٌ', 'ّ'],
  secondRowB: ['', '', '', '', '', 'أ', 'آ', 'إ', '', '', '', '', ''],
  thirdRowB: ['', '', '', '', '', 'ﻷ', 'ﻵ', 'ﻹ', '', '', ''],
  fourthRowB: ['', '', '', '', '', '', '', '', '', '', ''],
};

export enum SearchModesArabic {
  Exact = 'exact',
  Default = 'default',
  Root = 'root',
}

export enum SearchModesTranslation {
  Keywords = 'keywords',
  Full = 'full-text',
}
