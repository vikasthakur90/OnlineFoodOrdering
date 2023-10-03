import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import RestaurantsMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";



const AppLayout = () =>{
    const [username,setUsername] = useState();
    useEffect(()=>{
        setUsername("Vikas");
    },[])
    return(
        <UserContext.Provider value = {{ isLogged:username, setUsername }}>
        <div className="app">
            <Header/>
            <Outlet />
        </div>
        </UserContext.Provider>
    )
}
const Cart = lazy(()=>import("./component/Cart"));
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantsMenu />
            },
            {
                path:"/cart",
                element:<Suspense fallback={<h1>Loading</h1>}><Cart /></Suspense>
            }
        ],
        errorElement: <Error />
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
