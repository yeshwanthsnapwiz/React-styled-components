import React from 'react'
import styled from 'styled-components';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from  '@fortawesome/free-brands-svg-icons';
import {  faFacebookSquare } from  '@fortawesome/free-brands-svg-icons';
import {  faInstagram} from  '@fortawesome/free-brands-svg-icons'; 
import { faUpload  } from  '@fortawesome/free-solid-svg-icons';
import { faTh } from  '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from  '@fortawesome/free-solid-svg-icons';


export const Nav = ({children,className}) => {
    return (
        <NAV>

        <NAVWRAP>

        <LOGO >
        Material kit
        </LOGO>

        <MENU>
        <LI>
        <a href="#">
        <FontAwesomeIcon  className="fath"  icon={ faTh } COMPONENTS/>
        COMPONENTS
        <FontAwesomeIcon className="facaretdown" icon={ faCaretDown }COMPONENTS/>
        </a>
        </LI>

        <LI>
        <a href="#">
        <FontAwesomeIcon className ="upload"  icon={ faUpload } />
        UPGRADE TO PRO
        </a>
        </LI>

        <LI><FontAwesomeIcon className="twitter"   icon= { faTwitter }/ ></LI>
        <LI><FontAwesomeIcon className="facebook"  icon= {  faFacebookSquare }/></LI>
        <LI><FontAwesomeIcon className="instagram" icon= {  faInstagram }/></LI>
        </MENU>

        </NAVWRAP>

        </NAV>
    )
}
const NAV =styled.nav`
display:flex;
flex-wrap:wrap;
position:relative;
top:20px;


`;
const NAVWRAP = styled.div `
display:flex;
flex-wrap:wrap;
justify-content:space-around;
width:100%;
`;

const LOGO = styled.a`

font-size:1.125em;
color:white;
font-weight:200;
position:relative;
top:5px;


`;

const MENU= styled.ul`
display:flex;
flex-direction:row;
flex-wrap:wrap;
min-width:455px;
justify-content:space-between;
position:relative;
top:-12px;

@media screen and (max-width: 780px) {
 
 position:relative;
 right:3%;
 top:5px;

  
}



`;

const LI = styled.li `

list-style-type:none;
font-size:12px;
color:white;
margin-right:4%;

a {
    color:white;
    text-decoration:none;
}
.fath {
    font-size:23px;
    padding-right:10px;
    padding-top:5px;
}
.facaretdown
{
    font-size:23px;
    padding-left:5px;
    padding-top:5px;
  
}
.upload {
    font-size:23px;
    padding-right:10px;
    padding-top:5px;
 

}
.twitter,.facebook,.instagram
{
    font-size:18px;
    margin-top:6px;
   
}
.twitter ,.instagram
{
  
}
@media screen and (max-width: 580px) {
 
 position:relative;
 right:1%;

  
}


`;


export default Nav;