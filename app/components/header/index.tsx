import { Link } from "react-router";

function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-8 xl:px-12 xl:py-8">
            <Link to="/">
                <span className="font-[Aclonica] text-[20px] text-[var(--color-dark-purple)] xl:text-2xl">
                    Crys Pinelli
                </span>
            </Link>
            <h3 className="font-[Aclonica] text-[13px] text-[var(--color-dark-purple)] xl:text-lg">
                Aprendizagem Infantil
            </h3>
        </header>
    );
}

export { Header };
