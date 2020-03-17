import styled from 'styled-components';

const border=`
border:none;
border-bottom:1px solid #e9eaef;;
outline-width: 0;
`;
const placeholder = `
&::placeholder 
{
    font-size:16px;
    color:grey;
    position: relative;
    top:-8px;
}
`;

const positionwidth =`
position:Relative;
width:100%;
`;

const inputstyle =`
list-style-type:none;
display:flex;
flex-direction:row;
justify-content:space-evenly;
height:40px;
`;
const focus=`
&:focus .yesh{
 
  color:Red;
}

`;

export const Formgroup = styled.form `
display:flex;
flex-direction:column;
flex-wrap:wrap;
min-width:400px;
min-height:430px;
background-color:white;
padding:20px;

@media screen and (max-width: 680px) {
   width:100%;
   min-height:450px;
}
`; 




export  const USERNAME = styled.li`
display:flex;
justify-content:center;
justify-content:space-evenly;
list-style-type:none;
min-width:410px;
height:40px;
@media screen and (max-width: 680px) {
flex-direction:column;
height:80px;
}
.name {
  @media screen and (max-width: 680px) {
position: relative;
top:50px;
}
}

`;


export  const Input =styled.input`
position: relative;
top:30px;
height:35px;
${border};
${placeholder};
${focus};
@media screen and (max-width: 770px) {
    position: relative;
 margin: 0px 16px 0px 16px;

}
`;




export const NAME = styled.li`
${inputstyle};

`;





export const PASSWORD = styled.li`
${inputstyle};

`;



export  const UserName = styled.input`
height:35px;
min-width:365px;
position: relative;
top:50px;
${border};
${placeholder};

@media screen and (max-width: 680px) {
    ${positionwidth };
    top:70px;
    margin: 0px 16px 0px 16px;
 
}
`;
export  const Password = styled.input`
height:35px;
min-width:365px;
position: relative;
top:70px;
${border}
${placeholder};
${focus};
@media screen and (max-width: 680px) {
    ${positionwidth };
    top:100px;
    margin: 0px 16px 0px 16px;
}
`;




export const Checkbox = styled.input`
position: relative;
right:15px;
width:15px;
height:15px;

`;




export const ForgotPassword= styled.li`
display:flex;
justify-content:center;
justify-content:space-around;
list-style-type:none;
min-width:365px;
height:40px;
position: relative;
top:100px;
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
    top:1px;
    right:50px;
    color:black;
    font-size:15px;
}

@media screen and (max-width: 680px) {
{
    position: relative;
    top:120px;
}
}`;



export const Register =styled.li`
display:flex;
justify-content:center;
justify-content:space-around;
list-style-type:none;
min-width:365px;
height:40px;
position: relative;
top:120px;
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
color:white;
@media screen and (max-width: 680px) {
 
{

    top:10px;
    margin: 0px 12px 0px 12px;
    width:100%;
}
}
`;



export const Span = styled.span`


`;




export const Label = styled.label`

`;
