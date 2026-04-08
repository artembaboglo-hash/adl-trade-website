"use client";

import { useId, useMemo, useState } from "react";
import { FormField } from "@/components/forms/FormField";
import { isEmailValid, validateRequiredFields, type ValidationErrors } from "@/lib/validation";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
};

type InquiryFormProps = {
  title: string;
  fields: Field[];
  submitLabel?: string;
  showUploadPlaceholder?: boolean;
};

export function InquiryForm({ title, fields, submitLabel = "Submit Inquiry", showUploadPlaceholder }: InquiryFormProps) {
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

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-2xl font-semibold text-body">{title}</h3>
      <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
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
              <span className="mb-2 block text-sm font-medium text-slate-700">File Upload (optional)</span>
              <div
                role="note"
                className="rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-sm text-slate-500"
              >
                Upload integration placeholder (CV, portfolio, product sheet, etc.)
              </div>
            </label>
          </div>
        ) : null}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            {submitLabel}
          </button>
        </div>
      </form>
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
    </section>
  );
}
