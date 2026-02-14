export default function ActivityLogModal({ log, onClose }) {

    if (!log) return null;

    return (
        <div
            className="
                fixed inset-0
                bg-black/60 backdrop-blur-sm
                flex justify-center items-center
                z-50
            "
            onClick={onClose}
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    bg-slate-900
                    border border-white/10
                    rounded-2xl
                    w-[520px]
                    p-7
                    text-white
                    space-y-6
                    shadow-2xl
                "
            >

                {/* HEADER */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">
                        Activity Detail
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                {/* CONTENT */}
                <div className="space-y-4 text-sm">

                    <div>
                        <p className="text-slate-400">Action</p>
                        <p className="font-semibold text-lg">
                            {log.action.replace("_", " ")}
                        </p>
                    </div>

                    <div>
                        <p className="text-slate-400">Description</p>
                        <p className="leading-relaxed text-slate-200">
                            {log.description}
                        </p>
                    </div>

                    <div>
                        <p className="text-slate-400">Date</p>
                        <p>
                            {new Date(log.created_at).toLocaleString()}
                        </p>
                    </div>

                </div>

                {/* FOOTER */}
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="
                            bg-red-600 hover:bg-red-700
                            px-5 py-2 rounded-lg
                            transition
                        "
                    >
                        Close
                    </button>
                </div>

            </div>

        </div>
    );
}