'use client';
import React from 'react';
import Hero from '@/components/hero/hero1';
import Service from '@/components/services/leistungen';
import Process from '@/components/home/process';
import Form from '@/components/Form/jobform';
import CTA from './components/cta'

const HomeMain = () => {
  return (
    <div className="main-page-wrapper">
      <Hero />
      <Service />
      <Process />
      <CTA />
      <h2 className="pt-12 text-4xl text-primary-900 text-center font-bold">
        Kontaktieren Sie uns
      </h2>
      <div className="pt-6 pb-16">
        <Form />
      </div>
    </div>
  );
};

export default HomeMain;