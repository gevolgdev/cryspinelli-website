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
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export async function loader() {
    const db = await getDb();
    const leadsCollection = db.collection(ECollectionsName.LEAD_FORM);
    const leadsData = await leadsCollection.find().toArray();

    // Filtrar leads de hoje
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const leadsToday = leadsData.filter((lead) => {
        const leadDate = new Date(lead.createdAt);
        leadDate.setHours(0, 0, 0, 0);
        return leadDate.getTime() === today.getTime();
    });

    return { leads: leadsData, leadsToday };
}

export default function Admin({ loaderData }: Route.ComponentProps) {
    const { leads, leadsToday } = loaderData;

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
    );

    const chartData = {
        labels: ["Hoje"],
        datasets: [
            {
                label: "Número de Leads",
                data: [leadsToday.length],
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                borderColor: "rgb(53, 162, 235)",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Leads Cadastrados Hoje",
            },
        },
    };

    return (
        <div className="p-8">
            <h1 className="mb-8 text-3xl text-gray-600">Dashboard</h1>

            <div className="mb-8 rounded-lg bg-white p-4 shadow">
                <Bar options={chartOptions} data={chartData} />
            </div>
        </div>
    );
}
