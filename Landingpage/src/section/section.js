import React from 'react'
import {SECTION1,DIV,GLOBAL,CAPTION,P,SECURITYLOGO,CLOUD} from './sectioncss';
import GLOBALOGO from '../images/1.png';
import SECURITY from '../images/2.png';
import CLOUDHOSTING from '../images/3.png';

export const Section = () => {
    return (

        <SECTION1>

        <DIV>
        <GLOBAL src={GLOBALOGO}/>
        <CAPTION>Worldwide Support</CAPTION>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum.</P>
        </DIV>
     
        <DIV>
        <SECURITYLOGO src={SECURITY}/>
        <CAPTION>Safe & Secure</CAPTION>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum.</P>
        </DIV>


        <DIV>
        <CLOUD src={CLOUDHOSTING}/>
        <CAPTION>Safe & Secure</CAPTION>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum.</P>
        </DIV>
        
        </SECTION1>
    )
}
export default Section;