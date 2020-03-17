import React from 'react';
import {Formgroup, Label} from './formcss';
import {USERNAME} from './formcss';
import {Input} from './formcss';
import {NAME} from './formcss';
import {UserName} from './formcss';
import {ForgotPassword} from './formcss';
import {PASSWORD} from './formcss';
import {Password} from './formcss';
import {Checkbox} from './formcss';
import {Register} from './formcss';
import {Button} from './formcss';
import {Span} from './formcss';



export const Form = ({className}) => {
    return (
       <Formgroup>

         
        <USERNAME style={{marginTop:"35px"}}>
        <Input  placeholder="Username" type="text"/>
       
        <Input className="name" placeholder="Username" type="text"/>
        </USERNAME>


        <NAME>
        <UserName   placeholder="Username" type="text"/>
      
     
        </NAME>

        <PASSWORD>
        <Password placeholder="Password" type="password"/>
        </PASSWORD>


        <ForgotPassword>
        <Label className="label">
         <Checkbox type="checkbox"  /> 
        <Span className="checkmark"></Span>
         </Label>
         <Span className ="rememberme">Remember me</Span>
        <Span><a href="#">FORGOT PASSWORD</a></Span>
        </ForgotPassword>

        <Register>
         <Button>REGISTER</Button>
        </Register>


        </Formgroup>
    )
}
export default Form;


