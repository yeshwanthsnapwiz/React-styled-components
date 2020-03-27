import styled from 'styled-components';


export const SECTION2WRAP = styled.div`
 height:700px;
 background-size:cover;
background-image:url(${props => props.img});
@media only screen and (max-width: 1000px) {
height:800px;
}
@media only screen and (max-width: 768px) {
height:1200px;
}

`;

export const SECTIONWRAP= styled.div`
 display:flex;
 flex-direction:column;
 height:700px;
 background-color:rgba(49, 52, 69, 0.8);
 @media only screen and (max-width: 1000px) {
    
height:800px;
}
@media only screen and (max-width: 768px) {
height:1200px;
}
`;
export const TITLE= styled.div`
padding-top:100px;
text-align:center;
color:white;

`;
export const SERVICES = styled.div`
display:flex;
padding-top:30px;
@media only screen and (max-width: 1000px) {
justify-content:space-around;
}
@media only screen and (max-width: 768px) {
   
flex-direction:column;
}




`;
export const DIV = styled.div`
display:flex;
flex-direction:column;
align-content: flex-end;
width:33.3%;
z-index:200;
@media only screen and (max-width: 1000px) {
   width:45%;
   }
@media only screen and (max-width: 768px) {
width:80%;
justify-content:center;
position: relative;
left:10%;
}




`;


export const DIv = styled.div`
display:flex;
width:350px;
height:350px;
border-radius:65%;
background-color:rgba(64, 68, 85, 0.5);
background-position:fixed;
border:2px solid #4aae88;
position: relative;
left:45px;
top:20px;
@media only screen and (max-width: 1000px) {
display:none;
}


`;
export const Div = styled.div`
width:100%;
display:flex;
flex-direction:column;
position:relative;
left:130px;


`;




export const CENTERIMG = styled.img`
width:90%;
height:220px;
position: relative;
top:55px;
left:5px;
z-index:200;


`;

export const Divthird = styled.div`
display:flex;
flex-direction:column;
align-content: flex-end;
width:33.3%;
z-index:200;
@media only screen and (max-width: 1000px) {
   width:45%;
   }
@media only screen and (max-width: 760px) {
width:80%;
justify-content:center;
position: relative;
top:10%;
left:10%;
}


`;
export const GLOBALDIV = styled.div`
display:flex;

position: relative;
left:40%;
@media only screen and (max-width: 1000px) {
left:0%;
}

`;
export const GLOBALICON = styled.div`
background-color:#4aae88;
width:140px;
height:80px;
border-radius:50%;



`;
export const GLOBAL = styled.img`
align-self:center;
position:relative;
top:20px;
left:17px;
width:40px;
height:40px;
@media only screen and (max-width: 1000px) {
width:30px;
height:30px;
}

`;
export const Caption = styled.div`
color:white;
h5,p{
    text-align:end;
    padding-right:30px;
}
p {
 padding-right:30px;
}

`;
export const MAGNET = styled.img`
align-self:center;
position:relative;
top:20px;
left:17px;
width:40px;
height:40px;
@media only screen and (max-width: 1000px) {
width:30px;
height:30px;
}

`;
export const MAGNETDIV = styled.div`
display:flex;

position: relative;
left:20%;
top:10%;
@media only screen and (max-width: 1000px) {
left:0%;
}



`;
export const MAGNETICON = styled.div`
background-color:#4aae88;
width:140px;
height:80px;
border-radius:50%;


`;
export const CAption = styled.div`
color:white;
h5,p{
    text-align:end;
    padding-right:20px;
}
p {
 padding-right:20px;
}

`;
export const TIMEDIV = styled.div`
display:flex;

position: relative;
left:40%;
top:18%;
@media only screen and (max-width: 1000px) {
left:0%;
}


`;
export const TIMEICON = styled.div`
background-color:#4aae88;
width:140px;
height:80px;
border-radius:50%;


`;
export const CAPtion = styled.div`
color:white;
h5,p{
    text-align:end;
    padding-right:20px;
}
p {
 padding-right:20px;
}

`;

export const TELEGRAMDIV = styled.div`
display:flex;

position: relative;
right:18%;
@media only screen and (max-width: 1000px) {
right:0%;
}


`;
export const TELEGRAMICON = styled.div`
background-color:#4aae88;
width:140px;
height:80px;
border-radius:50%;


`;
export const TELEGRAM = styled.img`
align-self:center;
position:relative;
top:20px;
left:17px;
width:40px;
height:40px;
@media only screen and (max-width: 1000px) {
width:30px;
height:30px;

}

`;
export const CAPTion = styled.div`
color:white;
h5,p{
    
    padding-left:30px;
}
p {
 padding-left:30px;
}

`;
export const SERVERDIV = styled.div`
display:flex;

position: relative;
top:10%;


`;
export const SERVERICON = styled.div`
background-color:#4aae88;
width:140px;
height:80px;
border-radius:50%;


`;
export const SERVER = styled.img`
align-self:center;
position:relative;
top:20px;
left:17px;
width:40px;
height:40px;
@media only screen and (max-width: 1000px) {
width:30px;
height:30px;

}

`;
export const CAPTIon = styled.div`
color:white;
h5,p{
    
    padding-left:30px;
}
p {
 padding-left:30px;
}

`;
export const CLOUDDIV = styled.div`
display:flex;

position: relative;
right:15%;
top:18%;
@media only screen and (max-width: 1000px) {
right:0%;
}


`;
export const CLOUDICON = styled.div`
background-color:#4aae88;
width:140px;
height:80px;
border-radius:50%;


`;
export const CLOUD = styled.img`
align-self:center;
position:relative;
top:20px;
left:17px;
width:40px;
height:40px;
@media only screen and (max-width: 1000px) {
width:30px;
height:30px;
}

`;
export const CAPTIOn = styled.div`
color:white;
h5,p{
    
    padding-left:30px;
}
p {
 padding-left:30px;
}

`;
export const SERVICE =styled.div`
display:none;
`;
export const HOSTING1 =styled.div`

`;
export const HOSTING2 =styled.div`

`;
export const GLOBALDIVB =styled.div`

`;
export const CaptionB =styled.div`

`;
export const GLOBALICONB =styled.div`

`;
export const GLOBALB =styled.div`

`;