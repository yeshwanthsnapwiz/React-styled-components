import React from 'react'
import {NAVBAR,Navwrap,A,Li,Checkbox,Label,TOGGLEAREA,LOGO,TOPNAV,SEARCH,NAV } from './navbarcss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh,faBoxOpen,faSuitcase,faDotCircle,faLayerGroup, faBars,faBell,faCog,faCaretDown} from  '@fortawesome/free-solid-svg-icons';

export const Navbar = ({className}) => {
    return (
      


<NAV>

<TOPNAV>  


        <LOGO>
       <FontAwesomeIcon  className="icona"  icon={ faDotCircle} />Codefox
        </LOGO>

        <TOGGLEAREA>
        <Label for="toggle" className="barsa" >       <FontAwesomeIcon  className="bars"  icon={faBars} /></Label>
        <SEARCH placeholder="Search..." type="text"  className="search"  />
       <a href="#"> <FontAwesomeIcon  className="notification"  icon={faBell} /></a>
       <a href="#"> <FontAwesomeIcon  className="notification"  icon={faCog} /></a>
        </TOGGLEAREA>
      
    </TOPNAV>

      <NAVBAR >


      <Checkbox type="checkbox" className="toggle" id="toggle" />

       <Navwrap className="nav" >

      <Li>
      
       <FontAwesomeIcon  className="icon"  icon={faBoxOpen} />  
          <span className="menu">
           <A className="menua" href="#">DASHBOARD</A>
           <FontAwesomeIcon  className="bars"  icon={faCaretDown} />
           <div class="dropdown-content">
            <a href="#">charts</a>
            <a href="#">User Data</a>
            <a href="#">Noters</a>
             </div>
           </span>
         
       </Li>

        <Li>
       
      <FontAwesomeIcon  className="icon"  icon={ faTh } />
   
  
          <span className="menu" >
           <A  className ="elements "href="#">UI ELEMENTS</A>
      
           <FontAwesomeIcon  className="bars"  icon={faCaretDown} />
           <div class="dropdown-content">
            <a href="#">Typography</a>
            <a href="#">Cards</a>
            <a href="#">Buttoms</a>
             </div>
          </span>
         
          
         
        </Li>

        
     

        <Li>
        
        <FontAwesomeIcon  className="icon"  icon={ faSuitcase } />
   
           <span className="menu">
           <A href="#">ADMIN UI</A>
           <FontAwesomeIcon  className="bars"  icon={faCaretDown} />
           <div class="dropdown-content">
            <a href="#">Calender</a>
            <a href="#">Grid</a>
            <a href="#">Sweet Alert</a>
             </div>
           </span>
        </Li>

         <Li>
          
           <FontAwesomeIcon  className="icon"  icon={ faDotCircle} />
    <      span className="menu">
           <A href="#">LAYOUTS</A>
           <FontAwesomeIcon  className="bars"  icon={faCaretDown} />
           <div class="dropdown-content">
            <a href="#">Vertical</a>
            <a href="#">Topbar light</a>
            <a href="#">Center menu</a>
             </div>
           </span>
           </Li>

            <Li>
   
           <FontAwesomeIcon  className="icon"  icon={ faLayerGroup} />
          <span className="menu">
           <A href="#">COMPONENTS</A>
           <FontAwesomeIcon  className="bars"  icon={faCaretDown} />
           <div class="dropdown-content">
            <a href="#">Typography</a>
            <a href="#">Cards</a>
            <a href="#">Buttons</a>
             </div>
           </span>
</Li>
       </Navwrap>
       
    </NAVBAR>

    </NAV>
    )
}
export default Navbar;
