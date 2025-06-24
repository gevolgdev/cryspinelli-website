import { MdOutlineArrowOutward, MdOutlineTouchApp } from "react-icons/md";
import { useLoaderData } from "react-router";
import { getAllLinks } from "~/repository/get-all-links";

export async function loader() {
    return await getAllLinks();
}

export default function Links() {
    const { links } = useLoaderData<typeof loader>();

    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-10">
            <h1 className="text-center font-[Aclonica] text-4xl text-[var(--color-orange)] sm:text-6xl">
                Explore nossos links favoritos
            </h1>
            <div className="mt-10 flex w-full flex-col items-center gap-4">
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        className="flex w-full flex-row items-center justify-between rounded-full border border-[var(--color-light-purple)] p-4 font-[Aclonica] text-[var(--color-light-purple)] sm:w-1/3"
                    >
                        <MdOutlineTouchApp className="text-2xl" />
                        <span className="flex flex-row items-center gap-4">
                            {link.title}
                        </span>
                        <MdOutlineArrowOutward className="text-2xl" />
                    </a>
                ))}
            </div>
        </div>
    );
}
