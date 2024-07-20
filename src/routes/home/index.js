import { BASE_PATH } from "../../base_paths";
import Layout from "../../layouts/layout";
import Home from "../../pages/home";

const LandingPageRoute = {
    path: BASE_PATH,
    element: <Layout />,
    children: [
        {
            path: BASE_PATH,
            element: <Home />
        },
    ]
};

export default LandingPageRoute;
