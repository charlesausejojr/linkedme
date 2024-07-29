import { IUser } from "@/types/user";
import mongoose, { Schema, Document, models } from "mongoose";

// needed on the client
export interface ICommentBase {
  user: IUser;
  text: string;
}

// data you don't provide but has 'em
// client doesn't have 'em
export interface IComment extends Document, ICommentBase {
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    user: {
      userId: { type: String, required: true },
      userImage: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String },
    },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Comment =
  models.Comment || mongoose.model<IComment>("Comment", CommentSchema);