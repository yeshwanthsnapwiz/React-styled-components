import styled ,{keyframes} from 'styled-components';



const animatetitle = keyframes`

0%  {color:#8892d6}
  25%{ color:#45bbe0;}
  50%{ color:##f06292;}
  100%{ color:#78c350;}

  from {left:-50%;}
  to {left:0%;}
`;


export const SECTIONWRAP = styled.div`

display:flex;
flex-wrap:wrap;
justify-content:space-around;
width:100%;
height:330px;

.p {
    position: relative;
 animation:${animatetitle} 2s ease-in-out ;

 }


 `;


 export const Div = styled.div`

 display:flex;
 flex-wrap:wrap;
 justify-content:space-around;
 align-self:center;
 width:100%;
 height:40px;
 font-size:20px;
 font-weight:bold;
 color:#3b3e47;
  `;
 



 export const STAT = styled.div`

 display:flex;
 flex-wrap:wrap;
 justify-content:space-around;
 width:100%;
 .statics{
     background-color:#8892d6;
 }
 .usertoday{
     background-color:#45bbe0;
 }
 .request {
     background-color:#f06292;
 }
 .new {
     background-color:#78c350;
 }
  `;





   export const DIV = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:space-evenly;
   width:250px;
   height:170px;
   border-radius:3px;
   &:hover {
       position: relative;
       top:-20px;
       left:-5px;
   }
   li {
       align-self:center;
       list-style-type:none;
       color:white;
       font-family: Arial;
   }`;