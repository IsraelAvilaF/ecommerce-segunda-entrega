import { Navigate } from "react-router";
import { useOrder } from "../../context/OrderContext";

export default function AdminGuard({children}) {

    const {user} = useOrder();

    return user?.role === 'admin' ? children : <Navigate to="/" replace />;

}
