import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div>
            {/* This Navbar */}
            <Navbar/>
            {/* This Outlate */}
            <Outlet/>
            {/* This Footer */}
            <Footer/>                      
        </div>
    );
};

export default Main;