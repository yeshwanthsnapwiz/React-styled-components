import React from 'react';
import { HOME,H1,P } from './homecss'
import {BUTTON} from './homecss'

export const Home = ({className}) => {
    return (
       <HOME>
           <H1>THE BEST HOSTING</H1>
           <P className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque,</P>
           <P className="p2"> at rutrum nulla dictum. Ut ac ligula sapien.
            Suspendisse cursus faucibus finibus.</P>
            <BUTTON  color="#556080">READ MORE</BUTTON>
        </HOME>
    )
}

export default Home;