// src/schemas/loan.schema.ts

import { z } from 'zod';

export const createLoanSchema = z.object({
  amount: z.number().positive('Amount must be a positive number.'),
  clientId: z.number().int().positive('Client ID must be a positive integer.'),
  // Agrega más campos según sea necesario
});

export const updateLoanSchema = z.object({
  id: z.number().int().positive('ID must be a positive integer.'),
  amount: z.number().positive('Amount must be a positive number.').optional(),
  clientId: z.number().int().positive('Client ID must be a positive integer.').optional(),
  // Agrega más campos según sea necesario
});

export const loanIdSchema = z.number().int().positive('ID must be a positive integer.');
