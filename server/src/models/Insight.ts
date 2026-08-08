import { Schema, model, Document } from "mongoose";

export interface IInsight extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: { url: string; publicId: string };
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const insightSchema = new Schema<IInsight>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true }, // markdown or HTML
    coverImage: {
      url: { type: String },
      publicId: { type: String },
    },
    tags: [{ type: String }],
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model<IInsight>("Insight", insightSchema);