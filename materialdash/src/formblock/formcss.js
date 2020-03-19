import styled from 'styled-components';

const label =`
position:absolute;
bottom:8px;
left:0px;
transition:all 0.5 ease;
`;
const name=`
position:absolute;
bottom:23px;
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
transform: scaleX(154);

`;



export const FormWrapper = styled.form `
display:flex;
flex-direction:column;
width:420px;
min-height:400px;
background-color:white;


    .usernamed{
    position: relative;
     top:100px;
 }

@media only screen and (max-width: 680px) {
 width:100%;
 .usernameb{
    position: relative;
     top:10px;
 }
 .usernamed{
    position: relative;
     top:90px;
 }
 
}


`;

export const FORMGROUP =styled.div`
display:flex;
flex-direction:row;
justify-content:center;
justify-content:space-around;
width:100%;
height:50px;
position:relative;
top:50px;
@media only screen and (max-width: 680px) {
flex-direction:column;
 width:90%;
 height:90px;
 left:10%;


}

`;

export const FIRSTINPUTWRAPPER   = styled.div`
display:flex;
flex-direction:row;
width:40%;
height:50px;
position: relative;
@media only screen and (max-width: 680px) {
  width:90%;
  flex-direction:column;

 
}

.namea  {
${name};


}
  .fname:focus{
  ${inputfocus};
  }


  .fname:focus + .label .namea
  {
   transform:translateY(-75%);
   ${onfocuslabel};

  }
  .fname:focus + .label::after , .form input:valid + .namea::after  {
   ${onfocuslabelafter};
 
   
   }
 
`;
export const FIRSTINPUT = styled.input`
width:100%;
position: relative;
top:10px;
height:30px;
border:none;


 
`;





export const Userlabela  = styled.label`
overflow:hidden;
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
  left:55%;
  bottom:-1px;
  height:100%;
  width:1%;
  border-bottom:3px solid  #7a00ff;
  z-index:-1;
  transition:transform 0.3s ease;

  }
  
 
`;
export const Span = styled.span`
 ${label};

`;

export const SECOND = styled.div`
display:flex;
flex-direction:center;
width:100%;
height:50px;
position: relative;
top:75px;
left:5%;
overflow:hidden;
.nameb {
${name};
bottom:18px;


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
   @media only screen and (max-width: 680px) {
  width:90%;
   left:10%;

}
`;

export const SECONDINPUT = styled.input`

width:90%;
position: relative;
top:7px;
border:none;

`;


export const Userlabelb = styled.label`
overflow:hidden;
position:absolute;
  color:grey;
  bottom:4px;
  left:0%;
  width:90%;
  height:100%;
  pointer-events:none;
  border-bottom:1px solid lightgrey;
  &::after {
  content:"";
  position:absolute;
  left:51%;
  bottom:-1px;
  height:100%;
  width:1%;
  border-bottom:3px solid  #7a00ff;
  z-index:-1;
  transition:transform 0.5s ease;
  
}

`;

export const SPAN = styled.span`
`;



export const Label = styled.label`
`;
export const Nameuser = styled.span`
`;





export const ForgotPassword= styled.div`
display:flex;
justify-content:center;
justify-content:space-around;
list-style-type:none;
width:100%;
height:40px;
position: relative;
top:140px;
left:-10px;
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
  left: 20px;
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
    right:30px;
    color:black;
    font-size:15px;
}

@media screen and (max-width: 680px) {
{
    top:120px;
    left:-5px;
}
`;




export const Checkbox = styled.input`
position: relative;
right:15px;
width:15px;
height:15px;

`;







export const Register =styled.li`
display:flex;
justify-content:center;
justify-content:space-around;
list-style-type:none;
width:100%;
height:40px;
position: relative;
top:150px;
color:white;
@media screen and (max-width: 680px) {

    position: relative;
     top:180px;
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
  left:7px;
  width:80%;

}
`;




