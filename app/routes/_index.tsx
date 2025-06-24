import { Header } from "app/components/header";
import type { Route } from "./+types/_index";
import { Carrousel } from "app/components/carrousel";
import { Button } from "app/components/button";
import { Footer } from "app/components/footer";

export function meta() {
    return [
        { title: "Crys Pinelli | Artes manuais" },
        { name: "description", content: "Artes manuais" },
    ];
}

export default function _index() {
    return (
        <>
            <Header />
            <main className="mb-10 sm:mb-20">
                <section className="mb-10 flex flex-col gap-10 px-4 py-4 sm:mt-10 sm:mb-25 sm:px-12 sm:py-8">
                    <div className="flex w-full flex-col items-center justify-center gap-4">
                        <h4 className="font-[Aclonica] text-sm text-[var(--color-light-purple)] sm:text-lg">
                            Artes manuais para crianças
                        </h4>

                        <h1 className="text-center font-[Aclonica] text-4xl text-[var(--color-orange)] sm:text-6xl">
                            Descubra como as{" "}
                            <span className="text-[var(--color-light-purple)]">
                                artes
                                <br className="hidden sm:block" /> manuais
                            </span>{" "}
                            despertam o
                            <br /> potencial das crianças
                        </h1>

                        <p className="w-full text-center text-sm text-[var(--color-dark-purple)] sm:mt-10 sm:w-1/2 sm:text-lg">
                            {" "}
                            Atividades simples com as mãos podem transformar o
                            desenvolvimento infantil. Participe da nossa aula
                            on-line gratuita e veja como!
                        </p>
                    </div>
                    <div className="mx-auto flex max-w-sm items-center justify-center sm:w-full">
                        <Button to="/formulario-artes-manuais">
                            Garantir minha vaga gratuita
                        </Button>
                    </div>
                </section>
                <Carrousel />
            </main>
            <Footer />
        </>
    );
}
