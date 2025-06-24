import { Link } from "react-router";
import Logo from "~/assets/icons/logo-cryspinelli-v2.svg";

function Header() {
    return (
        <header className="flex justify-center px-4 py-4 xl:px-12 xl:py-8">
            <Link to="/" className="flex items-center justify-center gap-1">
                <img src={Logo} alt="Logo Cryspinelli" className="w-50" />
            </Link>
        </header>
    );
}

export { Header };
