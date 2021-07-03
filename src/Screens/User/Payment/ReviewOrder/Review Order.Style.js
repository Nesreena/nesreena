import styled from "styled-components";
import {
  FlexColumn,
  FlexRow,
  FlexBox,
  Typography,
} from "../../../../App.Styles";
// import{Field } from 'formik'

export const BorderedNum = styled(Typography)`
  background: #fcdd06;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-right: 9px;

  /* opacity:${(props) => props.opacity} */
`;
export const ShortLine = styled("hr")`
  width: 10%;
  margin: 5px 30px;
`;

export const LongLine = styled("hr")`
     width: 117%;

    margin:40px 0;
`;

export const OrderImg = styled("img")`
  width: 135px;
  height: 90px;
  background: transparent;
  margin-right: 20px;
`;

export const ChangeText = styled(Typography)`
  text-decoration: underline;
  letter-spacing: 0.44px;
  color: #707070;
  font-size: 22px;
`;
export const PayBox = styled(FlexColumn)`
  justify-content: start;
  align-items: start;
  width: ${(props) => props.width}px;
  height: 652px;
  padding: 41px 41px;
  background-color: #F2F2F2;
  border-radius: 16px;
`;
export const Input = styled("input")`
outline:none;
height:40px;
width: 360px;
border-radius: 6px;
font-size: 14px;
padding:11px;
color:#787878;
background-color: #F2F2F2;

&::placeholder{
    outline: none;

};



`