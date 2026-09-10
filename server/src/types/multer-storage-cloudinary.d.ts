declare module "multer-storage-cloudinary" {
  import { StorageEngine } from "multer";
  import { Request } from "express";

  type OptionCallback<T> = (req: Request, file: Express.Multer.File) => T | Promise<T>;

  export interface Params {
    folder?: string | OptionCallback<string>;
    public_id?: string | OptionCallback<string>;
    format?: string | OptionCallback<string>;
    [key: string]: unknown;
  }

  export interface CloudinaryStorageOptions {
    cloudinary: unknown;
    params?: Params | OptionCallback<Params>;
  }

  export class CloudinaryStorage implements StorageEngine {
    constructor(options: CloudinaryStorageOptions);
    _handleFile(
      req: Request,
      file: Express.Multer.File,
      callback: (error?: Error | null, info?: Partial<Express.Multer.File>) => void
    ): void;
    _removeFile(req: Request, file: Express.Multer.File, callback: (error: Error | null) => void): void;
  }
}
