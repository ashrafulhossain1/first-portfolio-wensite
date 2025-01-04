import React from 'react';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <div >
                <div className=' bg-slate-500/5 shadow-md'>
                    <Navbar></Navbar>
                </div>
                <div className='max-w-screen-xl mx-auto  py-10'>
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