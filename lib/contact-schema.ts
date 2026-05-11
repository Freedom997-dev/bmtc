import { z } from "zod";

export const contactSubjects = [
  { value: "general", label: "General inquiry" },
  { value: "fuel-fleet", label: "Fuel / Fleet accounts" },
  { value: "lodging-parking", label: "Parking / Overnight stay" },
  { value: "lost-found", label: "Lost & Found" },
  { value: "other", label: "Other" },
] as const;

export const contactSubjectValues = contactSubjects.map((s) => s.value) as [
  (typeof contactSubjects)[number]["value"],
  ...(typeof contactSubjects)[number]["value"][],
];

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.enum(contactSubjectValues),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
