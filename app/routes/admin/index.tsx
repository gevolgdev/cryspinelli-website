import { useLoaderData } from "react-router";
import { getLeads } from "~/repository/get-leads";

export async function loader() {
    return await getLeads();
}

export default function Admin() {
    const { leads, leadsCount } = useLoaderData<typeof loader>();

    return (
        <div className="p-8">
            <h1 className="mb-8 text-3xl text-gray-600">Dashboard</h1>

            <div className="mb-8 rounded-lg bg-white p-4 shadow">
                <h2 className="mb-4 text-xl font-bold">Leads Cadastrados</h2>
                <p className="text-sm text-gray-500">
                    Total de leads cadastrados: {leadsCount}
                </p>
            </div>
        </div>
    );
}
