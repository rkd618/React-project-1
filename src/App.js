import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import ScrollToTop from "./utills/ScrolltoTop.js";

const AppLayout = () => {
    return <div className="App">
        <Header/>
        <Outlet/>
        {/* <ScrollToTop/> */}
    </div>
}
const appRouter = createBrowserRouter([
    {
        
        path: "/",
        element: <AppLayout />,
        errorElement: < Error />,
        children: [
            {
             path: "/",
             element: <Body/>,
            },
            {
            path: "/RestaurantMenu/:resId",
            element: <RestaurantMenu />
            },
            {
            path: "/About",
            element: <About />,
            },
            {
            path:"/ContactUs",
            element: <ContactUs />,
            },
            ],
        },]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);