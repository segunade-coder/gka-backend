import { NextFunction, Request, Response } from "express";
import apicache from "apicache";
import { RequestUser } from "../types";
export const cacheStatus200 = (req: Request, res: Response) =>
  res.statusCode === 200 && req.method === "GET";
export const cache = apicache.middleware;
export const cacheSuccess = cache("30 minutes", cacheStatus200);

export const clearCache = (target: string) => apicache.clear(target);
