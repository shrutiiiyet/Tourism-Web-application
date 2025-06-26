/*
  Warnings:

  - A unique constraint covering the columns `[roomname]` on the table `TravelPlan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TravelPlan_roomname_key" ON "TravelPlan"("roomname");
