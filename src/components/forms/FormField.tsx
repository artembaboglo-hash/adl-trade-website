import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  textarea?: boolean;
};

export function FormField({
  id,
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  textarea
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const commonClass = cn(
    "w-full rounded-md border bg-white px-4 py-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-1",
    error ? "border-red-500" : "border-slate-300 focus:border-primary"
  );

  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={(event) => onChange(name, event.target.value)}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(commonClass, "min-h-[120px] resize-y")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={(event) => onChange(name, event.target.value)}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={commonClass}
        />
      )}
      {error ? (
        <span id={errorId} className="mt-1 block text-xs text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}
