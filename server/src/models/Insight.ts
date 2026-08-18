import mongoose, { Schema, model, type Document } from 'mongoose';

export interface IInsight extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: { url: string; publicId: string };
  category: string;
  author: string;
  tags: string[];
  published: boolean;
  likes: number;
  enableSharing: boolean;
  enableComments: boolean;
  enableLikes: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const insightSchema = new Schema<IInsight>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { url: { type: String }, publicId: { type: String } },
    category: { type: String, required: true },
    author: { type: String, default: 'Pitches Creative' },
    tags: [{ type: String }],
    published: { type: Boolean, default: true },
    likes: { type: Number, default: 0 },
    enableSharing: { type: Boolean, default: true },
    enableComments: { type: Boolean, default: true },
    enableLikes: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model<IInsight>('Insight', insightSchema);

