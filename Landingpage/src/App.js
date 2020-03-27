import React  from 'react';
import {Nav} from './nav/nav'
import {Home} from './Home/home';
import {Section} from './section/section';
import {Section2} from './section2/section2'
import {Section3} from './section3/section3'
import Background from './background';
import background from './images/background.jpeg'
import './App.css';


function App() {
  return (
 
     <Background img={background}>
     <Nav>

     </Nav>
     <Home></Home>
     <Section>
      </Section>
      <Section2>
       
      </Section2>
      <Section3>
          
          </Section3>
     </Background>
 
  );
}

export default App;
