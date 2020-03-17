import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FORMWRAP} from './background';
import background from './images/background.jpg';
import { FORMTRANSPERANT } from  './background';
import Nav from './nav/nav';
import Form from './form/form';
import FOOTER  from './footer/footer';

function App() {
  return (

  <FORMWRAP img={background}>

  <FORMTRANSPERANT >

   <Nav></Nav>

   <Form></Form>

   <FOOTER></FOOTER>

  </FORMTRANSPERANT>

  </FORMWRAP>
 
  )
};

export default App;
