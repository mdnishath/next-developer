import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { userWithoutPassword } from "@/lib/healpers";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, email, password } = body || {};

    // check if the user already exists
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exist",
          data: userWithoutPassword(existingUser),
          success: false,
        },
        { status: 409 }
      );
    }
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: await bcrypt.hash(password, 10),
      },
    });

    return NextResponse.json(
      {
        message: "User Created Successfully",
        data: userWithoutPassword(user),
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error, success: false },
      { status: 500 }
    );
  }
}
