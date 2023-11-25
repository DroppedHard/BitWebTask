import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
// import NobelDetail from "../pages/NobelDetail";
import WrongUrlPage from "../pages/WrongUrlPage";
import NobelList from "../pages/NobelList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/nagrody/:lang/:year",
                element:<NobelList />
            },
        ],
    },
    {
        path: "*",
        element: <WrongUrlPage />
    }
]);

export default router;