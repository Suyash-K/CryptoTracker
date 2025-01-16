import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import CoinDetailsPage from "../../Pages/CoinDetailsPage";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:coinId" element={<CoinDetailsPage/>}/>
            <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
    );
}

export default Routing;