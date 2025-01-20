import { createBrowserRouter } from "react-router";
import App from "../App";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <div>Home</div>,
            },
            {
                path: '/home',
                element: <div>Home</div>,
            },
        ],
    }
]);

export default routes;