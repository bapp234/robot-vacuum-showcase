import { z } from "zod";

export const GENDER_OPTIONS = [
  "male",
  "female",
  "prefer_not_to_say",
] as const;

export const claimOfferSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(50, { message: "Name cannot exceed 50 characters." }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." }),

  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10,11}$/, {
      message: "Phone number must contain 10–11 digits.",
    }),

  age: z.preprocess(
  (value) => Number(value),
  z
    .number()
    .min(18, {
      message: "You must be at least 18 years old.",
    })
    .max(100, {
      message: "Please enter a valid age.",
    })
),

  gender: z.enum(GENDER_OPTIONS, {
    message: "Please select your gender.",
  }),
});
export type ClaimOfferInput = z.input<typeof claimOfferSchema>;

export type ClaimOfferForm = z.output<typeof claimOfferSchema>;