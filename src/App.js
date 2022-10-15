import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutMe/AboutMe';
import WAppButton from './components/wappButton/WAppButton';
import Services from './components/services/Services';


function App () {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <WAppButton/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutme' element={<AboutMe/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<h1>{t('Contact')}</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;