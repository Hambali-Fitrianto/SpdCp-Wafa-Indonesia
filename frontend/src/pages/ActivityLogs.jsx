import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
    getActivityLogs,
    getActivityLog
} from "../services/activityLogService";

import ActivityLogModal from "../components/ActivityLogModal";

/*
|--------------------------------------------------------------------------
| STYLE MAP
|--------------------------------------------------------------------------
*/
const actionStyles = {
    LOGIN: "bg-green-500/20 text-green-400",
    LOGOUT: "bg-gray-500/20 text-gray-300",
    CREATE_LEAD: "bg-blue-500/20 text-blue-400",
    UPDATE_LEAD: "bg-yellow-500/20 text-yellow-400",
    DELETE_LEAD: "bg-red-500/20 text-red-400",
};

const actionIcons = {
    LOGIN: "🔐",
    LOGOUT: "🚪",
    CREATE_LEAD: "➕",
    UPDATE_LEAD: "✏️",
    DELETE_LEAD: "🗑️",
};

export default function ActivityLogs() {

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedLog, setSelectedLog] = useState(null);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            const data = await getActivityLogs();
            setLogs(data);
        } catch {
            toast.error("Gagal mengambil activity logs");
        } finally {
            setLoading(false);
        }
    };

    const openDetail = async (id) => {
        try {
            const log = await getActivityLog(id);
            setSelectedLog(log);
        } catch {
            toast.error("Gagal mengambil detail log");
        }
    };

    if (loading) {
        return <p className="text-white">Loading logs...</p>;
    }

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-3xl font-bold">
                    Activity Logs
                </h1>
                <p className="text-slate-400">
                    Riwayat aktivitas admin pada sistem SpdCp
                </p>
            </div>

            {/* LIST */}
            <div className="space-y-4">

                {logs.map((log) => (

                    <div
                        key={log.id}
                        onClick={() => openDetail(log.id)}
                        className="
                            group
                            bg-white/5
                            border border-white/10
                            rounded-xl
                            p-5
                            cursor-pointer
                            hover:bg-white/10
                            transition-all
                        "
                    >

                        <div className="flex justify-between gap-4">

                            {/* LEFT */}
                            <div className="flex gap-4">

                                {/* ICON */}
                                <div className="text-2xl">
                                    {actionIcons[log.action] || "📄"}
                                </div>

                                <div className="space-y-1">

                                    <span
                                        className={`
                                            px-3 py-1 text-xs rounded-full font-semibold
                                            ${actionStyles[log.action] || "bg-slate-600"}
                                        `}
                                    >
                                        {log.action.replace("_", " ")}
                                    </span>

                                    <p className="text-slate-200">
                                        {log.description}
                                    </p>

                                </div>
                            </div>

                            {/* TIME */}
                            <div className="text-sm text-slate-400 whitespace-nowrap">
                                {new Date(log.created_at).toLocaleString()}
                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <ActivityLogModal
                log={selectedLog}
                onClose={() => setSelectedLog(null)}
            />

        </div>
    );
}