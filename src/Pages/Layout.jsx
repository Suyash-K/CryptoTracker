import Navbar from "../Components/Navbar/Navbar"
import { Outlet } from "react-router-dom";  

function MainLayout(){
    // console.log("MainLayout component rendered"); // Debug mounting
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}

export default MainLayout;   