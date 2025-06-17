import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-auto flex w-full flex-col bg-[var(--color-orange)] px-8 py-8 sm:px-12 sm:py-10">
            <div className="flex w-full flex-col justify-between gap-8 sm:flex-row sm:items-center">
                <div className="flex w-full flex-col gap-2 sm:w-1/3">
                    <h3 className="font-[Aclonica] text-xl text-white sm:text-2xl">
                        Crys Pinelli
                    </h3>
                    <p className="font-[Aclonica] text-xs text-white opacity-70 sm:text-sm">
                        Diversão, afeto e muito
                        <br /> conhecimento em um só lugar!
                    </p>
                </div>
                <div className="flex w-full sm:w-1/3 sm:justify-center">
                    <h5 className="font-[Aclonica] text-sm text-white">
                        Todos os direitos reservados &copy; {currentYear}
                    </h5>
                </div>
                <div className="flex w-full flex-row items-center gap-4 sm:w-1/3 sm:justify-end">
                    <h5 className="text-sm text-white">
                        <a
                            href="https://wa.me/5519982178975"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center gap-1"
                        >
                            <FaWhatsapp size={20} className="text-white" />
                            <span className="text-sm text-white">Whatsapp</span>
                        </a>
                    </h5>
                    <h5 className="text-sm text-white">
                        <a
                            href="https://www.instagram.com/cryspinelli/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center gap-1"
                        >
                            <FaInstagram size={20} className="text-white" />
                            <span className="text-sm text-white">
                                Instagram
                            </span>
                        </a>
                    </h5>
                    <h5 className="text-sm text-white">
                        <a
                            href="https://www.tiktok.com/@crys.pinelli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center gap-1"
                        >
                            <FaTiktok size={20} className="text-white" />
                            <span className="text-sm text-white">TikTok</span>
                        </a>
                    </h5>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
