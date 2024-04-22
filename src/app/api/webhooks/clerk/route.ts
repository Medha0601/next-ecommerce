import { emails } from "@clerk/clerk-sdk-node";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

import { createUser, deleteUser, updateUser } from "@/lib/actions/user";
import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add webhook secret.");
  }

  // Headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // if no headers
  if (!svix_id || !svix_signature || !svix_timestamp) {
    return new Response("Error occured-- no svix headers", { status: 400 });
  }

  // BODY
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // new svix instance with secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error in verifying webhook:", err);
    return new Response("Error occured", { status: 400 });
  }

  // get ID and type
  const { id } = evt.data;
  const eventType = evt.type;
  // CREATE
  // clerkId: string,
  // email: string,
  // username: string,
  // firstName: string,
  // lastName: string;
  // cartItem?: number | undefined
  if (eventType === "user.created") {
    const { id, email_addresses, first_name, last_name, username } = evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username!,
      firstName: first_name,
      lastName: last_name,
      cartItem: 0,
    };

    const newUser = await createUser(user);

    // here we are setting metadata for the new user
    if (newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
        },
      });
    }

    return NextResponse.json({ message: "OK", user: newUser });
  }
  /*

        interface UpdateUserType {
    firstName: string,
    lastName: string,
    username: string,
}
        */
  if (eventType === "user.updated") {
    const { id, first_name, last_name, username } = evt.data;
    const user = {
      firstName: first_name,
      lastName: last_name,
      username: username!,
    };

    const updatedUser = await updateUser(id, user);

    return NextResponse.json({ message: "Ok", user: updatedUser });
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;

    const deletedUser = await deleteUser(id!);

    return NextResponse.json({ message: "OK", user: deletedUser });
  }
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
