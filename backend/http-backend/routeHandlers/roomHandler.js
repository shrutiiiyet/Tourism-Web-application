import { CreateRoomSchema } from "../utils/zodValidation.js";
import { getRoomByName,
   createRoom, 
   getRoomUsers,
    getRoomByRoomId,  
    deleteRoom,
    removeUserFromRoom
   } from "../../../db/prisma/services/roomService.js";
import { connectUserWithRoom } from "../../../db/prisma/services/userService.js";

export const CreateRoom = async (req, res) => {
  try {
    // Validate request body
    const parsedData = CreateRoomSchema.safeParse(req.body);

    if (!parsedData.success) {
      res.status(403).json({
        message: "Invalid Room Name",
      });
      return;
    }
    const { roomName, destination, travelDate, timeSlot } = parsedData.data;

    const userId = req.id;

    // Check if room already exists
    const existingRoom = await getRoomByName(roomName);
    if (existingRoom) {
      res.status(402).json({
        error: "Please give a different name, this one already exists",
      });
      return;
    }

    // Create the room
    const room = await createRoom(roomName, destination, travelDate, timeSlot ,userId);
    if (!room) {
      res.status(500).json({
        error: "Failed to create the plan. Please try again later.",
      });
      return;
    }

    res.status(200).json({
      message: "Plan Created Successfully",
      roomId: room.id,
      name: room.roomName,
    });
    return;
  }
   catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({
      error: "Something went wrong while creating the room.",
    });
    return;
  }
};

// Joining a room
export const joinRoom = async (req, res) => {
  const userId = req.id;
  const { roomId } = req.body;

  if (!roomId) {
    res.status(403).json({
      message: "Room ID is required.",
    });
    return;
  }

  try {
    const room = await getRoomUsers(roomId);

    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room doesn't exist",
      });
      return;
    }

    // Check if the user is already a member
    const isAlreadyMember = room.members.some((user) => user.id === userId);

    if (!isAlreadyMember) {
      await connectUserWithRoom(roomId, userId);
    }

    res.json({
      message: "Room joined successfully.",
      roomId,
    });
    return;
  } 
  catch (error) {
    res.status(500).json({
      error: "Failed to join the room.",
    });
    return;
  }
};


export const VerifyUserInRoom = async (req, res) => {
  const userId = req.id;
  const { roomId } = req.body;

  if (!roomId) {
    res
      .status(404)
      .json({ message: "Invalid Room ID" });
    return;
  }

  try {
    const room = await getRoomByRoomId(roomId);

    if (!room) {
      res.status(404).json({ message: "Room not found" });
      return;
    }

    const isUserInRoom = room.users.some((user) => user.id === userId);
    if (!isUserInRoom) {
      res.status(403).json({ message: "Access denied.You're not in this room." });
      return;
    }

    res.json({ 
      message: "User is in the room" 
    });
    return;
  } 
  catch {
    res.status(500).json({ message: "Server error" });
    return;
  }
};

// Leaving a room
export const leaveRoom = async (req, res) => {
  const userId = req.id;
  const { roomId } = req.body;

  if (!roomId) {
    res
      .status(500)
      .json({ success: false, message: "Room ID required" });
    return;
  }

  try {
    const room = await getRoomUsers(roomId);
    if (!room) {
      res
        .status(404)
        .json({ success: false, message: "Room not found." });
      return;
    }

    if (room.userId === userId) {
      await deleteRoom(roomId);
      res
        .status(200)
        .json({ 
          success: true, 
          message: "Room deleted."
         });
      return;
    }

    await removeUserFromRoom(roomId, userId);
    res.json({ 
      success: true,
       message: "Left the room." 
      });
    return;
  } catch(e) {
    res
      .status(500)
      .json({ success: false, error: e });
    return;
  }
};
