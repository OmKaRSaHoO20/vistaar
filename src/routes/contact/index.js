import { BASE_PATH_TO_CONTACTS } from "../../base_paths";
import Layout from "../../layouts/layout";
import Contact from "../../pages/contact";

const ContactPageRoute = {
    path: BASE_PATH_TO_CONTACTS,
    element: <Layout />,
    children: [
        {
            path: BASE_PATH_TO_CONTACTS,
            element: <Contact />
        },
    ]
};

export default ContactPageRoute;
