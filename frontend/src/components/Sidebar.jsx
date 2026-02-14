import { NavLink } from "react-router-dom";

export default function Sidebar({ open }) {

    const linkClass =
        "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition";

    const activeClass = "bg-slate-700 text-white";

    return (
        <aside
            className={`
                bg-slate-800 min-h-screen p-4
                transition-all duration-300
                ${open ? "w-64" : "w-20"}
            `}
        >

            <h2 className="text-white text-lg font-bold mb-8">
                {open ? "Admin Menu" : "⚡"}
            </h2>

            <nav className="space-y-2">

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `${linkClass} ${isActive ? activeClass : "text-gray-300"}`
                    }
                >
                    📊 {open && "Dashboard"}
                </NavLink>

                <NavLink
                    to="/leads"
                    className={({ isActive }) =>
                        `${linkClass} ${isActive ? activeClass : "text-gray-300"}`
                    }
                >
                    👥 {open && "Leads"}
                </NavLink>

                <NavLink
                    to="/activity-logs"
                    className={({ isActive }) =>
                        `${linkClass} ${isActive ? activeClass : "text-gray-300"}`
                    }
                >
                    📜 {open && "Activity Logs"}
                </NavLink>

            </nav>

        </aside>
    );
}