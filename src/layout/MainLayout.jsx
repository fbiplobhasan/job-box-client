import React from 'react';
import Home from '../components/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;