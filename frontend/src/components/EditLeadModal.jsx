import { useState, useEffect } from "react";

export default function EditLeadModal({ lead, onClose, onSave }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        whatsapp: "",
        institution: "",
    });

    useEffect(() => {
        if (lead) {
            setForm({
                id: lead.id,
                name: lead.name || "",
                email: lead.email || "",
                whatsapp: lead.whatsapp || "",
                institution: lead.institution || "",
            });
        }
    }, [lead]);

    if (!lead) return null;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        onSave(form);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <form
                onSubmit={submit}
                className="bg-slate-800 p-6 rounded-xl w-96 space-y-4 shadow-xl"
            >
                <h2 className="text-white text-xl font-bold">
                    Edit Lead
                </h2>

                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-700 text-white"
                    required
                />

                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-700 text-white"
                    required
                />

                <input
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-700 text-white"
                    required
                />

                <input
                    name="institution"
                    value={form.institution}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-700 text-white"
                    required
                />

                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 rounded text-white"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
                    >
                        Update
                    </button>
                </div>
            </form>

        </div>
    );
}