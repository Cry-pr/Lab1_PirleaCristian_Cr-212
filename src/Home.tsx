import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';



export function Home(){
return (
  <section>
    <div className='box'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className='content'>
        <img src={logo} alt="Logo" className='App-logo' />
        <h2>My personal Data</h2>
        <p>
          <b >First Name: Pirlea <br />
          Last Name: Cristian <br />
          Group: Cr-212</b>
        </p>
      </div>

    </div>
  </section>
);}


