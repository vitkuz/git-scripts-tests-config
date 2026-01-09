import { z } from 'zod';

const cacheConfigSchema = z.object({
  driver: z.enum(['memory', 'redis', 'memcached']),
  ttl: z.number().min(0).default(3600),
  prefix: z.string().default('app:'),
  maxSize: z.number().min(1).default(1000),
});

type CacheConfig = z.infer<typeof cacheConfigSchema>;

const developmentCacheConfig: CacheConfig = {
  driver: 'memory',
  ttl: 60,
  prefix: 'dev:',
  maxSize: 100,
};

const productionCacheConfig: CacheConfig = {
  driver: 'redis',
  ttl: 3600,
  prefix: 'prod:',
  maxSize: 10000,
};

export { cacheConfigSchema, developmentCacheConfig, productionCacheConfig };
export type { CacheConfig };
