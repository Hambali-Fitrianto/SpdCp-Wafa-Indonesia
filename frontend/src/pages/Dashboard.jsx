import { useEffect, useState } from "react";
import { getLeads } from "../services/leadService";
import LeadsChart from "../components/LeadsChart";

export default function Dashboard() {

    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);
            const data = await getLeads();
            setLeads(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error(err);
            setError("Failed to load dashboard data");
        } finally {
            setLoading(false);
        }
    };

    /* ================= LOADING ================= */
    if (loading) {
        return (
            <p className="text-white">
                Loading dashboard...
            </p>
        );
    }

    /* ================= ERROR ================= */
    if (error) {
        return (
            <p className="text-red-400">
                {error}
            </p>
        );
    }

    return (
        <div className="space-y-8">

            {/* ================= TITLE ================= */}
            <div>
                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <p className="text-gray-400 mt-1">
                    Overview of leads activity
                </p>
            </div>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* TOTAL LEADS */}
                <div className="bg-white/10 border border-white/10 p-6 rounded-2xl">
                    <p className="text-gray-400 text-sm">
                        Total Leads
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                        {leads.length}
                    </h2>
                </div>

                {/* SYSTEM STATUS */}
                <div className="bg-white/10 border border-white/10 p-6 rounded-2xl">
                    <p className="text-gray-400 text-sm">
                        System Status
                    </p>

                    <h2 className="text-green-400 font-semibold mt-2">
                        ● Online
                    </h2>
                </div>

            </div>

            {/* ================= CHART ================= */}
            <div className="bg-white/10 border border-white/10 p-6 rounded-2xl">

                <h2 className="text-xl font-semibold mb-4">
                    Leads Analytics
                </h2>

                <LeadsChart leads={leads} />

            </div>

        </div>
    );
}