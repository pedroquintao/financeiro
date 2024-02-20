import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../pages/BaseLayout";
import { MainPage } from "../pages/MainPage";
import NewControlForm from "../pages/NewControlForm";
import NewControl from "../pages/NewControl";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: 'main',
                element: <MainPage />,
            },
            {
                path: 'new-control-form',
                element: <NewControlForm />
            },
            {
                path: 'new-control',
                element: <NewControl />
            }]
        }
    ]
)