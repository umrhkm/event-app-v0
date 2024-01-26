import * as z from "zod";

export const eventFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at leasr 3 characters")
    .max(50, "Description must be less than 50"),
  description: z
    .string()
    .min(3, "Description must be at leasr 3 characters")
    .max(400, "Description must be less than 400"),
  location: z
    .string()
    .min(3, "Description must be at leasr 3 characters")
    .max(400, "Description must be less than 400"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
