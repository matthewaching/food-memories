-- CreateTable
CREATE TABLE "mydishes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT,
    "location" TEXT,
    "city" TEXT,
    "type" TEXT,
    "meal" TEXT,
    "cooked" BOOLEAN,

    CONSTRAINT "mydishes_pkey" PRIMARY KEY ("id")
);
