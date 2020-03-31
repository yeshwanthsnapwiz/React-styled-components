

import styled from 'styled-components';

export const label =`
position:absolute;
bottom:8px;
left:50px;
transition:all 0.3 ease;
`;


export const name=`
position:absolute;
bottom:15px;
left:0px;
transition:all 0.5 ease;
font-size:17px;

`;
export const inputfocus =`
outline:none;
position:relative;
`;

export const onfocuslabel =`
font-size:12px;
color:#7a00ff;
`;
export const onfocuslabelafter =`
transform:X(0%);
z-index:1;
transform: scaleX(122);
@media only screen and (max-width: 680px) {
  transform: scaleX(125);

   
 }
`;

export const SECOND = styled.div`

width:350px;
height:60px;
position: relative;
overflow:hidden;
.user , .email, .password{
position: relative;
left: 10%;
top:30%;
color:grey;
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

width:70%;
 position: relative;
 left:20%;
 top:20px;
 padding-top:10px;
 border:none;
@media only screen and (max-width: 680px) {
  min-width:100%;
}`;


export const Userlabelb = styled.label`
position:absolute;
  color:grey;
  bottom:4px;
  left:20%;
  width:70%;
  height:100%;
  pointer-events:none;
  border-bottom:1px solid lightgrey;
  &::after {
  content:"";
  position:absolute;
  left:60%;
  bottom:-1px;
  height:100%;
  width:1%;
  border-bottom:2px solid  #7a00ff;
  z-index:-1;
  transition:transform 0.5s ease;
  @media only screen and (max-width: 680px) {
  position:absolute;
  left:62%;
}
}
`;


export const Nameuser = styled.span`
  ${label};
`;

export const Formwrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
max-width:350px;
min-height:420px;
background-color:white;
margin:auto;
position:relative;
top:80px;
border-radius:5px;
`;
;


export const HEAD = styled.div`
  display:flex;
  flex-direction:column;
  min-width:305px;
  min-height:150px;
  border-radius:3px;
  background-image: linear-gradient(90deg,#a84fb9,#8343a5);
  position:relative;
  top:-45px;
  box-shadow: 0px 10px 10px 10px rgba(199,172,206,0.3);

`;
 
export const TITLE =styled.div`
color:white;
align-self:center;
height:60px;
position:relative;
top:30px;
font-family:Roboto Slab,Times New Roman,serif;
font-size:16px;
font-weight:700;
`;

export const SOCIALLOGO =styled.div`
display:flex;
justify-content:center;
justify-content:space-around;
position:relative;
top:30px;
.twittera {
    position:relative;
    left:50px;
}
.GooglePlus {
    position:relative;
    right:50px;
}
`;

export const LI =styled.li`
list-style-type:none;
color:white;
font-size:18px;
text-decoration:none;
`;

export const FORMSECTION =styled.form`
width:100%;

`;

export const FORMGROUP = styled.li`
list-style-type:none;
padding-top:10px;
.user, .email, .password
{
    font-size:23px;
    color:grey;
    min-width:20%;
    height:22px;

}
`;


export const Span =styled.span`
color:grey;
font-size:15px;
font-weight:50;
position:relative;
top:-28px;
`;
export const Input = styled.input`
width:70%;
height:50px;
border:none;
border-bottom:1px solid lightgrey;
    &::placeholder{
        position:relative;
        top:-1px;
        font-size:15px;
        color:grey;

    }
`;


export const A =styled.a`
text-decoration:none;
position:relative;
top:30px;
`;
