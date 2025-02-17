'use client';
import React from 'react';
import Hero from '../components/hero/hero1';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Service from '../components/services/leistungen';
import Process from '../components/home/process';
import Form from '../components/Form/jobform';
import Title from '../components/titles/light';
import BackToTop from '@/components/sides/backtotop'; 
import CalltoAction from '@/components/calltoaction/homecalltoaction'; 


const HomeMain = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Hero />
      <Service />
      <Process />
      <CalltoAction />
      <Title title="Verbinden Sie sich mit uns" subtitle="Nutzen Sie das folgende Formular, um direkten Kontakt aufzunehmen. Ihr Anliegen ist uns wichtig – wir antworten prompt und präzise!" /> 
      <Form />
      <BackToTop />
      <Footer />
      
    </div>
  );
}; 

export default HomeMain;