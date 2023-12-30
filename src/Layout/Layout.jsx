import Home from "../Components/Pages/Home/Home";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";


const Layout = () => {
    return (
        <div className="overflow-hidden ">
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
            
        </div>
    );
};

export default Layout;