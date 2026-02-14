import { useState } from "react";
import toast from "react-hot-toast";

import {
    deleteLead,
    updateLead,
    createLead
} from "../services/leadService";

import { useLeads } from "../hooks/useLeads";

import EditLeadModal from "../components/EditLeadModal";
import CreateLeadModal from "../components/CreateLeadModal";

export default function Leads() {

    const { data: leads = [], isLoading, refetch } = useLeads();

    const [selectedLead, setSelectedLead] = useState(null);
    const [showCreate, setShowCreate] = useState(false);
    const [search, setSearch] = useState("");

    /* ---------------- CREATE ---------------- */
    const handleCreate = async (data) => {
        await createLead(data);
        toast.success("Lead berhasil ditambahkan");
        setShowCreate(false);
        refetch();
    };

    /* ---------------- UPDATE ---------------- */
    const handleUpdate = async (lead) => {
        await updateLead(lead.id, lead);
        toast.success("Lead berhasil diupdate");
        setSelectedLead(null);
        refetch();
    };

    /* ---------------- DELETE ---------------- */
    const handleDelete = async (id) => {
        toast((t) => (
            <div className="space-x-3">
                <span>Hapus lead ini?</span>

                <button
                    onClick={async () => {
                        toast.dismiss(t.id);
                        toast.loading("Deleting...", { id: "delete" });

                        await deleteLead(id);

                        toast.success("Lead dihapus", { id: "delete" });
                        refetch();
                    }}
                    className="bg-red-600 px-3 py-1 rounded text-white"
                >
                    Yes
                </button>
            </div>
        ));
    };

    /* ---------------- SEARCH ---------------- */
    const filteredLeads = leads.filter((l) =>
        l.name?.toLowerCase().includes(search.toLowerCase()) ||
        l.email?.toLowerCase().includes(search.toLowerCase()) ||
        l.whatsapp?.toLowerCase().includes(search.toLowerCase()) ||
        l.institution?.toLowerCase().includes(search.toLowerCase())
    );

    /* ---------------- AVATAR INITIAL ---------------- */
    const getInitial = (name) =>
        name?.charAt(0).toUpperCase() || "?";

    if (isLoading) {
        return <p className="text-white">Loading leads...</p>;
    }

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    Leads Management
                </h1>

                <button
                    onClick={() => setShowCreate(true)}
                    className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-lg text-white shadow"
                >
                    + Add Lead
                </button>
            </div>

            {/* SEARCH */}
            <input
                placeholder="Search leads..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-3 rounded-lg bg-slate-800 w-full text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* TABLE CARD */}
            <div className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden border border-white/10">

                <table className="w-full">

                    <thead className="bg-slate-900 text-gray-300 text-sm">
                        <tr>
                            <th className="p-5 text-left">User</th>
                            <th>Email</th>
                            <th>WhatsApp</th>
                            <th>Institution</th>
                            <th className="text-right pr-6">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredLeads.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center py-10 text-gray-400">
                                    No leads found 🚀
                                </td>
                            </tr>
                        )}

                        {filteredLeads.map((lead) => (
                            <tr
                                key={lead.id}
                                className="border-t border-slate-700 hover:bg-slate-800/60 transition"
                            >

                                {/* USER */}
                                <td className="p-5 flex items-center gap-4">

                                    {/* AVATAR */}
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                                        {getInitial(lead.name)}
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            {lead.name}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            Lead ID #{lead.id}
                                        </p>
                                    </div>
                                </td>

                                {/* EMAIL */}
                                <td className="text-gray-300">
                                    {lead.email}
                                </td>

                                {/* WHATSAPP */}
                                <td>
                                    <a
                                        href={`https://wa.me/${lead.whatsapp}`}
                                        target="_blank"
                                        className="text-green-400 hover:underline"
                                    >
                                        {lead.whatsapp}
                                    </a>
                                </td>

                                {/* INSTITUTION BADGE */}
                                <td>
                                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">
                                        {lead.institution}
                                    </span>
                                </td>

                                {/* ACTIONS */}
                                <td className="text-right pr-6 space-x-2">

                                    <button
                                        onClick={() => setSelectedLead(lead)}
                                        className="bg-yellow-500 hover:bg-yellow-600 transition px-3 py-1 rounded-md"
                                    >
                                        ✏️
                                    </button>

                                    <button
                                        onClick={() => handleDelete(lead.id)}
                                        className="bg-red-600 hover:bg-red-700 transition px-3 py-1 rounded-md"
                                    >
                                        🗑
                                    </button>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>

            {/* CREATE MODAL */}
            {showCreate && (
                <CreateLeadModal
                    onClose={() => setShowCreate(false)}
                    onSave={handleCreate}
                />
            )}

            {/* EDIT MODAL */}
            <EditLeadModal
                lead={selectedLead}
                onClose={() => setSelectedLead(null)}
                onSave={handleUpdate}
            />

        </div>
    );
}