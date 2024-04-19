// user schema

import { Schema, model, models } from "mongoose";

// clerkId, email, username, photo, firstName, lastName, cartItesm.
export interface TUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  cartItem?: number | undefined;
}

const UserSchema: Schema<TUser> = new Schema<TUser>({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  cartItem: { type: Number },
});

const User = model<TUser>("User", UserSchema);
export default User;
