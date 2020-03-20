import React from 'react'
import {SECTIONWRAP,STAT,DIV,Div} from './sectioncss'

export const Section = () => {
    return (
        <SECTIONWRAP>
    <Div>
        <p className="p">welcome yeshwanth!</p>
    </Div>
            <STAT>
                <DIV className="statics">
                <li>STATISTICS</li>
                <li>65747</li>
                <li>10% up from previous week</li>
                </DIV>
                <DIV className="usertoday">
                <li>USER TODAY</li>
                <li>373747</li> 
                <li>5.5% up from previous week</li>
                </DIV>
                <DIV className="request">
                <li>REQUEST</li>
                <li>28838</li>
                <li>7% up from previous week</li>
                </DIV>
                <DIV className="new">
                <li>NEW</li>
                <li>37</li>
                <li>14% up from previous week</li>
                </DIV>
            </STAT>
        </SECTIONWRAP>
    )
}

export default Section;
