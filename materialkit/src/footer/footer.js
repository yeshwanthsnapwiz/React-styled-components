import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from  '@fortawesome/free-solid-svg-icons';

const FOOTER = ({children,className}) => {
    return (
        <FooterWrap>

        <INFORMATION>
            <LI as="a" href="#">CREATIVE TIM</LI>
            <LI as="a" href="#">ABOUT US</LI>
            <LI as="a" href="#">BLOG</LI>
            <LI as="a" href="#">LICENSES</LI>
        </INFORMATION>

        <COPYRIGHT>
            <Li>
         © 2020, made with <FontAwesomeIcon  className="faheart"  icon={ faHeart } COMPONENTS/> by Creative Tim for a better web.
            </Li>
        </COPYRIGHT>

        </FooterWrap>
    );
}
const List =`
list-style-type:none;
color:white;
font-size:12px;
font-weight:bold;
`;

const FooterWrap = styled.footer`
display:flex;
flex-wrap:wrap;
width:100%;
justify-content:space-around;
min-height:50px;
position: absolute;
bottom:30px;
@media screen and (max-width: 780px) {
  position: relative;
  top:100px;
}

`
const INFORMATION = styled.ul`
display:flex;
flex-wrap:wrap;
min-width:400px;
justify-content:space-between;
position: relative;
right:7%;
`;

const COPYRIGHT= styled.ul`
`;

const LI = styled.li`
${List};
text-decoration:none;
&:hover {
color:#8343a5;
}
`;

const Li = styled.li`
${List};
font-size:0.9em;
@media screen and (max-width: 680px) {
position: relative;
right:9%;
}

`;

export default FOOTER ;
