import React from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from  '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from  '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from  '@fortawesome/free-brands-svg-icons';
import {faUser } from  '@fortawesome/free-solid-svg-icons';
import {faEnvelope } from  '@fortawesome/free-solid-svg-icons';
import {faLock} from  '@fortawesome/free-solid-svg-icons';
import {Formwrapper} from './formcss';
import {HEAD} from './formcss';
import {TITLE,SOCIALLOGO,LI,Span,FORMSECTION,SECOND,SECONDINPUT,Userlabelb,Nameuser,A} from './formcss';



export const Form = ({children,className}) => {
    return (
      
        <Formwrapper>
          <HEAD>
              <TITLE  >
                  LOGIN
              </TITLE>
              <SOCIALLOGO>
              <LI as="a" href="#"><FontAwesomeIcon   className="twittera"  icon= { faTwitter } / ></LI>
        <LI as="a" href="#"><FontAwesomeIcon className="facebookb"  icon= {  faFacebookSquare }/></LI>
        <LI as="a" href="#"><FontAwesomeIcon className="GooglePlus"    icon= {  faGooglePlusG  }/></LI>
              </SOCIALLOGO>
          </HEAD>
          <Span>Or Be Classical</Span>
      
          <FORMSECTION>
      
        <SECOND className ="usernameb">
        <FontAwesomeIcon  className="user"  icon= { faUser }/ >
        <SECONDINPUT type="text" className="first"  name="fname"  />        
        <Userlabelb className="userlabel" for="fname">
        <Nameuser className="nameb">Username...</Nameuser>
         </Userlabelb>
          </SECOND>
     
      
          <SECOND className ="usernameb">
          <FontAwesomeIcon className="email"  icon= { faEnvelope  }/ >
        <SECONDINPUT type="text" className="first"  name="fname"  />        
        <Userlabelb className="userlabel" for="fname">
        <Nameuser className="nameb">Email...</Nameuser>
         </Userlabelb>
          </SECOND>

      
      
          <SECOND className ="usernameb">
          <FontAwesomeIcon className="password"  icon= { faLock }/ >
        <SECONDINPUT type="text" className="first"  name="fname"  />        
        <Userlabelb className="userlabel" for="fname">
        <Nameuser className="nameb">Password...</Nameuser>
         </Userlabelb>
          </SECOND>

       
       
         
          </FORMSECTION>
          <A href="#">GET STARTED</A>
        </Formwrapper>
      

      
    )
}


export default Form;
