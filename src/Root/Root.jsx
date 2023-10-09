import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;