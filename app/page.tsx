'use client';
import React from 'react';
import Hero from '../components/hero/hero1';
import Service from '../components/services/leistungen';
import Process from '../components/home/process';
import Form from '../components/Form/jobform';
import Title from '../components/titles/light';
import CalltoAction from '@/components/calltoaction/homecalltoaction'; 


const HomeMain = () => {
  return (
    <div className="main-page-wrapper">
      <Hero />
      <Service />
      <Process />
      <CalltoAction />
      <Title title="Kontaktieren Sie uns" subtitle="" /> 
      <Form />
      
    </div>
  );
}; 

export default HomeMain;