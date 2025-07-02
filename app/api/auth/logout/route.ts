import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  try {
    // Set the token cookie to a past date to expire it immediately
    const cookie = serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0),
      path: "/",
    });

    const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 });
    response.headers.set("Set-Cookie", cookie);

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 