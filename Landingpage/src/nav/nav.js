import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NAVWRAP,DIV,LOGO,MENU,Aa,BUTTON,Buttonwrap,SIDENAV,A,SIDEMENU,SIDEMENUBUTTON,Checkbox,Label} from './navcss';
import { faBars} from  '@fortawesome/free-solid-svg-icons';
export const Nav = ({className}) => {
    return (

       <NAVWRAP>
        
         <Label for="toggle" className="barsa" >         
         <li className="bar1"></li>
         <li  className="bar2"></li>
        < li className="bar3"></li>
        </Label> 
       
        <Checkbox type="checkbox" className="toggle" id="toggle" />
        
       <SIDENAV id="mySidenav" className="sidenav">
      <SIDEMENU>
       <A href="#">HOME</A>
       <A href="#">ABOUT US</A>
       <A href="#">NEWS</A>
       <A href="#">CONTACT</A>
    </SIDEMENU>
    <SIDEMENUBUTTON>
       <BUTTON color="#556080">SUPPORT 24/7 </BUTTON>
       <BUTTON color="#7fabda" > LOGIN </BUTTON>
       <BUTTON color="#4aae88"> REGISTER </BUTTON>
    </SIDEMENUBUTTON>
       </SIDENAV>

        <DIV>
        <LOGO>
         Cloud 83<br></br>
         cloud Hosting
        </LOGO>
        </DIV>

        <MENU>
         <Aa as="a">
            HOME
         </Aa >
         <Aa >
            ABOUT US   
         </Aa >
         <Aa >
            NEWS   
         </Aa >
         <Aa >
            CONTACT US    
         </Aa >
        </MENU>
            
        <Buttonwrap>
        <BUTTON color="#556080">SUPPORT 24/7 </BUTTON>
        <BUTTON color="#7fabda" > LOGIN </BUTTON>
        <BUTTON color="#4aae88"> REGISTER </BUTTON>
            
        </Buttonwrap>
    
       </NAVWRAP>
    );
}
export default Nav;
