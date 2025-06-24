import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdDelete, MdError, MdLabel, MdLink } from "react-icons/md";
import { useFetcher, useLoaderData } from "react-router";
import { getAllLinks } from "~/repository/get-all-links";
import { linksSchema, type ILinkSchema } from "~/schemas/links.schema";

export async function loader() {
    return await getAllLinks();
}

export default function Linktre() {
    const fetcher = useFetcher();
    const { links } = useLoaderData<typeof loader>();

    const {
        register,
        handleSubmit,
        reset: resetForm,
        formState: { errors },
    } = useForm<Omit<ILinkSchema, "id">>({
        resolver: zodResolver(linksSchema),
    });

    function handleDeleteLink(id: string) {
        fetcher.submit(
            { id },
            {
                method: "DELETE",
                action: "/api/admin/delete-link",
            },
        );
    }

    function onSubmit(data: Omit<ILinkSchema, "id">) {
        fetcher.submit(data, {
            method: "POST",
            action: "/api/admin/create-link",
        });

        resetForm();
    }

    return (
        <div className="p-8">
            <header>
                <h1 className="mb-8 text-3xl text-gray-600">Links</h1>
            </header>

            <div className="flex flex-col gap-4">
                <table className="min-w-full divide-y divide-gray-200 overflow-x-auto rounded-lg border border-gray-200 bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                <div className="flex items-center gap-2">
                                    <MdLabel className="text-[16px] text-gray-600" />
                                    Titulo
                                </div>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                <div className="flex items-center gap-2">
                                    <MdLink className="text-[16px] text-gray-600" />
                                    URL
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {links
                            ? links.map((link) => (
                                  <tr
                                      key={link.title + link.url}
                                      className="hover:bg-gray-50"
                                  >
                                      <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">
                                              {link.title}
                                          </div>
                                      </td>
                                      <td className="flex flex-row items-center px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">
                                              {link.url}
                                          </div>

                                          <button
                                              type="button"
                                              onClick={() =>
                                                  handleDeleteLink(link.id)
                                              }
                                              className={
                                                  "ml-auto rounded-lg border border-gray-300 bg-gray-100 p-2 hover:bg-gray-200"
                                              }
                                          >
                                              <MdDelete className="text-1xl text-red-600" />
                                          </button>
                                      </td>
                                  </tr>
                              ))
                            : null}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input
                                    {...register("title")}
                                    name="title"
                                    type="text"
                                    className="w-full text-sm text-gray-800 outline-none placeholder:text-gray-400"
                                    placeholder="Titulo"
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input
                                    {...register("url")}
                                    name="url"
                                    type="text"
                                    className="w-full text-sm text-gray-800 outline-none placeholder:text-gray-400"
                                    placeholder="URL"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex w-full flex-row justify-between gap-2">
                    <div className="flex flex-col gap-2">
                        {errors.title?.message && (
                            <span className="flex items-center gap-2 text-red-500">
                                <MdError className="text-red-500" />
                                {errors.title?.message}
                            </span>
                        )}
                        {errors.url?.message && (
                            <span className="flex items-center gap-2 text-red-500">
                                <MdError className="text-red-500" />
                                {errors.url?.message}
                            </span>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={handleSubmit(onSubmit)}
                        className="ml-auto h-12 w-40 rounded-lg bg-[var(--color-orange)] px-4 py-2 text-white hover:bg-[var(--color-orange-hover)]"
                    >
                        Adicionar Link
                    </button>
                </div>
            </div>
        </div>
    );
}
