import { z } from 'zod';

const validationConfigSchema = z.object({
  strictMode: z.boolean().default(true),
  maxFieldLength: z.number().min(1).max(10000).default(255),
  allowEmptyStrings: z.boolean().default(false),
  trimWhitespace: z.boolean().default(true),
  sanitizeHtml: z.boolean().default(true),
});

type ValidationConfig = z.infer<typeof validationConfigSchema>;

const defaultValidationConfig: ValidationConfig = {
  strictMode: true,
  maxFieldLength: 255,
  allowEmptyStrings: false,
  trimWhitespace: true,
  sanitizeHtml: true,
};

const relaxedValidationConfig: ValidationConfig = {
  strictMode: false,
  maxFieldLength: 5000,
  allowEmptyStrings: true,
  trimWhitespace: false,
  sanitizeHtml: false,
};

export { validationConfigSchema, defaultValidationConfig, relaxedValidationConfig };
export type { ValidationConfig };
