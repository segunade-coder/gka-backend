import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import sharp from "sharp";
import path from "path";

export const optimizeImages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.files) {
    next(new BadRequest("No image available", ErrorCode.BAD_REQUEST));
  }
  try {
    const images = req.files as Express.Multer.File[];
    const processedFiles = await Promise.all(
      images.map(async (file) => {
        const outputName = `${Date.now()}_${file.originalname
          .toLowerCase()
          .replace(/ /g, "_")}.webp`;
        await sharp(file.buffer)
          .resize(800, 800, {
            fit: sharp.fit.inside,
            withoutEnlargement: true,
          })
          .webp({
            quality: 80,
            alphaQuality: 100,
            lossless: false,
          })
          .toFile(path.resolve(__dirname, `../images/`, outputName));
        return {
          ...file,
          filename: outputName,
          originalname: file.originalname,
        };
      })
    );
    req.files = processedFiles;
    next();
  } catch (error) {
    next(error);
  }
};
export const optimizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    next(new BadRequest("No image available", ErrorCode.BAD_REQUEST));
  }
  try {
    const file = req.file as Express.Multer.File;
    const outputName = `${Date.now()}_${file.originalname
      .toLowerCase()
      .replace(/ /g, "_")}.webp`;
    await sharp(file.buffer)
      .resize(800, 800, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
        alphaQuality: 100,
        lossless: false,
      })
      .toFile(path.resolve(__dirname, `../images/`, outputName));
    req.file = {
      ...file,
      filename: outputName,
      originalname: file.originalname,
    };
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const optionalOptimizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file || req.file === undefined) {
    req.file = undefined;
    return next();
  }
  try {
    const file = req.file as Express.Multer.File;
    const outputName = `${Date.now()}_${file.originalname
      .toLowerCase()
      .replace(/ /g, "_")}.webp`;
    await sharp(file.buffer)
      .resize(800, 800, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
        alphaQuality: 100,
        lossless: false,
      })
      .toFile(path.resolve(__dirname, `../images/`, outputName));
    req.file = {
      ...file,
      filename: outputName,
      originalname: file.originalname,
    };
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
