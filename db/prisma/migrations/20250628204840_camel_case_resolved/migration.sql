/*
  Warnings:

  - You are about to drop the column `roomname` on the `TravelPlan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roomName]` on the table `TravelPlan` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "TravelPlan_roomname_key";

-- AlterTable
ALTER TABLE "TravelPlan" DROP COLUMN "roomname",
ADD COLUMN     "roomName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "TravelPlan_roomName_key" ON "TravelPlan"("roomName");
