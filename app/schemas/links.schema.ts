import { z } from "zod";

export const linksSchema = z.object({
    title: z.string().min(1, "Titulo é obrigatório"),
    url: z.string().min(1, "URL é obrigatório").url("URL inválida"),
});

export interface ILinkSchema extends z.infer<typeof linksSchema> {
    id: string;
}
