import { z } from 'zod';

const databaseConfigSchema = z.object({
  host: z.string(),
  port: z.number().min(1).max(65535),
  database: z.string(),
  username: z.string(),
  password: z.string(),
  ssl: z.boolean().default(false),
  poolSize: z.number().min(1).max(100).default(10),
});

type DatabaseConfig = z.infer<typeof databaseConfigSchema>;

const developmentDbConfig: DatabaseConfig = {
  host: 'localhost',
  port: 5432,
  database: 'app_dev',
  username: 'dev_user',
  password: 'dev_password',
  ssl: false,
  poolSize: 5,
};

const productionDbConfig: DatabaseConfig = {
  host: 'db.example.com',
  port: 5432,
  database: 'app_prod',
  username: 'prod_user',
  password: 'CHANGE_ME',
  ssl: true,
  poolSize: 20,
};

export { databaseConfigSchema, developmentDbConfig, productionDbConfig };
export type { DatabaseConfig };
