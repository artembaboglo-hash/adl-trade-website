export type ValidationErrors = Record<string, string>;

export const isEmailValid = (value: string) => /\S+@\S+\.\S+/.test(value);

export function validateRequiredFields(
  data: Record<string, string>,
  requiredKeys: string[]
): ValidationErrors {
  const errors: ValidationErrors = {};
  requiredKeys.forEach((key) => {
    if (!data[key] || data[key].trim().length === 0) {
      errors[key] = "This field is required.";
    }
  });
  return errors;
}
