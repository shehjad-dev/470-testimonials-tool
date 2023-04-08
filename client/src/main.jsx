import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import MyForms from "./components/MyForms";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import Dashboard from "./components/Dashboard";

const publishableKey = import.meta.env
    .VITE_SOME_REACT_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
    <ClerkProvider publishableKey={publishableKey}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/forms" element={<MyForms />} />
                </Route>
                {/* <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/forms" element={<MyForms />} />
                    </Route>
                </Route> */}

                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    </ClerkProvider>
);
/* ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
); */
