import styled from 'styled-components';




export const FORMWRAP = styled.div`
background:url(${props => props.img});
background-attachment: fixed;
width:100%;
height:670px;
background-size:cover;
@media screen and (max-width: 680px) {
 min-height:800px;
}
`;




export const FORMTRANSPERANT = styled.div`
    background-color:rgba(121,121,121,0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
   min-height:670px;
   @media screen and (max-width: 680px) {
    min-height:800px;
  }
}
`;

