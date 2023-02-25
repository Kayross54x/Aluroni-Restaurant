import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MenuLogo from 'components/MenuLogo';

import Home from 'pages/Home';
import Menu from 'pages/Menu';
import DefaultPage from 'components/DefaultPage';
import About from 'pages/About';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Plate from 'pages/Plate';
import Admin from 'pages/Admin';

export default function AppRoutes() {
    return (
        <main className='container'>
            <Router>
                <MenuLogo />
                
                <Routes>
                    <Route path='/' element={<DefaultPage />}>
                        <Route index element={<Home />}/>

                        <Route path='menu' element={<Menu />}/>

                        <Route path='about' element={<About />}/>
                    </Route>
                    
                    <Route path='/plate/:id' element={<Plate />}/>

                    <Route path='/admin' element={<Admin />}/>

                    <Route path='*' element={<NotFound />}/>
                </Routes>

                <Footer />
            </Router>
        </main>
    );
}
