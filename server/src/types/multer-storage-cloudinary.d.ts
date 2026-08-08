// src/types/multer-storage-cloudinary.d.ts
declare module "multer-storage-cloudinary" {
  import { StorageEngine } from "multer";
  import { ConfigOptions } from "cloudinary";

  export interface Params {
    folder?: string;
    allowed_formats?: string[];
    transformation?: any[];
    [key: string]: any;
  }

  export interface CloudinaryStorageOptions {
    cloudinary: any;
    params?: Params | ((req: any, file: any) => Promise<Params> | Params);
  }

  export class CloudinaryStorage implements StorageEngine {
    constructor(options: CloudinaryStorageOptions);
    _handleFile(req: any, file: any, cb: (error?: any, info?: any) => void): void;
    _removeFile(req: any, file: any, cb: (error: any) => void): void;
  }
}