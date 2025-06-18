import { useFetcher } from "react-router";

import { Button } from "app/components/button";
import { Input } from "app/components/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import whatsappMockup from "app/assets/images/whatsapp-mockup.png";
import {
    MdEmail,
    MdMessage,
    MdPerson,
    MdPhone,
    MdWhatsapp,
} from "react-icons/md";

const schema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 letras"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(11, "Whatsapp deve ter pelo menos 11 dígitos"),
    message: z.string(),
});

export default function LeadForm() {
    const fetcher = useFetcher();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    function onSubmit(data: z.infer<typeof schema>) {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key as keyof typeof data]);
        }

        fetcher.submit(formData, {
            method: "post",
            action: "/api/lead-form/create-lead-form",
        });
    }

    const isSuccess = fetcher.data && fetcher.data.status === 201;

    const icons = {
        person: (
            <MdPerson size={20} className="text-[var(--color-light-purple)]" />
        ),
        email: (
            <MdEmail size={20} className="text-[var(--color-light-purple)]" />
        ),
        phone: (
            <MdPhone size={20} className="text-[var(--color-light-purple)]" />
        ),
        message: (
            <MdMessage size={20} className="text-[var(--color-light-purple)]" />
        ),
    };
    return (
        <div className="flex w-full max-w-lg flex-col items-center gap-10 px-8 py-8 sm:mt-5 sm:px-12 sm:py-8">
            <div>
                <h1 className="text-center font-[Aclonica] text-2xl text-[var(--color-orange)]">
                    {isSuccess
                        ? "Obrigado por se inscrever!"
                        : "Preencha o formulário abaixo para garantir acesso as aulas:"}
                </h1>

                {isSuccess && (
                    <p className="mt-3 text-center text-sm text-[var(--color-light-purple)]">
                        Entre no grupo do WhatsApp para receber mais informações
                        sobre as aulas.
                    </p>
                )}
            </div>

            {isSuccess ? (
                <>
                    <img
                        src={whatsappMockup}
                        alt="Whatsapp mockup"
                        width={290}
                        className="mr-10"
                    />
                    <div className="w-[290px]">
                        <Button href="https://chat.whatsapp.com/CsCMqWjVnWN0Eex2C1LC6h">
                            <MdWhatsapp size={20} className="text-white" />
                            Entrar no grupo
                        </Button>
                    </div>
                </>
            ) : (
                <fetcher.Form
                    method="post"
                    action="/api/lead-form/create-lead-form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-10"
                >
                    <Input
                        {...register("name")}
                        placeholder="Nome completo*"
                        type="text"
                        leftIcon={icons.person}
                        errorMessage={errors.name?.message}
                    />
                    <Input
                        {...register("email")}
                        placeholder="Email*"
                        type="email"
                        leftIcon={icons.email}
                        errorMessage={errors.email?.message}
                    />
                    <Input
                        {...register("phone")}
                        placeholder="Whatsapp*"
                        type="tel"
                        leftIcon={icons.phone}
                        errorMessage={errors.phone?.message}
                    />
                    <Input
                        {...register("message")}
                        placeholder="Mensagem"
                        type="text"
                        leftIcon={icons.message}
                        maxLength={100}
                        errorMessage={errors.message?.message}
                    />
                    <Button type="submit">
                        Despertar o potencial infantil
                    </Button>
                </fetcher.Form>
            )}
        </div>
    );
}
