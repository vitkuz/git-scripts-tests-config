import { z } from 'zod';

const loggingConfigSchema = z.object({
  appName: z.string(),
  environment: z.enum(['development', 'staging', 'production']),
  logLevel: z.enum(['debug', 'info', 'warn', 'error']),
  enableConsole: z.boolean().default(true),
  enableFile: z.boolean().default(false),
  filePath: z.string().optional(),
});

type LoggingConfig = z.infer<typeof loggingConfigSchema>;

const defaultConfig: LoggingConfig = {
  appName: 'git-scripts-tests',
  environment: 'development',
  logLevel: 'info',
  enableConsole: true,
  enableFile: false,
};

const productionConfig: LoggingConfig = {
  appName: 'git-scripts-tests',
  environment: 'production',
  logLevel: 'warn',
  enableConsole: false,
  enableFile: true,
  filePath: '/var/log/app.log',
};

export { loggingConfigSchema, defaultConfig, productionConfig };
export type { LoggingConfig };
