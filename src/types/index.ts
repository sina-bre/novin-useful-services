import { creditCardSchema, ibanCardSchema } from '@/validations';
import { z } from 'zod';

export * from './button.interfaces';
export * from './textField.interfaces';
export * from './navigation.interface';

export type TCreditCard = z.infer<typeof creditCardSchema>;
export type TIbanCard = z.infer<typeof ibanCardSchema>;
