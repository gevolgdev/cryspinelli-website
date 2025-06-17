import { EStorageKeys } from "app/enums/storageKey.enum";
import { useEffect } from "react";
import { MdDashboard, MdPerson } from "react-icons/md";
import { Link, Outlet, redirect, useNavigate } from "react-router";

export default function AdminLayout() {
    const navigate = useNavigate();

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        const alreadyLogin = localStorage.getItem(EStorageKeys.ADMIN_LOGGED);

        if (!alreadyLogin) {
            navigate("/sign-in");
            return;
        }
    }, []);

    const links = [
        {
            label: "Dashboard",
            href: "/admin",
            icon: <MdDashboard size={20} className="text-gray-600" />,
        },
        {
            label: "Leads",
            href: "/admin/leads",
            icon: <MdPerson size={20} className="text-gray-600" />,
        },
    ];

    return (
        <div className="flex min-h-screen">
            <div className="w-64 border-r border-gray-200 bg-white px-4 py-8">
                <div className="mb-8">
                    <Link
                        to="/"
                        className="font-[Aclonica] text-2xl text-[var(--color-orange)]"
                    >
                        Crys Pinelli
                    </Link>
                </div>
                <nav className="space-y-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Conteúdo Principal */}
            <div className="flex-1 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
}
