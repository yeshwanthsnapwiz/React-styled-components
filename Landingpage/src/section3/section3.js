import React from 'react'
import {SECTION3WRAP,DIV,DIv,Div,Div2,IMG,Image,UL} from './sectioncss3';
import TIMELOGO from '../images/about.png';

export const Section3 = ({className}) => {
    return (
        <SECTION3WRAP>
        <DIV>
         <h6>THE ONLY ONE</h6>
         <h1>WE GENERATE TRUST</h1>
         <span className="line"></span>
         </DIV>

         <DIv>
        <Div>
        <Image> <IMG src={TIMELOGO}/> </Image>
        </Div>
        <Div2>
        <p>Phasellus vehicula tempus orci vel consequat. Nullam lorem sem, viverra a rutrum sed, gravida mattis magna. Suspendisse vitae commodo quam. Quisque a enim et ante vulputate finibus nec laoreet ipsum. Etiam lobortis erat vel ullamcorper tristique. Morbi pellentesque orci augue, quis finibus justo accumsan nec. Donec imperdiet sodales lectus sed consectetur. Mauris dignissim</p>
        <ul className="ul">
        <li>Nullam lorem sem, viverra a rutrum</li>
        <li className="li"> Nullam lorem sem, viverra a rutrum</li>
        <li>Nullam lorem sem, viverra a rutrum</li>
        </ul>
        </Div2>

         </DIv>

        </SECTION3WRAP>

    );
}


export default Section3;