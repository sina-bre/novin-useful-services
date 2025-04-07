import { z } from 'zod';

const cardInputValidation = z.string().length(4).regex(/^\d+$/);

export const creditCardSchema = z
  .object({
    input1: cardInputValidation,
    input2: cardInputValidation,
    input3: cardInputValidation,
    input4: cardInputValidation,
  })
  .refine((data) => {
    const fullCard = Object.values(data).join('');
    return fullCard.length === 16;
  });
