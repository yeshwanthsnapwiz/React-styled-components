import styled from 'styled-components';


export const SECTION3WRAP =styled.div`
display:flex;
flex-direction:column;
text-align:center;
width:100%;
height:600px;

`;


export const DIV = styled.div`
width:100%;
height:150px;
justify-content:center;

h6{
    color:grey;
}
h1{
    font-size:40px;
   
}
.line{
    position: relative;
    list-style-type:none;
    width:200px;
    height:3px;
    background-color: #25ae88;
  
}
`;

export const DIv =styled.div`
width:100%;
height:300px;
display:flex;
flex-direction:row;
flex-wrap:wrap;




`;
export const Div =styled.div`
width:50%;
@media only screen and (max-width: 1000px) {

   width:100%;
   
   }

`;
export const Div2 =styled.div`
width:50%;
align-self:center;
list-style:none;
@media only screen and (max-width: 1000px) {
    flex-direction:column;
   width:100%;

   }
p{
    color:grey;
    text-align:justify;
}
.ul {
    list-style-type:none;
}
li {
    padding-top:20px;
    color:grey;
}

li::before{
    position: relative;
    right:20px;
    content:"...." ;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #25ae88;
    color: #25ae88;
    z-index:400;
    border:none;
 
}
.li {
    position: relative;
    left:2px;
}

`;


export const IMG =styled.img`

`;
export const Image =styled.div`

`;