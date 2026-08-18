import { Schema, model, Document, Types } from "mongoose";

export interface IComment extends Document {
  insight: Types.ObjectId;
  name: string;
  message: string;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    insight: { type: Schema.Types.ObjectId, ref: "Insight", required: true, index: true },
    name: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default model<IComment>("Comment", commentSchema);