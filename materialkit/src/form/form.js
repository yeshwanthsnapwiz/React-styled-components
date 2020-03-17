import React from 'react'
import styled from 'styled-components';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from  '@fortawesome/free-brands-svg-icons';
import {  faFacebookSquare } from  '@fortawesome/free-brands-svg-icons';
import {  faGooglePlusG } from  '@fortawesome/free-brands-svg-icons';
import { faUser } from  '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from  '@fortawesome/free-solid-svg-icons';
import { faLock } from  '@fortawesome/free-solid-svg-icons';


export const Form = ({children,className}) => {
    return (
      
        <Formwrapper>
          <HEAD>
              <TITLE  >
                  LOGIN
              </TITLE>
              <SOCIALLOGO>
              <LI as="a" href="#"><FontAwesomeIcon className="twittera"  icon= { faTwitter } / ></LI>
        <LI as="a" href="#"><FontAwesomeIcon className="facebookb"  icon= {  faFacebookSquare }/></LI>
        <LI as="a" href="#"><FontAwesomeIcon className="GooglePlus"    icon= {  faGooglePlusG  }/></LI>
              </SOCIALLOGO>
          </HEAD>
          <Span>Or Be Classical</Span>
      
          <FORMSECTION>
        <FORMGROUP>
        <FontAwesomeIcon className="user"  icon= { faUser }/ >
        <Input type="text" placeholder="First Name..." />
        </FORMGROUP>
        <FORMGROUP>
        <FontAwesomeIcon className="email"  icon= { faEnvelope  }/ >
        <Input type="email" placeholder="Email..." />
        </FORMGROUP>
        <FORMGROUP>
        <FontAwesomeIcon className="password"  icon= { faLock }/ >
        <Input type="password" placeholder="Password..." />
        </FORMGROUP>
         
          </FORMSECTION>
          <A href="#">GET STARTED</A>
        </Formwrapper>
      

      
    )
}


const Formwrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
max-width:350px;
min-height:420px;
background-color:white;
margin:auto;
position:relative;
top:80px;
border-radius:5px;


`;
;
const HEAD = styled.div`
display:flex;
flex-direction:column;
  min-width:305px;
  min-height:150px;
  border-radius:3px;
 background-image: linear-gradient(90deg,#a84fb9,#8343a5);
  position:relative;
  top:-45px;
  box-shadow: 0px 10px 10px 10px rgba(199,172,206,0.3);

`;
 
const TITLE =styled.div`
color:white;
align-self:center;
height:60px;
position:relative;
top:30px;
font-family:Roboto Slab,Times New Roman,serif;
font-size:16px;
font-weight:700;

`;
const SOCIALLOGO =styled.div`

display:flex;
justify-content:center;
justify-content:space-around;
position:relative;
top:30px;
.twittera {
    position:relative;
    left:50px;
}
.GooglePlus {
    position:relative;
    right:50px;
}
`;
const LI =styled.li`
list-style-type:none;
color:white;
font-size:18px;
text-decoration:none;
`;
const FORMSECTION =styled.form`
width:100%;

`;

const FORMGROUP = styled.li`
list-style-type:none;
padding-top:10px;

.user, .email, .password
{
  
  
    font-size:23px;
    color:grey;
    min-width:20%;
    height:22px;

}
`;
const Span =styled.span`
color:grey;
font-size:15px;
font-weight:50;
position:relative;
top:-28px;
`;
const Input = styled.input`
width:70%;
height:50px;
border:none;
border-bottom:1px solid lightgrey;
    &::placeholder{
        position:relative;
        top:-1px;
        font-size:15px;
        color:grey;

    }
`;
const A =styled.a`

text-decoration:none;
position:relative;
top:30px;
`;

export default Form;
