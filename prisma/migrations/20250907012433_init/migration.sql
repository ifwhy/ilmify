-- CreateTable
CREATE TABLE "public"."surah" (
    "id" INTEGER NOT NULL,
    "sequence" INTEGER NOT NULL,
    "number_of_verses" INTEGER NOT NULL,
    "name_short" TEXT NOT NULL,
    "name_long" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_id" TEXT NOT NULL,
    "translation_en" TEXT NOT NULL,
    "translation_id" TEXT NOT NULL,
    "revelation" TEXT NOT NULL,
    "revelation_en" TEXT NOT NULL,
    "revelation_id" TEXT NOT NULL,
    "tafsir" TEXT NOT NULL,
    "audio_url" TEXT NOT NULL,

    CONSTRAINT "surah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ayat" (
    "id" INTEGER NOT NULL,
    "surah_number" INTEGER NOT NULL,
    "ayat_number" INTEGER NOT NULL,
    "arabic" TEXT NOT NULL,
    "kitabah" TEXT NOT NULL,
    "latin" TEXT NOT NULL,
    "translation" TEXT NOT NULL,

    CONSTRAINT "ayat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hadits" (
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "hadits_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "public"."detail_hadits" (
    "id" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "arab" TEXT NOT NULL,
    "terjemah" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "detail_hadits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."asmaul_husna" (
    "id" INTEGER NOT NULL,
    "latin" TEXT NOT NULL,
    "arabic" TEXT NOT NULL,
    "id_translation" TEXT NOT NULL,
    "en_translation" TEXT NOT NULL,

    CONSTRAINT "asmaul_husna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."niat_sholat" (
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "arabic" TEXT NOT NULL,
    "latin" TEXT NOT NULL,
    "translation" TEXT NOT NULL,

    CONSTRAINT "niat_sholat_pkey" PRIMARY KEY ("number")
);

-- AddForeignKey
ALTER TABLE "public"."ayat" ADD CONSTRAINT "ayat_surah_number_fkey" FOREIGN KEY ("surah_number") REFERENCES "public"."surah"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."detail_hadits" ADD CONSTRAINT "detail_hadits_slug_fkey" FOREIGN KEY ("slug") REFERENCES "public"."hadits"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
