import React from 'react'
import {FormWrapper,FIRSTINPUTWRAPPER,FORMGROUP,FIRSTINPUT,Userlabela,Span} from './formcss';
import {SECOND,SECONDINPUT,Userlabelb,ForgotPassword,} from './formcss';
import {Checkbox} from './formcss';
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
           <span className="nameb">Email</span>
           </Userlabelb>

</SECOND>
<SECOND className ="usernamed">

<SECONDINPUT type="password" className="first"  name="fname"  />
 <Userlabelb className="userlabel" for="fname">
<span className="nameb">Password</span>
</Userlabelb>

</SECOND>

<ForgotPassword>

        <label className="label">
         <Checkbox type="checkbox"  /> 
        <span className="checkmark"></span>
         </label>
         <span className ="rememberme">Remember me</span>
        <span><a href="#">FORGOT PASSWORD</a></span>

</ForgotPassword>
<Register>

         <Button><a href="#">REGISTER</a></Button>
            
</Register>


        </FormWrapper>
    )
}


export default Form;