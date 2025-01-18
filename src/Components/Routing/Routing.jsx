import { Route, Routes } from "react-router-dom";
import {lazy, Suspense} from "react";
import MainLayout from "../../Pages/Layout";
import PageLoader from "../PageLoader/PageLoader"; // Fix path casing
import CustomErrorBoundary from "../ErrorBoundary/CustomErrorBoundary";



// const Home = lazy( () => import("../../Pages/Home"));
const Home = lazy(() => import('../../Pages/Home'));
const CoinDetailsPage = lazy( () => import("../../Pages/CoinDetailsPage"));

function Routing(){
    return(
        <CustomErrorBoundary>
            <Routes>
            <Route path="/" element={<MainLayout/>}>
                    <Route index element={

                        <Suspense fallback={<PageLoader/>}>
                            <Home/>
                        </Suspense>

                    }/> 

                    <Route path="/details/:coinId" element={
                        
                        <Suspense fallback={<PageLoader/>}>
                            <CoinDetailsPage/>
                        </Suspense>

                    }/>
                    <Route path="*" element={<h1>404 Not Found</h1>}/>
            </Route>
            
            </Routes>
        </CustomErrorBoundary>
        
    );
}

export default Routing;