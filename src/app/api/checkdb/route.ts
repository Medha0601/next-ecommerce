// check wether db is connected or not

import { connectToDatabase } from "@/lib/database/db";
import { NextResponse } from "next/server";

export async function GET() {
    const con = await connectToDatabase()
    return new NextResponse("connected")
}