import { useState } from "react";

export default function CreateLeadModal({ onClose, onSave }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        whatsapp: "",
        institution: "",
    });

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
                    Tambah Lead
                </h2>

                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-700 text-white outline-none"
                    required
                />

                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-700 text-white"
                    required
                />

                <input
                    name="whatsapp"
                    placeholder="WhatsApp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-700 text-white"
                    required
                />

                <input
                    name="institution"
                    placeholder="Institution"
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
                        className="px-4 py-2 bg-green-600 rounded text-white hover:bg-green-700"
                    >
                        Save
                    </button>
                </div>
            </form>

        </div>
    );
}