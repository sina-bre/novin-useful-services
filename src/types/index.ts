import { creditCardSchema } from '@/validations';
import { z } from 'zod';

export * from './button.interfaces';
export * from './textField.interfaces';
export * from './navigation.interface';

export type TCreditCard = z.infer<typeof creditCardSchema>;
