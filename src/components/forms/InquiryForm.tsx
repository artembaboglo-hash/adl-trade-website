"use client";

import { useId, useMemo, useRef, useState } from "react";
import { FormField } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { InquiryFormSource } from "@/lib/inquiry-types";
import { isEmailValid, validateRequiredFields, type ValidationErrors } from "@/lib/validation";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
};

const FORM_UI: Record<
  Locale,
  { sending: string; success: string; network: string; server: string; rateLimit: string }
> = {
  en: {
    sending: "Sending…",
    success: "Thank you. Your request has been submitted successfully.",
    network: "Could not reach the server. Check your connection and try again.",
    server: "Something went wrong while sending. Please try again later or email us directly.",
    rateLimit: "Too many requests. Please wait a few minutes and try again."
  },
  ro: {
    sending: "Se trimite…",
    success: "Mulțumim. Solicitarea a fost trimisă cu succes.",
    network: "Nu s-a putut contacta serverul. Verificați conexiunea și încercați din nou.",
    server: "A apărut o eroare la trimitere. Încercați mai târziu sau scrieți-ne direct pe email.",
    rateLimit: "Prea multe solicitări. Așteptați câteva minute și încercați din nou."
  },
  ru: {
    sending: "Отправка…",
    success: "Спасибо. Ваш запрос успешно отправлен.",
    network: "Не удалось связаться с сервером. Проверьте соединение и попробуйте снова.",
    server: "При отправке произошла ошибка. Попробуйте позже или напишите нам на почту.",
    rateLimit: "Слишком много запросов. Подождите несколько минут и попробуйте снова."
  }
};

function uiCopy(locale: string) {
  return FORM_UI[locale as Locale] ?? FORM_UI.en;
}

export type InquiryFormProps = {
  title: string;
  /** Short paragraph below the title (e.g. what to attach). */
  intro?: string;
  /** Merged onto the outer card (e.g. tighter padding on dense layouts). */
  className?: string;
  /** Stretch card to parent height and pin content to the top (e.g. contacts sidebar). */
  fillHeight?: boolean;
  /**
   * Fields-only layout: no outer card chrome, no title/intro (parent supplies heading).
   * Pass `labelledBy` for `aria-labelledby` on the form.
   */
  embedded?: boolean;
  /** `id` of the visible heading element (when `embedded`). */
  labelledBy?: string;
  fields: Field[];
  submitLabel?: string;
  showUploadPlaceholder?: boolean;
  /** Overrides default English upload label when `showUploadPlaceholder` is set. */
  uploadLabel?: string;
  /** Overrides default English upload hint when `showUploadPlaceholder` is set. */
  uploadHint?: string;
  /** Identifies the form for email routing and logs. */
  formSource: InquiryFormSource;
  /** Active locale for API and user-facing status messages. */
  locale: Locale;
};

export function InquiryForm({
  title,
  intro,
  className,
  fillHeight,
  embedded,
  labelledBy,
  fields,
  submitLabel = "Submit Inquiry",
  showUploadPlaceholder,
  uploadLabel,
  uploadHint,
  formSource,
  locale
}: InquiryFormProps) {
  const formId = useId();
  const trapRef = useRef<HTMLInputElement>(null);
  const initial = useMemo(
    () =>
      fields.reduce<Record<string, string>>((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {}),
    [fields]
  );

  const [data, setData] = useState<Record<string, string>>(initial);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error" | "network">("idle");
  const [submitting, setSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const copy = uiCopy(locale);

  const onChange = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerMessage(null);
    const required = fields.filter((field) => field.required).map((field) => field.name);
    const validation = validateRequiredFields(data, required);

    const emailField = fields.find((field) => field.type === "email");
    if (emailField && data[emailField.name] && !isEmailValid(data[emailField.name])) {
      validation[emailField.name] = "Please enter a valid email address.";
    }

    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      setStatus("error");
      return;
    }

    if (trapRef.current?.value?.trim()) {
      setStatus("success");
      return;
    }

    setSubmitting(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: formSource,
          locale,
          hp: trapRef.current?.value ?? "",
          fields: data
        })
      });

      if (res.status === 429) {
        setStatus("error");
        setServerMessage(copy.rateLimit);
        return;
      }

      if (res.status === 503) {
        setStatus("error");
        setServerMessage(copy.server);
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setServerMessage(copy.server);
        return;
      }

      setStatus("success");
      setData(initial);
    } catch {
      setStatus("network");
      setServerMessage(copy.network);
    } finally {
      setSubmitting(false);
    }
  };

  const Wrapper: "section" | "div" = embedded ? "div" : "section";

  return (
    <Wrapper
      className={cn(
        !embedded && "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
        embedded && "bg-transparent",
        fillHeight && "flex h-full min-h-0 flex-col",
        className
      )}
    >
      {!embedded ? (
        <>
          <h3 className="text-2xl font-semibold text-body">{title}</h3>
          {intro ? <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-slate-600 md:text-base">{intro}</p> : null}
        </>
      ) : null}
      <form
        className={cn("grid gap-4 md:grid-cols-2", embedded ? "mt-0" : "mt-6")}
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby={labelledBy}
      >
        <div className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0" aria-hidden>
          <input ref={trapRef} type="text" tabIndex={-1} autoComplete="off" />
        </div>
        {fields.map((field) => (
          <div key={field.name} className={field.textarea ? "md:col-span-2" : ""}>
            <FormField
              id={`${formId}-${field.name}`}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              textarea={field.textarea}
              value={data[field.name]}
              onChange={onChange}
              error={errors[field.name]}
            />
          </div>
        ))}
        {showUploadPlaceholder ? (
          <div className="md:col-span-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                {uploadLabel ?? "File upload (optional)"}
              </span>
              <div
                role="note"
                className="rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-sm text-slate-500"
              >
                {uploadHint ?? "Upload integration placeholder (CV, portfolio, product sheet, etc.)"}
              </div>
            </label>
          </div>
        ) : null}
        <div className="md:col-span-2">
          <Button type="submit" variant="primary" disabled={submitting}>
            {submitting ? copy.sending : submitLabel}
          </Button>
        </div>
      </form>
      {fillHeight ? <div className="min-h-0 flex-1" aria-hidden /> : null}
      {status === "success" ? (
        <p role="status" aria-live="polite" className="mt-4 rounded-md bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {copy.success}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" aria-live="assertive" className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverMessage ?? "Please review the highlighted fields and try again."}
        </p>
      ) : null}
      {status === "network" ? (
        <p role="alert" aria-live="assertive" className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverMessage ?? copy.network}
        </p>
      ) : null}
    </Wrapper>
  );
}
