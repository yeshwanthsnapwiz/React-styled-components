import React from 'react';
import {FormWrapper} from './formcss';
import {FORMGROUP} from './formcss';
import {FIRSTINPUT } from './formcss';
import {Userlabela } from './formcss';
import {Span } from './formcss';
import {FIRSTINPUTWRAPPER  } from './formcss';
import {SECOND} from './formcss';
import {SECONDINPUT} from './formcss';
import {Userlabelb} from './formcss';
import {Nameuser} from './formcss';
import {ForgotPassword} from './formcss';
import {Checkbox} from './formcss';
import {Label} from './formcss';
import {SPAN } from './formcss';
import {Register} from './formcss';
import {Button} from './formcss';


export const Form = ({className}) => {
    return (
       <FormWrapper>

<FORMGROUP>

   <FIRSTINPUTWRAPPER     className ="username">

    <FIRSTINPUT type="text" className="fname"  name="fname"  />
    <Userlabela className="label" for="fname">
    <Span className="namea">Username</Span>
    </Userlabela >

   </FIRSTINPUTWRAPPER   >

    <FIRSTINPUTWRAPPER   className ="username">

    <FIRSTINPUT type="text" className="fname"  name="fname"  />
    <Userlabela className="label" for="fname">
    <Span className="namea">Username</Span>
    </Userlabela >
    </FIRSTINPUTWRAPPER  >

</FORMGROUP>

<SECOND className ="usernameb">

    <SECONDINPUT type="text" className="first"  name="fname"  />
    <Userlabelb className="userlabel" for="fname">
    <Nameuser className="nameb">Username</Nameuser>
    </Userlabelb>

</SECOND>

<SECOND className ="usernamea">

    <SECONDINPUT type="password" className="first"  name="fname"  />
    <Userlabelb className="userlabel" for="fname">
    <Nameuser className="nameb">Password</Nameuser>
    </Userlabelb>

</SECOND>

<ForgotPassword>

        <Label className="label">
         <Checkbox type="checkbox"  /> 
        <SPAN className="checkmark"></SPAN>
         </Label>
         <SPAN className ="rememberme">Remember me</SPAN>
        <SPAN><a href="#">FORGOT PASSWORD</a></SPAN>

</ForgotPassword>
  
<Register>

         <Button><a href="#">REGISTER</a></Button>
            
</Register>


        </FormWrapper>
    )
}
export default Form;


