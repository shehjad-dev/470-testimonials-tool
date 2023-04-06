import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

const publishableKey = import.meta.env
    .VITE_SOME_REACT_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
    <ClerkProvider publishableKey={publishableKey}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
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
