import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout() {
    return (
        <div>
            <Header />

            <div className="max-w-7xl mx-auto bg-blue-50 flex h-[1200px]">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;
