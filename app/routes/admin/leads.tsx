import { useEffect, useState } from "react";
import { getDb } from "app/service/mongodb.service";
import { ECollectionsName } from "app/enums/collectionsName.enum";
import {
    MdPerson,
    MdEmail,
    MdPhone,
    MdMessage,
    MdDateRange,
} from "react-icons/md";
import type { Route } from "./+types";

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string | null;
    createdAt: Date;
}

export async function loader() {
    const db = await getDb();
    const leadsCollection = db.collection(ECollectionsName.LEAD_FORM);
    const leadsData = await leadsCollection.find().toArray();

    return { leads: leadsData };
}

export default function Leads({ loaderData }: Route.ComponentProps) {
    const { leads } = loaderData;

    return (
        <div className="p-8">
            <h1 className="mb-8 text-3xl text-gray-600">
                Gerenciamento de Leads
            </h1>

            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                <div className="flex items-center gap-2">
                                    <MdPerson className="text-[16px] text-gray-600" />
                                    Nome
                                </div>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                <div className="flex items-center gap-2">
                                    <MdEmail className="text-[16px] text-gray-600" />
                                    Email
                                </div>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                <div className="flex items-center gap-2">
                                    <MdPhone className="text-[16px] text-gray-600" />
                                    Telefone
                                </div>
                            </th>
                            <th className="max-w-20 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                <div className="flex items-center gap-2">
                                    <MdMessage className="text-[16px] text-gray-600" />
                                    Mensagem
                                </div>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                <div className="flex items-center gap-2">
                                    <MdDateRange className="text-[16px] text-gray-600" />
                                    Data de Cadastro
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {leads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {lead.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {lead.email}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {lead.phone}
                                    </div>
                                </td>
                                <td className="max-w-80 px-6 py-4">
                                    <div className="text-sm text-gray-900">
                                        {lead.message || "-"}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {new Date(
                                            lead.createdAt,
                                        ).toLocaleDateString("pt-BR")}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
