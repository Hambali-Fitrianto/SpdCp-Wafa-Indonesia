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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function LeadsChart({ leads }) {

    /*
    |--------------------------------------------------------------------------
    | GROUP LEADS BY DATE
    |--------------------------------------------------------------------------
    */
    const grouped = {};

    leads.forEach((lead) => {
        const date = new Date(lead.created_at)
            .toLocaleDateString();

        grouped[date] = (grouped[date] || 0) + 1;
    });

    const labels = Object.keys(grouped);
    const values = Object.values(grouped);

    const data = {
        labels,
        datasets: [
            {
                label: "Leads per Day",
                data: values,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    return (
        <div className="bg-white/10 p-6 rounded-xl">
            <Bar data={data} options={options} />
        </div>
    );
}