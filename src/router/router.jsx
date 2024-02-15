import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../pages/BaseLayout";
import TablesBaseLayout from "../pages/TablesBaseLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: 'tables',
                element: <TablesBaseLayout />
            }
        ]
    }
])