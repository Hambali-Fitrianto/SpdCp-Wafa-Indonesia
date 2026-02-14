import { getUser, logout } from "../services/authService";

export default function Navbar({ toggleSidebar }) {

    const user = getUser();

    const handleLogout = async () => {
        await logout();
        window.location.href = "/";
    };

    return (
        <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center">

            {/* LEFT */}
            <div className="flex items-center gap-4">

                {/* HAMBURGER */}
                <button
                    onClick={toggleSidebar}
                    className="text-white text-2xl"
                >
                    ☰
                </button>

                <h1 className="text-white font-bold text-xl">
                    SpdCp — Lead Management System
                </h1>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

                <div className="text-right">
                    <p className="text-white font-semibold">
                        {user?.name}
                    </p>
                    <p className="text-gray-400 text-sm">
                        {user?.email}
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}