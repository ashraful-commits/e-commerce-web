import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);

export default router;
