import styled,{keyframes} from 'styled-components';

const animatetitle = keyframes`
  from {top:150px; opacity:0;}
  to {top:0px; opacity:1;}
`;

const animatetitleb = keyframes`
  from {top:150px; opacity:0;}
  to {top:-23px; opacity:1;}
`;


export const HOME= styled.div`
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 justify-content:center;
 align-items:center;
 padding-top:200px;
 width:100%;
 height:500px;
 background-color:rgba(49, 52, 69, 0.5);
}
.p1{
    animation:${animatetitle} 1s ease-in-out ;
}
.p2 {
   position:relative;
   top:-23px;
   animation:${animatetitleb} 1s ease-in-out ;
}


`;

export const H1= styled.h1`
 display:flex;
 justify-content:space-between;
 color:white;
 font-size:50px;
 opacity:1;
 position:relative;
 animation:${animatetitle} 0.5s ease-in-out ;
}

`;

export const P= styled.p`
line-height:1.8;
background-color:#4aae88;
text-align:Center;
 color:white;
 position:relative;

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
animation:${animatetitle} 1.5s ease-in-out ;
`;