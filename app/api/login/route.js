import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { userWithoutPassword } from "@/lib/healpers";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { email, password } = body || {};
    const user = await prisma.users.findUnique({
      where: { email },
    });

    // Check if user exists
    if (!user) {
      return NextResponse.json(
        {
          message: "user not found",
          success: false,
        },
        { status: 409 }
      );
    }
    // Check if password exists
    if (!password) {
      return NextResponse.json(
        {
          message: "Please login via the method you used to signup",
          success: false,
        },
        { status: 409 }
      );
    }
    // Check password matches
    const isPasswordMatched = await bcrypt.compare(password, user?.password);
    if (!isPasswordMatched) {
      return NextResponse.json(
        { message: "Incorrect password", success: false },
        { status: 409 }
      );
    }
    // final response
    return NextResponse.json(
      { message: "Login Successfully", data: userWithoutPassword(user) },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error },
      { status: 500 }
    );
  }
}
