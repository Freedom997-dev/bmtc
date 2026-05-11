"use server";

import { Resend } from "resend";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-config";

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitContact(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      error: "Please correct the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  if (data.company_website && data.company_website.length > 0) {
    return { ok: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? `noreply@${new URL(siteConfig.url).hostname}`;

  if (!apiKey) {
    return {
      ok: false,
      error:
        "Email delivery isn't configured yet. Please call us, or set RESEND_API_KEY to enable the form.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `[${data.subject}] ${data.name} — ${siteConfig.name} contact form`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone ?? "(none)"}`,
        `Subject: ${data.subject}`,
        "",
        data.message,
      ].join("\n"),
    });
    return { ok: true };
  } catch (err) {
    console.error("[contact] resend send failed", err);
    return {
      ok: false,
      error: "We couldn't send your message right now. Please call us instead.",
    };
  }
}
