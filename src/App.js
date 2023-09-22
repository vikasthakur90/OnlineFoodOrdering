import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";


const AppLayout = () =>{
    
    return(
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement: <Error />
    },
    {
        path:"/about",
        element:<About />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
