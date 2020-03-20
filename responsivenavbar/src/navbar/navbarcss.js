import styled  from 'styled-components';


export const NAV = styled.div`

display:flex;
flex-wrap:wrap;


 `;
export const NAVBAR = styled.div`

display:flex;
justify-content:center;
width:100%;


 `;
export const Label = styled.label`
  background-color:black;
  height:35px;
  width:40px;
  color:grey;
  border-radius:5px;
  display:none;
  cursor: pointer;
  @media screen and (max-width: 680px) {
   display:block;

}
 `;



 export const TOPNAV= styled.div`
 display:flex;
 justify-content:space-around;
 width:100%;
 background-color:#3b3e45;
`;


export const LOGO= styled.li`
align-self:center;
position: relative;
left:3%;
list-style-type:none;
color:white;
font-size:15px;
.icona{
  color:#338bd4;
  margin-right:10px;
  
}

 `;


export const TOGGLEAREA = styled.div`
padding:25px;
color:white;
color:grey;
align-self:center;

a {
  text-decoration:none;
  color:grey;
}
.notification {
  align-self:center;
  margin-left:40px;
  font-size:20px
}


@media screen and (max-width: 680px) {
display:flex;
padding:15px;
.bars {
   display:none;
   font-size:23px;
   position: relative;
   left:25%;
   top:14%;

   @media screen and (max-width: 680px) {
    display:block;
    

}
}

.notification {
  align-self:center;
  margin-top:10px;
}

 `;

 export const SEARCH = styled.input`
   width:180px;
   height:35px;
   border-radius:20px;
   margin-left:15px;
   border:none;
   align-self:center;
   background-color:#494c53;
   outline:none;
   padding-left:20px;
   color:white;
  &::placeholder {
    text-align:center;
  }
   
`;



export const Navwrap = styled.div`
background-color:white;
display:flex;
justify-content:center;
width:100%;
@media screen and (max-width: 680px) {
 
 flex-direction:column;
 display:none;
 width:100%;
 
 .menu {
   text-align:center;
 }

 }`;




export const Checkbox= styled.input`
display:none;
 &:checked + .nav {
   display:flex;
    visibility: visible;
    opacity: 1;   
}
@media screen and (max-width: 680px) {
align-self:flex-start;

}
`;



export const Li = styled.li`
list-style-type:none;
color:grey;
display:flex;
flex-direction:column;
padding:15px 30px 15px 30px;
.icon {
    align-self:center;
    
}
.menu {
  float: left;
  overflow: hidden;
}
.dropdown-content {
  display: none;
  position: absolute;
  top:140px;
  background-color: #f9f9f9;
  min-width: 250px;
  border-radius:5px;
  z-index: 1;
  @media screen and (max-width: 680px) {
    min-width:50px;
    position: relative;
    top:10px;

  }
}

.dropdown-content a {
  color: grey;
  padding: 12px 14px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.menu:hover .dropdown-content {
  display: block;
  
}

}
`;



export const A =styled.a `
text-decoration:none;
color:grey;
font-size:10px;
align-self:center;
padding:5px 0px 0px 5px;

`;


