import styled  from 'styled-components';

export const SECTION1 =styled.div`
width:100%;
height:500px;
background-color:white;
display:flex;
justify-content:center;

@media only screen and (max-width: 768px) {
  flex-direction:column;
  height:1000px;
  position: relative;

`;

const section1img = `
width: 100px;
height: 100px;
align-self:center;
`;



export const DIV =styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
justify-content:center;
width:33.3%;
padding:20px;
height:400px;
@media only screen and (max-width: 768px) {
 width:100%;
 height:300px;
}

`;
export const Div =styled.div`


`;


export const GLOBAL = styled.img`
   ${section1img};
  
`;
export const SECURITYLOGO = styled.img`
    ${section1img};
  
`;
export const CLOUD = styled.img`
    ${section1img};
  
`;

export const CAPTION = styled.h2`
align-self:center;
`;


export const P = styled.p`
text-align:center;
color:grey; 
align-self:center;
line-height:1.8;
   
`;


