export type WordType = {
  id?: number;
  type: string;
  arabicText: string;
  rootWord: string;
  otherWordForms: string[] & [];
  lexicalComment: string & null;
  translationSearchKeywords: string[];
  translations: TranslationType[];
  additionalInfo: VerbAdditionalInfoType & NounAdditionalInfoType;
  idioms: IdiomType[] & [];
};

export type TranslationType = {
  id?: number;
  text: string;
  lexicalComment: string;
  otherArabicVariants: string[] & [];
  samples: SampleType[];
};

type SampleType = { translationText: string; arabicText: string };

type VerbAdditionalInfoType = {
  verbFormNumber: number;
  mudariLetters: MudariLetterType[];
  masdars: string[];
  otherForms: OtherVerbFormsType[] & [];
};

type MudariLetterType = {
  id: number;
  verbInfoId: number;
  pastTime: string & null;
  presentTime: string & null;
};

type OtherVerbFormsType = {
  id: number;
  arabicText: string;
  mudariLetter: string;
  masdar: string;
};

type NounAdditionalInfoType = {
  doubleForms: string[] & [];
  pluralForms: string[] & [];
  feminineForm: string & null;
};

type IdiomType = {
  arabicText: string;
  translationText: string;
};
