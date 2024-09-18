// src/schemas/client.schema.ts

import { z } from 'zod';

export const createClientSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
});

export const updateClientSchema = z.object({
  id: z.number().int().positive('ID must be a positive integer.'),
  name: z.string().optional(),
  email: z.string().email('Invalid email address.').optional(),
});

export const clientIdSchema = z.number().int().positive('ID must be a positive integer.');
