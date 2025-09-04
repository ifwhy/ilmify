export interface ISurah {
    number: string;
    sequence: string;
    number_of_verses: string;
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
}

export interface IDetailSurah {
    surah_number: number;
    arabic: string;
    latin: string;
    transliteration: string;
    translation: string;
    total_ayat: number;
    location: "makkiyah" | "madaniyyah";
    ayat: IAyat[];
}

export interface IAyat {
    surah_number: number;
    ayat_number: number;
    arabic: string;
    kitabah: string;
    latin: string;
    translation: string;
}