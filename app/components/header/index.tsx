import { Link } from "react-router";
import { LuHeartHandshake } from "react-icons/lu";

function Header() {
    return (
        <header className="flex justify-center px-4 py-4 xl:px-12 xl:py-8">
            <Link to="/" className="flex items-center justify-center gap-1">
                <h1 className="xl:text-4.5xl flex w-full flex-row items-center gap-2 pt-5 text-center font-[Aclonica] text-4xl text-[var(--color-dark-purple)]">
                    <LuHeartHandshake /> Crys Pinelli
                </h1>
            </Link>
        </header>
    );
}

export { Header };
