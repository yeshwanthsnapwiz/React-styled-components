

import styled from 'styled-components';




const label =`
position:absolute;
bottom:8px;
left:0px;
transition:all 0.3 ease;
`;


const name=`
position:absolute;
bottom:15px;
left:0px;
transition:all 0.5 ease;
font-size:17px;

`;
const inputfocus =`
outline:none;
position:relative;
`;

const onfocuslabel =`
font-size:12px;
color:#7a00ff;
`;
const onfocuslabelafter =`
transform:X(0%);
z-index:1;
transform: scaleX(250);
@media only screen and (max-width: 680px) {
  transform: scaleX(100);
 }
`;



export const FormWrapper = styled.form `
max-width:400px;
min-height:440px;
background-color:white;
padding:20px;
.usernamea {
position:relative;
top:50px;
}
@media only screen and (max-width: 680px) {
 min-width:100%;
 .usernamea {
position:relative;
top:15px;
}
}
`;


export const FORMGROUP =styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
min-width:360px;
position: relative;
top:20px;
@media only screen and (max-width: 680px) {
flex-direction:column;
}
`;


export const FIRSTINPUTWRAPPER   = styled.div`
display:flex;
justify-content:center;
  min-width:140px;
  height:50px;
  position:relative;
  overflow:hidden;
  @media only screen and (max-width: 680px) {
  min-width:360px;
  margin:0px 32px 18px 25px;
 
}

  .namea  {
${name};


}
  .fname:focus{
  ${inputfocus};
  }


  .fname:focus + .label .namea
  {
   transform:translateY(-120%);
   ${onfocuslabel};

  }
  .fname:focus + .label::after , .form input:valid + .namea::after  {
   ${onfocuslabelafter};
   
   }
`;


export const FIRSTINPUT = styled.input`
  position: relative;
  padding-top:20px;
  border:none;
  @media only screen and (max-width: 680px) {
  min-width:320px;
  margin:0px 30px 0px 37px;
  width:100%;
  position: relative;
  top:0px;
}
`;





export const Userlabela  = styled.label`
 position:absolute;
  color:grey;
  bottom:4px;
  left:0%;
  width:100%;
  height:100%;
  pointer-events:none;
  border-bottom:1px solid lightgrey;
  &::after {
  content:"";
  position:absolute;
  left:49%;
  bottom:-1px;
  height:100%;
  width:1%;
  border-bottom:2px solid  #7a00ff;
  z-index:-1;
  transition:transform 0.3s ease;

  }
  @media only screen and (max-width: 680px) {
   
    margin:0px 43px 0px 40px;
}
`;





export const Span = styled.span`
 ${label};

`;

export const SECOND = styled.div`
min-width:360px;
height:60px;
position: relative;
top:35px;
overflow:hidden;
@media only screen and (max-width: 680px) {
  position: relative;
top:10px;
  min-width:360px;
  margin:0px 32px 0px 25px;
 
}
.nameb {
${name};


}
  .first:focus{
    ${inputfocus};
   
  }
  .first:focus + .userlabel .nameb
  {
   transform:translateY(-80%);
  ${onfocuslabel};
   
  }
  .first:focus + .userlabel::after , .form input:valid + .nameb::after  {
    ${onfocuslabelafter};
 
   }

`;



export const SECONDINPUT = styled.input`
min-width:320px;
width:100%;
 position: relative;
 top:24px;
 padding-top:10px;
border:none;
@media only screen and (max-width: 680px) {
  min-width:100%;
  margin:0px 35px 0px 35px;
 
}`;


export const Userlabelb = styled.label`
position:absolute;
  color:grey;
  bottom:4px;
  left:0%;
  width:100%;
  height:100%;
  pointer-events:none;
  border-bottom:1px solid lightgrey;
  &::after {
  content:"";
  position:absolute;
  left:49%;
  bottom:-1px;
  height:100%;
  width:1%;
  border-bottom:2px solid  #7a00ff;
  z-index:-1;
  transition:transform 0.5s ease;
}
@media only screen and (max-width: 680px) {
   
    margin:0px 0px 0px 40px;
}
`;


export const Nameuser = styled.span`
  ${label};
`;

export const ForgotPassword= styled.div`
display:flex;
justify-content:center;
justify-content:space-around;
list-style-type:none;
min-width:365px;
height:40px;
position: relative;
top:90px;
color:grey;
a {
  font-size:12px;
  font-weight:460;
  position: relative;
  top:1px;
  color:rgb(122, 0, 255);
  text-decoration:none;
}
.label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
}

.label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius:2px;
  border:2px solid grey;
 
}

.label:hover input ~ .checkmark {
  background-color: #ccc;
}

.label input:checked ~ .checkmark {
  background-color: rgb(122, 0, 255);
  border:none;

}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.label input:checked ~ .checkmark:after {
  display: block;
}

.label .checkmark:after {
  left: 7px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
.rememberme {
    position: relative;
    top:2px;
    right:40px;
    color:black;
    font-size:15px;
}

@media screen and (max-width: 680px) {
{
    position: relative;
    top:50px;
    margin: 0px 30px 0px 50px;
}
}`;




export const Checkbox = styled.input`
position: relative;
right:15px;
width:15px;
height:15px;

`;


export const SPAN = styled.span`
`;



export const Label = styled.label`
`;


export const Register =styled.li`
display:flex;
justify-content:center;
justify-content:space-around;
list-style-type:none;
min-width:365px;
height:40px;
position: relative;
top:100px;
color:white;
@media screen and (max-width: 680px) {
 
 {
 
min-width:370px;
 
 }
 }
`;




export const Button =styled.button`
height:35px;
min-width:365px;
background-color:rgb(122, 0, 255);
border:none;
a {
text-decoration:none;
color:white;
}
&:hover {
  background-color:rgb(122, 0, 255,0.8);

}
@media screen and (max-width: 680px) {
 
{

  position: relative;
  top:-50px;
  margin: 0px 30px 0px 50px;
   width:100%;
}
}
`;
