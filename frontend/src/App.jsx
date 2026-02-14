import { BrowserRouter, Routes, Route } from "react-router-dom";

/*
|--------------------------------------------------------------------------
| PAGES
|--------------------------------------------------------------------------
*/
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import ActivityLogs from "./pages/ActivityLogs";

/*
|--------------------------------------------------------------------------
| LAYOUT & AUTH
|--------------------------------------------------------------------------
*/
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";

/*
|--------------------------------------------------------------------------
| APP ROUTER
|--------------------------------------------------------------------------
*/
export default function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* =========================================================
                   PUBLIC ROUTES
                ========================================================== */}
                <Route path="/" element={<Login />} />

                {/* =========================================================
                   PRIVATE ROUTES (ADMIN AREA)
                ========================================================== */}

                {/* DASHBOARD */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <Dashboard />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                {/* LEADS CRUD */}
                <Route
                    path="/leads"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <Leads />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                {/* ACTIVITY LOGS VIEWER */}
                <Route
                    path="/activity-logs"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <ActivityLogs />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}