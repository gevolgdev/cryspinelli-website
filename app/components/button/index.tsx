import type React from "react";
import { Link } from "react-router";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    to?: string;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    href?: string;
}

function Button({
    to,
    children,
    type,
    href,
    ...restButtonProps
}: IButtonProps) {
    if (to) {
        return (
            <Link to={to} className="w-full">
                <button
                    {...restButtonProps}
                    className="w-full cursor-pointer rounded-full bg-[var(--color-light-purple)] px-12 py-4 transition-all duration-300 hover:bg-[var(--color-dark-purple)]"
                >
                    <span className="font-[Aclonica] text-sm text-white">
                        {children}
                    </span>
                </button>
            </Link>
        );
    }

    if (href) {
        return (
            <div className="w-full">
                <a
                    href={href}
                    target="_blank"
                    className="flex w-full cursor-pointer items-center justify-center rounded-full bg-[var(--color-light-purple)] px-12 py-4 transition-all duration-300 hover:bg-[var(--color-dark-purple)]"
                >
                    <span className="flex flex-row items-center gap-2 font-[Aclonica] text-sm text-white">
                        {children}
                    </span>
                </a>
            </div>
        );
    }

    return (
        <div className="w-full">
            <button
                {...restButtonProps}
                type={type ?? "button"}
                className="w-full cursor-pointer rounded-full bg-[var(--color-light-purple)] px-12 py-4 transition-all duration-300 hover:bg-[var(--color-dark-purple)]"
            >
                <span className="font-[Aclonica] text-sm text-white">
                    {children}
                </span>
            </button>
        </div>
    );
}

export { Button };
