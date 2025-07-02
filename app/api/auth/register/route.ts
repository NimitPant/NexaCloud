import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database/mongoose";
import User from "@/lib/database/models/user.model";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    
    const { email, password, firstName, lastName } = await request.json();

    if (!email || !password || !firstName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a unique username
    let username = `${firstName.toLowerCase()}${lastName ? lastName.toLowerCase() : ''}`;
    let userExists = await User.findOne({ username });
    let count = 1;
    while (userExists) {
      username = `${username}${count}`;
      userExists = await User.findOne({ username });
      count++;
    }

    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
      firstName,
      lastName,
      planId: 1, // Default plan
      creditBalance: 10, // Default credits
    });

    return NextResponse.json({ message: "User created successfully", user: { id: newUser._id, email: newUser.email } }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 