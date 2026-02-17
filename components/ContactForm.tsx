"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "./Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const service = searchParams.get("service");

    if (service && !formState.message) {
      setFormState((prev) => ({
        ...prev,
        message: `Service: ${service}\nDetails: `,
      }));
    }
  }, [formState.message, searchParams]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (formState.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (formState.message.trim().length < 10) {
      nextErrors.message = "Tell us a little more about your project.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormState(initialState);
    }
  };

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit}
      noValidate
      aria-describedby="form-status"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Name
          <input
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-neon-cyan/60"
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.name)}
            aria-errormessage={errors.name ? "name-error" : undefined}
            placeholder="Neova Cameros"
          />
          {errors.name ? (
            <span id="name-error" className="text-xs text-neon-pink">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Email
          <input
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-neon-cyan/60"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.email)}
            aria-errormessage={errors.email ? "email-error" : undefined}
            placeholder="email@gmail.com"
          />
          {errors.email ? (
            <span id="email-error" className="text-xs text-neon-pink">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-slate-300">
        Project details
        <textarea
          className="min-h-[140px] rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-neon-cyan/60"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          aria-invalid={Boolean(errors.message)}
          aria-errormessage={errors.message ? "message-error" : undefined}
          placeholder="Tell us about timelines, goals, and dream features."
        />
        {errors.message ? (
          <span id="message-error" className="text-xs text-neon-pink">
            {errors.message}
          </span>
        ) : null}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit">Send Message</Button>
        <p id="form-status" className="text-xs text-slate-400">
          {submitted
            ? "Thanks! We will respond within 24 hours."
            : "We reply within one business day."}
        </p>
      </div>
    </form>
  );
}
