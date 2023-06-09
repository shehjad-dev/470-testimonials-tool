import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
    return (
        <div className="h-[100vh] overflow-y-hidden">
            <Header />
            <div className="max-w-7xl mx-auto bg-blue-50 flex gap-2 h-full">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
