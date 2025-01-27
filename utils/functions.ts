import { Response } from "express";
import db from "./mysqlApi";
export function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}
export const generateRandomId = function (length: number = 16): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export const returnJSONSuccess = (
  responseObject: Response,
  rest?: object | undefined,
  status = 200
) => {
  responseObject.status(status);
  return responseObject.json({
    status: true,
    message: "Successful",
    ...rest,
  });
};
export const returnJSONError = (
  responseObject: Response,
  rest?: object | undefined,
  status = 400
) => {
  responseObject.status(status);
  responseObject.json({
    status: false,
    message: "Error: An error occurred",
    ...rest,
  });
};
export const generateRandomNumbers = (repeatNumber: number = 4) => {
  let otp = "";

  for (let i = 0; i < repeatNumber; i++) {
    // Generate a random digit between 0 and 9
    const randomDigit = Math.floor(Math.random() * 10);
    otp += randomDigit.toString();
  }

  return parseInt(otp);
};
export const getSliderContent = async () => {
  const sliders = await db.query("SELECT * FROM slider");
  return sliders;
};
export const getHeroContent = async () => {
  const content = await db.query("SELECT * FROM hero LIMIT 1");
  return content[0];
};
export const getAboutContent = async () => {
  const abouts = await db.query("SELECT * FROM about");
  return abouts;
};
export const getHistoryContent = async () => {
  const content = await db.query("SELECT * FROM history LIMIT 1");
  return content[0];
};
export const getGalleryContent = async (count?: number) => {
  const query = count
    ? `SELECT * FROM gallery LIMIT ${count}`
    : "SELECT * FROM gallery";
  const content = await db.query(query);
  return content;
};
export const getNewsContent = async (publish: boolean, limit?: number) => {
  let query = "SELECT * FROM news";
  const conditions = [];

  if (publish) {
    conditions.push("publish = 1");
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  query += " ORDER BY createdAt ASC";

  if (limit) {
    query += ` LIMIT ${limit}`;
  }

  const content = await db.query(query);
  return content;
};
export const getEvent = async (limit: number, occurred: boolean) => {
  let query = "SELECT * FROM events";
  const conditions = [];

  if (occurred) {
    conditions.push(
      `date >= '${new Date().toISOString().slice(0, 19).replace("T", " ")}'`
    );
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  query += " ORDER BY date ASC";

  if (limit) {
    query += ` LIMIT ${limit}`;
  }

  const events = await db.query(query);
  return events;
};
