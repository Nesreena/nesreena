import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";
import Image from "../../../Assets/Screenshot 2021-06-15 080707.png";
import HeroImg from "../../../Assets/heroimg.png";
import Cardimg from "../../../Assets/Screenshot 2021-06-15 114138.png";
import cam from "../../../Assets/camera.png";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import {
  HeroBox,
  HeroTitle,
  SideBox,
  CardBox,
  CardTitle,
  Line,
  Cards,
  CardContainer,
  CardImg,
  StarBox,
  ButtonsBox,
  HeadBorder,
  DotsBox,
  SliderDots,
  SliderImg,
  Arrow,
} from "./HomeScreen.Styles";
import Button from "../../../Components/Button/Button";
import { RecentlyViewedProducts } from "../../../Components/ProductsCard/RecentlyViewedProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProducts from "./FeaturedProducts";
import {
  getFeaturedProducts,
  getSliderImages,
} from "../../../Redux/Guest/guestActions";
import HeroSection from "./HeroSection";
// import {handleChangeIndex}

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};

const StyleObj = {
  fontSize: 28,
  color: "#FCDD06",
  fill: "#FCDD06",
};

const StyleChevron = {
  fontSize: 50,
  color: "#000000",
  fill: "#000000",
};

const HomeScreen = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSliderImages());
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  return (
    <FlexColumn>
      <HeroSection sliderProducts={state.guestState.sliderImages} />
      <FeaturedProducts products={state.guestState.products} />

      {/* section two of home page

      <FlexBox color={"#F7F8FC"}>
        <InnerSection>
          <CardContainer>
            <CardTitle>Featured Products </CardTitle>
            <HeadBorder />
            <Line />
            <Cards>
              <CardBox background={"#fff"} width={"31%"} borderRadius={"16px"}>
                <CardImg src={Cardimg} />
                <Typography fontSize={24}>
                  Apple iPhone 11 Pro 256GB Memory
                </Typography>
                <StarBox>
                  <StarIcon style={StyleObj} />
                  <StarIcon style={StyleObj} />
                  <StarIcon style={StyleObj} />
                  <StarHalfIcon style={StyleObj} />
                  <StarBorderIcon style={StyleObj} />
                </StarBox>
                <Typography fontSize={30} color={"#242424"} fontWeight={"bold"}>
                  $499.99
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
              <CardBox background={"#fff"} width={"31%"} borderRadius={"16px"}>
                <CardImg src={Cardimg} />
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
              <CardBox background={"#fff"} width={"31%"} borderRadius={"16px"}>
                <CardImg src={Cardimg} />
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
      </FlexBox> */}

    </FlexColumn>
  );
};

export default HomeScreen;
