import z from "zod";

export const addNewSliderValidate = z.object({
  title: z.string(),
  sub: z.string(),
});
export const addReviews = z.object({
  title: z.string(),
  body: z.string(),
  date: z.string(),
  location: z.string(),
});
export const validateParamId = z.string();
export const validateHistory = z.object({
  id: z.string(),
  history: z.string(),
  years: z.number().min(1),
});
export const validateNewsPost = z.object({
  title: z.string(),
  body: z.string(),
  publish: z.enum(["true", "false"]),
});
export const validateContact = z.object({
  fullname: z.string(),
  email: z.string().email(),
  message: z.string(),
});
export const validateReview = z.object({
  fullname: z.string(),
  rank: z.string(),
  review: z.string(),
});
export const validateReviewStatus = z.object({
  publish: z.boolean(),
});
export const validateFaqs = z.object({
  question: z.string(),
  answer: z.string(),
});
export const validateAdmissionList = z.object({
  fullname: z.string(),
  email: z.string().email(),
  status: z.number(),
});
