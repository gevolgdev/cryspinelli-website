import { z } from "zod";

const envSchema = z.object({
    MONGO_URL: z.string(),
});

// Valida as variáveis do processo
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    console.error("⚠️ Variáveis de ambiente inválidas:", _env.error.format());
    process.exit(1); // para a aplicação, pois está sem configuração válida
}

const env = _env.data;

export default env;
