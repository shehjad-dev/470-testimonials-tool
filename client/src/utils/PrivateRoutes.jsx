import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
/* import Layout from "../components/Layout";
import Header from "../components/Header"; */
import DashboardLayout from "../components/DashboardLayout";

export const PrivateRoutes = () => {
    const user = useUser();
    //console.log(user);

    if (user.isLoaded) {
        return user.isSignedIn ? (
            <>
                <DashboardLayout>
                    <Outlet />
                </DashboardLayout>
            </>
        ) : (
            <Navigate to="/" />
        );
    } else {
        return null;
    }

    /* let auth = { token: true };
    return user.isSignedIn ? <Outlet /> : <Navigate to="/" />; */
};
