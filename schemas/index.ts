import z from "zod";

export const addNewSliderValidate = z.object({
  title: z.string(),
  sub: z.string(),
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
