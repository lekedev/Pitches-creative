import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

export interface AuthRequest extends Request {
  adminId?: string;
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    req.adminId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
};