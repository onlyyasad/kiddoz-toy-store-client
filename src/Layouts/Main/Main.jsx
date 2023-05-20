import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Shared/NavBar";
import Footer from "../../Pages/Shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const Main = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;