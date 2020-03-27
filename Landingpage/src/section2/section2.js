import React from 'react'
import {SECTION2WRAP,SECTIONWRAP,TITLE,SERVICES,DIV,DIv,Divthird,GLOBAL,CENTERIMG,GLOBALDIV,Caption,GLOBALICON,MAGNETDIV,MAGNETICON,CAption,MAGNET,TIMEDIV,TIMEICON,CAPtion} from './section2css';
import {TELEGRAM,TELEGRAMDIV,CAPTion,TELEGRAMICON,SERVER,SERVERDIV,CAPTIon,SERVERICON,CLOUD,CLOUDDIV,CAPTIOn,CLOUDICON} from './section2css';
import {SERVICE,HOSTING1,HOSTING2,GLOBALDIVB,GLOBALICONB,GLOBALB,CaptionB} from './section2css';
import GLOBALOGO from '../images/a.png';
import MAGNETLOGO from '../images/b.png';
import TIMELOGO from '../images/c.png';
import TELEGRAMLOGO from '../images/d.png';
import SERVERLOGO from '../images/f.png';
import CLOUDLOGO from '../images/e.png';
import background from '../images/background2.jpeg'
import CENTERIMAGE from '../images/circle.png'
export const Section2 = ({ClassName}) => {
    return (
        <SECTION2WRAP img={background}>
        <SECTIONWRAP>
         <TITLE>
             <h5>The only ones</h5>
             <h1>OUR BEST SERVICES</h1>
           
            
         </TITLE>

         <SERVICES>
            <DIV>

            <GLOBALDIV>
            <Caption>
                <h5>FREE DOMAINS</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem .</p>
            </Caption>
             <GLOBALICON> <GLOBAL src={GLOBALOGO}/> </GLOBALICON>
           
             </GLOBALDIV>

             <MAGNETDIV>
            <CAption>
                <h5>Shared Hosting</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem .</p>
            </CAption>
             <MAGNETICON> <MAGNET src={MAGNETLOGO}/> </MAGNETICON>
           
             </MAGNETDIV>

             <TIMEDIV>
            <CAPtion>
                <h5>Reseller Hosting</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem .</p>
            </CAPtion>
             <TIMEICON> <GLOBAL src={TIMELOGO}/> </TIMEICON>
           
             </TIMEDIV>
            </DIV>


            <DIv>
            <CENTERIMG src={CENTERIMAGE}/> 
            </DIv>
            
            <Divthird>
            <TELEGRAMDIV>
            <TELEGRAMICON> <TELEGRAM src={TELEGRAMLOGO}/> </TELEGRAMICON>
            <CAPTion>
                <h5>Vps Hosting</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem .</p>
            </CAPTion>
 
           
             </TELEGRAMDIV>

             <SERVERDIV>
            <SERVERICON> <SERVER src={SERVERLOGO}/> </SERVERICON>
            <CAPTIon>
                <h5>Dedicated Hosting</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem .</p>
            </CAPTIon>
 
           
             </SERVERDIV>
             <CLOUDDIV>
            <CLOUDICON> <CLOUD src={CLOUDLOGO}/> </CLOUDICON>
            <CAPTIOn>
                <h5>Cloud Hosting</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem .</p>
            </CAPTIOn>
 
           
             </CLOUDDIV>

             
            </Divthird>

         </SERVICES>

         <SERVICE>

        <HOSTING1>
        
        <GLOBALDIVB>
            <CaptionB>
                <h5>FREE DOMAINS</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem .</p>
            </CaptionB>
             <GLOBALICONB> <GLOBALB src={GLOBALOGO}/> </GLOBALICONB>
        </GLOBALDIVB>

        </HOSTING1>

        <HOSTING2>
            
            </HOSTING2  >

         </SERVICE>
        </SECTIONWRAP>

        </SECTION2WRAP>
    )
}
export default Section2;
