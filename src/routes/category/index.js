import { BASE_PATH_TO_CATEGORIES_PAGE, BASE_PATH_TO_CATEGORY_DETAILS_PAGE, BASE_PATH_TO_PRODUCTS } from "../../base_paths";
import Layout from "../../layouts/layout";
import Categories from "../../pages/categories/category";
import CategoryDetails from "../../pages/categories/category_details";

const CategoryPageRoute = {
    path: BASE_PATH_TO_PRODUCTS,
    element: <Layout />,
    children: [
        {
            path: `${BASE_PATH_TO_CATEGORIES_PAGE}/:category`,
            element: <Categories />
        },
        {
            path: `${BASE_PATH_TO_CATEGORY_DETAILS_PAGE}/:category/:id`,
            element: <CategoryDetails />
        },
    ]
};

export default CategoryPageRoute;
