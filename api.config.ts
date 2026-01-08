import { z } from 'zod';

const apiConfigSchema = z.object({
  baseUrl: z.string().url(),
  timeout: z.number().min(1000).max(60000).default(30000),
  retries: z.number().min(0).max(5).default(3),
  headers: z.record(z.string()).default({}),
});

type ApiConfig = z.infer<typeof apiConfigSchema>;

const developmentApiConfig: ApiConfig = {
  baseUrl: 'http://localhost:3000/api',
  timeout: 5000,
  retries: 0,
  headers: { 'X-Environment': 'development' },
};

const productionApiConfig: ApiConfig = {
  baseUrl: 'https://api.example.com/v1',
  timeout: 30000,
  retries: 3,
  headers: { 'X-Environment': 'production' },
};

export { apiConfigSchema, developmentApiConfig, productionApiConfig };
export type { ApiConfig };
