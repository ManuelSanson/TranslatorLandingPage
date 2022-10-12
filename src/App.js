import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';


function App () {
  const { t } = useTranslation();

  return (
    <>
      <Header/>
      <p> {t('salutation')} </p>
    </>
  )
}

export default App;