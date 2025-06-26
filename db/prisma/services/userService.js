import { client } from "../index";

export const createUser = async (email,hashedPassword) => {
  
  return client.user.create({
    data: {
      email,
      password: hashedPassword
    },
  });
};

export const getUserByEmail = async (email) => {
  return await client.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserById = async (id) => {
  return await client.user.findUnique({
    where: {
      id,
    },
  });
};

export const connectUserWithRoom = async (roomId, userId) => {
  await client.travelPlan.update({
    where: { 
      id: roomId
    },
    data: {
      members: {
        connect: {
          id: userId 
        }
      } 
    },
  });
};
