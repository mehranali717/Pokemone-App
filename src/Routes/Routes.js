import { Navigate, useRoutes } from "react-router-dom";
import React, { Suspense } from "react";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import { Loader } from "../Components";

const Home = React.lazy(() => import('../Pages/Home/Home'));
const PokemoneDetail = React.lazy(() => import('../Pages/PokemoneDetail/PokemoneDetail'));
const Generation = React.lazy(() => import('../Pages/Generation/Generation'));
const Comparison = React.lazy(() => import('../Pages/Comparison/Comparison'));

const Routes =()=>{
    const routes = useRoutes([
        {
            element:<MainLayout />,
            children:[
                {path:"/home",element:<Home/>},
                {path:"/detail/:name",element:<PokemoneDetail/>},
                {path:"/genration" , element:<Generation />},
                {path:"/comparison", element:<Comparison />},
                {path:"*" , element:<Navigate to="/home" />}
            ]
        }
    ])
    return <Suspense fallback={<div><Loader /></div>} >
        {routes}
    </Suspense>
}
export default Routes;