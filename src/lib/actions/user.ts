"use server";

import { json } from "stream/consumers";
import { connectToDatabase } from "../database/db";
import User from "../database/models/user.model";
import { revalidatePath } from "next/cache";
import { UpdateUserType, createUserType } from "@/app/types";

// CRUD operation for user, using webhook

// create
export async function createUser(user: createUserType) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.error(err);
  }
}

// Read
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    console.error(err);
  }
}

// Update
export async function updateUser(clerkId: string, user: UpdateUserType) {
  try {
    await connectToDatabase();
    // findOneAndUpdate(filter, update, options)
    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User Updation failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (err) {
    console.error(err);
  }
}


// DELETE
export async function deleteUser(clerkId: string) {
    try {   
        await connectToDatabase();

        const userToDelete = await User.findOne({clerkId})

        if(!userToDelete)
            throw new Error("user not found")
        
        const deletedUser = await User.findByIdAndDelete(userToDelete._id)
        revalidatePath("/")


        return deletedUser ? JSON.parse(JSON.stringify(deleteUser)) : null
    } catch( err)
    {
        console.error(err)
    }
}


// cartItems increment
