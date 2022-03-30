-- CreateTable
CREATE TABLE "Lagging" (
    "id" SERIAL NOT NULL,
    "flag" VARCHAR(100) NOT NULL,
    "isEdit" BOOLEAN NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "placeholder" VARCHAR(100) NOT NULL,
    "defaultValue" VARCHAR(100) NOT NULL,
    "formula" VARCHAR(100),
    "valuedForFlag" TEXT[],
    "valuedByFlag" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Lagging_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lagging_id_key" ON "Lagging"("id");
