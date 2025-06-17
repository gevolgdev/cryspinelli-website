import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "app/components/button";
import { Input } from "app/components/input";
import { EStorageKeys } from "app/enums/storageKey.enum";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEmail, MdError, MdLock } from "react-icons/md";
import { useFetcher, useNavigate } from "react-router";
import { z } from "zod";

export const schemaSignIn = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "Senha inválida"),
});

export default function SignIn() {
    const navigate = useNavigate();
    const fetcher = useFetcher<{
        error?: string;
        success?: string;
    }>();

    const error = fetcher.data?.error;
    const success = fetcher.data?.success;

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (success) {
            localStorage.setItem(EStorageKeys.ADMIN_LOGGED, success);
            navigate("/admin");
        }
    }, [success]);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaSignIn),
    });

    function onSubmit(data: z.infer<typeof schemaSignIn>) {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key as keyof typeof data]);
        }

        fetcher.submit(formData, {
            method: "post",
            action: "/api/admin/sign-in",
        });
    }

    return (
        <div className="mt-30 flex h-full w-full max-w-sm flex-col items-center justify-center gap-8 rounded-xl bg-orange-100 p-10">
            <div className="flex flex-col gap-2 text-center">
                <span className="text-3xl font-bold text-[var(--color-orange)]">
                    Olá, Crystiane!
                </span>
                <span className="text-sm text-[var(--color-light-purple)]">
                    Entre na sua conta para continuar
                </span>
            </div>

            <div className="mt-5 flex w-full flex-col items-center justify-center">
                <fetcher.Form
                    method="post"
                    action="/api/admin/sign-in"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-8"
                >
                    <Input
                        {...register("email")}
                        type="email"
                        placeholder="Digite seu email"
                        errorMessage={errors.email?.message}
                        onChange={() => {
                            clearErrors("email");
                        }}
                        leftIcon={
                            <MdEmail className="text-2xl text-[var(--color-light-purple)]" />
                        }
                    />

                    <Input
                        {...register("password")}
                        type="password"
                        placeholder="Digite sua senha"
                        errorMessage={errors.password?.message}
                        onChange={() => {
                            clearErrors("password");
                        }}
                        leftIcon={
                            <MdLock className="text-2xl text-[var(--color-light-purple)]" />
                        }
                    />

                    <Button type="submit">Entrar</Button>
                </fetcher.Form>
            </div>
            {error && (
                <div className="flex w-full flex-row items-center justify-center gap-2 rounded-lg p-2">
                    <MdError className="text-xl text-[var(--color-red)]" />
                    <span className="text-sm text-[var(--color-red)]">
                        {error}
                    </span>
                </div>
            )}
        </div>
    );
}
