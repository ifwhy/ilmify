-- CreateTable
CREATE TABLE "public"."quotes" (
    "id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "reference" TEXT NOT NULL,

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("id")
);
