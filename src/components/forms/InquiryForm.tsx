"use client";

import { useId, useMemo, useState } from "react";
import { FormField } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { isEmailValid, validateRequiredFields, type ValidationErrors } from "@/lib/validation";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
};

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
  uploadHint
}: InquiryFormProps) {
  const formId = useId();
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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onChange = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

    // Placeholder for backend integration.
    setStatus("success");
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
          <Button type="submit" variant="primary">
            {submitLabel}
          </Button>
        </div>
      </form>
      {fillHeight ? <div className="min-h-0 flex-1" aria-hidden /> : null}
      {status === "success" ? (
        <p role="status" aria-live="polite" className="mt-4 rounded-md bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Thank you. Your request has been submitted successfully.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" aria-live="assertive" className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          Please review the highlighted fields and try again.
        </p>
      ) : null}
    </Wrapper>
  );
}
