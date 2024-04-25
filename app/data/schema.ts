import { z } from "zod";

export const guestSchema = z.object({
  id: z.number(),
  businessDate: z.string(),
  status: z.string(),
  shift: z.string(),
  start: z.string(),
  end: z.string(),
  quantity: z.number(),
  customer: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  area: z.string(),
  guestNotes: z.string(),
});

export type Guest = z.infer<typeof guestSchema>;
