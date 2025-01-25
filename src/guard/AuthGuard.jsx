import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthGuard = () => {
    const { store: { status, user }, } = useAuth(null);

    if (status === "pending" || status === 0 ) return <p className="text-white">Loading...</p>;

    if (!user?._id) return <Navigate to="/" replace />;

    return <Outlet></Outlet>;
};

export default AuthGuard;
