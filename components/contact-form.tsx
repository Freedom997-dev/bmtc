"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  contactSchema,
  contactSubjects,
  type ContactInput,
} from "@/lib/contact-schema";
import { submitContact } from "@/app/actions/contact";

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "general" },
  });

  const subject = watch("subject");

  function onSubmit(values: ContactInput) {
    setServerError(null);
    startTransition(async () => {
      const result = await submitContact(values);
      if (result.ok) {
        setSent(true);
      } else {
        setServerError(result.error);
      }
    });
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50 p-8 text-center dark:bg-emerald-950/30">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 dark:text-emerald-400" />
        <h3 className="mt-4 text-xl font-semibold tracking-tight">Thanks! Message sent</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll get back to you as soon as we can. For anything urgent, please call us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
        {...register("company_website")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message} htmlFor="name">
          <Input id="name" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <Input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)" error={errors.phone?.message} htmlFor="phone">
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            {...register("phone")}
          />
        </Field>
        <Field label="Subject" error={errors.subject?.message} htmlFor="subject">
          <Select
            value={subject}
            onValueChange={(v) => setValue("subject", v as ContactInput["subject"], { shouldValidate: true })}
          >
            <SelectTrigger id="subject" className="w-full">
              <SelectValue placeholder="Choose a topic" />
            </SelectTrigger>
            <SelectContent>
              {contactSubjects.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message} htmlFor="message">
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell us what you need."
          {...register("message")}
        />
      </Field>

      {serverError && (
        <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{serverError}</p>
        </div>
      )}

      <Button type="submit" disabled={pending} size="lg" className="gap-2">
        <Send className="h-4 w-4" />
        {pending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
