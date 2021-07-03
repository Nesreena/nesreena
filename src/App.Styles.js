import styled from "styled-components";

export const MainContainer = styled("main")`
  max-width: 1920px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  background: #ddd;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`;

export const Typography = styled("p")`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

// export const Button = styled("button")`
//   margin-top: 40px;
//   width: 25%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 40px;
//   border-radius: 21px;
//   border: none;
//   font-size: 18px;
//   font-weight: 700;
//   cursor: pointer;
// `;

export const FlexBox=styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background: ${(props) => props.color};
`;

export const BackgroundedFlexBox=styled(FlexBox)`
    background: #000;
    `

export const FlexRow=styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumn=styled(FlexBox)`
  flex-direction: column;

`;

export const InnerSection=styled(FlexColumn)`
  max-width: 1640px;
  width:100%;
  margin: 0 auto;
`;