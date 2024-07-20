import { useRoutes } from "react-router-dom";

// ==============================|| ROUTES ||============================== //
import LandingPageRoute from "./home";
import CategoryPageRoute from "./category";
import ContactPageRoute from "./contact";

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
    return useRoutes([
        LandingPageRoute,
        CategoryPageRoute,
        ContactPageRoute
    ]);
}
