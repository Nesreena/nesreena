import styled from "styled-components"

export const CustomeButton=styled("button")`
    display: flex;
    justify-content: center;
    align-items:center;
    background: ${props=>props.isGray?"#F2F2F2":"#FCDD06"};
    color:#242424;
    width:${props=>props.width?props.width:"200px"};
    border-radius:${props=>props.borderRadius?props.borderRadius : 10}px;
    border:none;
    font-size:24px;

  ${(props) =>
    props.disabled
      ? `
        background:gray;
        color:white;
        cursor: none;
  `
      : ""}
`;