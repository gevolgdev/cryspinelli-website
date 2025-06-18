import { Link } from "react-router";

function Header() {
    return (
        <header className="flex justify-center px-4 py-4 xl:px-12 xl:py-8">
            <Link to="/" className="flex items-center justify-center gap-1">
                <img
                    src="/app/assets/icons/logo-cryspinelli.svg"
                    alt="Crys Pinelli"
                    width={45}
                    height={45}
                />
                <h1 className="xl:text-4.5xl w-full pt-5 text-center font-[Sacramento] text-4xl text-[var(--color-dark-purple)]">
                    Crys Pinelli
                </h1>
            </Link>
        </header>
    );
}

export { Header };
