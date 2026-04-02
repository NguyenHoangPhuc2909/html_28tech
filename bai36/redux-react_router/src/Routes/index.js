import LayoutDefault from "../Layout/LayoutDefault";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }
];

export default routes;