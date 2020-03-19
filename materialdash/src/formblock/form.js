import React from 'react'
import {FormWrapper,FIRSTINPUTWRAPPER,FORMGROUP,FIRSTINPUT,Userlabela,Span} from './formcss';
import {SECOND,SECONDINPUT,Userlabelb,Nameuser,ForgotPassword,Label} from './formcss';
import {Checkbox} from './formcss';
import {SPAN } from './formcss';
import {Register} from './formcss';
import {Button} from './formcss';


export const Form = ({className}) => {
    return (
        <FormWrapper>


<FORMGROUP>
             <FIRSTINPUTWRAPPER className ="username">
             <FIRSTINPUT type="text" className="fname"  name="fname"  />
             <Userlabela className="label" for="fname">
             <Span className="namea">Username</Span>
             </Userlabela >
             </FIRSTINPUTWRAPPER>

             <FIRSTINPUTWRAPPER className ="usernameb">
             <FIRSTINPUT type="text" className="fname"  name="fname"  />
             <Userlabela className="label" for="fname">
             <Span className="namea">Username</Span>
             </Userlabela >
             </FIRSTINPUTWRAPPER>          
</FORMGROUP>

 <SECOND className ="usernamec">

           <SECONDINPUT type="text" className="first"  name="fname"  />
            <Userlabelb className="userlabel" for="fname">
           <Nameuser className="nameb">Username</Nameuser>
           </Userlabelb>

</SECOND>
<SECOND className ="usernamed">

<SECONDINPUT type="text" className="first"  name="fname"  />
 <Userlabelb className="userlabel" for="fname">
<Nameuser className="nameb">Username</Nameuser>
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