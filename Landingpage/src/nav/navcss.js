import styled from 'styled-components';


export const NAVWRAP = styled.div`

 display:flex;
 justify-content:space-between;
 align-items:center;
 width:100%;
 height:150px;

 background-color:rgba(0, 0, 0, 0.8);
 border-bottom:2px solid #4aae88;
 .bar1 {
    transform:rotate(180deg);
}

`;


 export const DIV = styled.ul`
 display:flex;
 flex-direction:column;
`;



 export const LOGO = styled.li`
 list-style-type:none;
 color:white;
 font-size:14px;
 font-weight:bold;
`;



export const MENU = styled.ul`
 width:40%;
 display:flex;
 justify-content:space-around;
 padding-right:20px;
 align-self:center;
 flex-direction:row;
 @media screen and (max-width: 780px) {
 visibility:hidden;
}
`;

export const Aa = styled.a`

cursor:pointer;
 color:white;
 font-size:14px;
 font-weight:bold;
`;



export  const Buttonwrap = styled.div`
display:flex;
width:35%;
justify-content:space-evenly;
@media screen and (max-width: 780px) {
 visibility:hidden
}

`;

export  const BUTTON = styled.button`
position:relative;
cursor:pointer;
width:135px;
height:50px;
background-color:${props => props.color};
border:none;
color:white;
`;



export  const SIDENAV = styled.div`
display:block;
flex-direction:column;
align-items:center;
height: 100%;
width:0px;
position:fixed;
z-index: 100;
top: 0;
left: 0;
background-color:white;
overflow-x: hidden;
transition: 0.3s;
padding-top: 60px;
text-align:center;
}
@media screen and (min-width: 780px) {
 display:none;
}

`;


export const Checkbox= styled.input`
background-color:red;
display:none;
&:Checked ~ .sidenav {
    width:250px;
   
}
`;


export const Label= styled.label`
  height:35px;
  width:40px;
  position:absolute;
 
  display:none;
  right:5%;
  border-radius:5px;
  cursor: pointer;
  .bar1,.bar2,.bar3{
     list-style-type:none;
     width:30px;
     height:2px;
     background-color:white;
     color:white;
     margin-top:5px;
 }
 
  @media screen and (max-width: 780px) {
 display:block;
}
`;

export  const SIDEMENU = styled.div`
display:flex;
flex-direction:column;
width:100%;
position:absolute;
top:0px;

`;
export  const SIDEMENUBUTTON = styled.div`
display:flex;
flex-direction:column;
width:100%;
position: relative;
top:40%;
button {
    width:90%;
align-self:center;
}

`;

export  const A= styled.a`
width:100%;
color:black;
text-decoration:none;
padding-top:30px;
border-bottom:1px solid lightgrey;

`;



