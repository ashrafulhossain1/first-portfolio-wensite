import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import '../pages/Shared/navbar.css'

const MainLayout = () => {
    return (
        <>
            <div >
                <div className='sticky navbar-css  nav-glass  top-0 left-0 z-40'>
                    <Navbar></Navbar>
                </div>
                <div className=''>
                    <Outlet></Outlet>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default MainLayout; 