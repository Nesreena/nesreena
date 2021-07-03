import {
  CardBox,
  CardTitle,
  Line,
  Cards,
  CardContainer,
  CardImg,
  StarBox,
  ButtonsBox,
} from "./HomeScreen.Styles";
import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";

export default function TopRatedProducts() {
  return (
    <FlexBox color={"white"}>
      <InnerSection>
        <CardContainer>
          <CardTitle>TOP RATE PRODUCTS</CardTitle>
          <HeadBorder />
          <Line />
          <Cards border={"1px solid #FCDD06"}>
            <CardBox
              background={"#fff"}
              width={"31%"}
              borderRight={"1px solid #F2F2F2"}
            >
              <CardImg src={cam} />
              <Typography fontSize={24}>Canon Eos 80D DSLR Camera</Typography>
              <StarBox>
                <StarIcon style={StyleObj} />
                <StarIcon style={StyleObj} />
                <StarIcon style={StyleObj} />
                <StarHalfIcon style={StyleObj} />
                <StarBorderIcon style={StyleObj} />
              </StarBox>
              <Typography fontSize={30} color={"#242424"} fontWeight={"bold"}>
                $799.99
              </Typography>
              <ButtonsBox>
                <Button
                  text={<TurnedInNotIcon />}
                  width={"54px"}
                  borderRadius={10}
                  isGray={true}
                  style={{ marginTop: 20, height: 62 }}
                >
                  {" "}
                </Button>
                <Button
                  text="Add to cart"
                  width={"324px"}
                  borderRadius={10}
                  isGray={true}
                  style={{ marginTop: 20, height: 62, marginLeft: 13 }}
                />
              </ButtonsBox>
            </CardBox>
          </Cards>
        </CardContainer>
      </InnerSection>
    </FlexBox>
  );
}
