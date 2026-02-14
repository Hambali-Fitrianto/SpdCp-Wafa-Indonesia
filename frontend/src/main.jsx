import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/*
|--------------------------------------------------------------------------
| TOAST SYSTEM
|--------------------------------------------------------------------------
*/
import { Toaster } from "react-hot-toast";

/*
|--------------------------------------------------------------------------
| REACT QUERY (ENTERPRISE DATA LAYER)
|--------------------------------------------------------------------------
*/
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>

        {/* GLOBAL TOAST */}
        <Toaster
            position="top-right"
            toastOptions={{
                style: {
                    background: "#1e293b",
                    color: "#fff",
                    border: "1px solid #334155",
                },
                success: { duration: 3000 },
                error: { duration: 4000 },
            }}
        />

    </React.StrictMode>
);