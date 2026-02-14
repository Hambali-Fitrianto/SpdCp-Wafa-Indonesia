import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex bg-slate-900 min-h-screen">

            {/* SIDEBAR */}
            <Sidebar open={sidebarOpen} />

            {/* RIGHT AREA */}
            <div className="flex-1 flex flex-col">

                <Navbar toggleSidebar={toggleSidebar} />

                <main className="p-8 text-white">
                    {children}
                </main>

            </div>

        </div>
    );
}