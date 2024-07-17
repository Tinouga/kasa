import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../../pages/Root";
import ErrorPage from "../../pages/Error";
import Home from '../../pages/Home';
import FicheLogement from "../../pages/FicheLogement";
import About from "../../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "logement/:logementId",
                element: <FicheLogement />,
            },
            {
                path: "about",
                element: <About />
            }
        ]
    },
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    );
}
