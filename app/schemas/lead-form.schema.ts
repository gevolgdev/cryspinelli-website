import { z } from "zod";

export const LeadFormSchema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 letras"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(11, "Whatsapp deve ter pelo menos 11 dígitos"),
    message: z.string().optional().nullable(),
});

export type Lead = z.infer<typeof LeadFormSchema>;
