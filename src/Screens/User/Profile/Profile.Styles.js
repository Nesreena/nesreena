import styled from "styled-components";
import { FlexColumn, FlexRow, FlexBox } from "../../../App.Styles";

export const ProfileImg=styled("img")`
width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: ${(props) => props.border};
border-radius: 50%;
margin:13px 15px;
`
export const ProfileBox=styled(FlexRow)``
