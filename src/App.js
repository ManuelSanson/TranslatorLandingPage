import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App () {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>{t('Home')}</h1>} />
        <Route path='/aboutme' element={<h1>{t('About me')}</h1>} />
        <Route path='/services' element={<h1>{t('Services')}</h1>} />
        <Route path='/contact' element={<h1>{t('Contact')}</h1>} />
      </Routes>
      <p> {t('salutation')} </p>
    </BrowserRouter>
  )
}

export default App;