import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../App.Styles";

export const CartBox = styled(FlexRow)`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  height: 242px;
  justify-content: space-between;
`;

export const Image = styled("img")`
  width: 25%;
  min-width: 200px;
  object-fit: cover;
`;
