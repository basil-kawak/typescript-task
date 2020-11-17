import React from 'react';


import Header from "./header";
import Bar from './bar';
import Ytirmici from "./ytirmici";
import NasilCalisir from "./nasilCalisir";
import BlueSection from "./blueSection";
import Partners from "./partners";
import Newsletter from "./newsletter";
import Footer from "./footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Bar />
      <Ytirmici />
      <NasilCalisir />
      <BlueSection />
      <Partners />
      <Newsletter />

      

    </div>
  );
}

export default Home;
