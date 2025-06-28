import { z } from "zod";

// Email Schema
export const emailSchema = z
  .string()
  .trim()
  .email({ message: "Please enter a valid email address" })
  .nonempty({ message: "Email is required" });


// Password Schema
export const passwordSchema = z
  .string()
  .trim()
  .nonempty({ message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(64, { message: "Password cannot exceed 64 characters" })
  .regex(/[A-Z]/, {
    message: "Password must include at least one uppercase letter",
  })
  .regex(/[a-z]/, {
    message: "Password must include at least one lowercase letter",
  })
  .regex(/\d/, { message: "Password must include at least one number" })
  .regex(/[^A-Za-z0-9]/, {
    message: "Password must include at least one special character",
  });

export const timeSchema = z.
  enum(["Morning, Noon, Evening, Night, Midnight"])
  .nonempty({message: "Please specify the time period"})

  
// Create User Schema (Signup)
export const CreateUserSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const CreateRoomSchema = z.object({
  roomName: z.string().max(50),
  userId: z.string().nonempty(),
  destination: z.string().nonempty().trim().nonempty({message: "Destination is required"}),
  travelDate: z.date().nonempty({message: "Date is required"}),
  timeSlot: timeSchema,
})