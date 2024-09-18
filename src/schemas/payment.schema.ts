import { z } from 'zod';
 
 export const paymentSchema = z.object({
    amount: z.number().min(0),
    date: z.string(), // ISO date string
    loanId: z.number(),
    clientId: z.number().optional(), // Make optional if not always required
  });

 export const paymentUpdateSchema = z.object({
    amount: z.number().min(0).optional(),
    date: z.string().optional(), // ISO date string
    loanId: z.number().optional(),
    clientId: z.number().optional(),
  });

