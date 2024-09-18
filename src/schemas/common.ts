// src/schemas/common.ts

import { z } from 'zod';

export const idSchema = z.number().int().positive('ID must be a positive integer.');
