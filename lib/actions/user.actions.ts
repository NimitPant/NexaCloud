"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

import { getUserId } from "@/lib/auth";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// GET USER
export async function getUser() {
  try {
    await connectToDatabase();

    const userId = await getUserId();

    if (!userId) {
      throw new Error("User not found");
    }

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// GET USER BY ID
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(updateData: UpdateUserParams) {
  try {
    const userId = await getUserId();
    if (!userId) throw new Error("User not found to update");

    await connectToDatabase();
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser() {
  try {
    const userId = await getUserId();
    if (!userId) throw new Error("User not found to delete");

    await connectToDatabase();
    
    const userToDelete = await User.findById(userId);
    if (!userToDelete) throw new Error("User not found");

    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// GET CURRENT USER
export async function getCurrentUser() {
  try {
    await connectToDatabase();
    const userId = await getUserId();
    if (!userId) return null;
    const user = await User.findById(userId);
    return user ? JSON.parse(JSON.stringify(user)) : null;
  } catch (error) {
    handleError(error);
    return null;
  }
}

// UPDATE USER CREDITS
export async function updateCredits(userId: string, creditFee: number) {
  try {
    await connectToDatabase();
    const updatedUserCredits = await User.findByIdAndUpdate(
      userId,
      { $inc: { creditBalance: creditFee } },
      { new: true }
    );
    if (!updatedUserCredits) throw new Error("User credits update failed");
    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}