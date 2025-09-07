export interface Ayat {
  id: number;
  surah_number: number;
  ayat_number: number;
  arabic: string;
  kitabah: string;
  latin: string;
  translation: string;
}

export interface IDetailSurah {
  id: number;
  sequence: number;
  number_of_verses: number;
  name_short: string;
  name_long: string;
  name_en: string;
  name_id: string;
  translation_en: string;
  translation_id: string;
  revelation: string;
  revelation_en: string;
  revelation_id: string;
  tafsir: string;
  audio_url: string;
  ayat: Ayat[];
}
