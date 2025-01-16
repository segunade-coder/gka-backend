import { z } from "zod";

export type RequestUser = {
  id: string;
  email: string;
  profile: string;
};
export const validateLoginData = z.object({
  email: z.string().email(),
  password: z.string(),
});
