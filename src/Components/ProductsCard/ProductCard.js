import { CardBox, CardImg, StarBox, ButtonsBox } from "./ProductCard.styles";
import { Typography, FlexBox } from "../../App.Styles";
import Cardimg from "../../Assets/camera.png";
import Button from "../Button/Button";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

export default function ProductCard(props) {
  // const [value, setValue] = useState(3);
  return (
    <CardBox
      widthBorder={props.widthBorder}
      to={`/product/${props.id}/${props.name}`}
    >
      <CardImg src={props.image} alt={props.name} />
      
      <Typography fontSize={24}>{props.name}</Typography>
      <Rating name="simple-controlled" value={props.rate} />
      <FlexBox style={{ margin: "20px 0" }}>
        <Typography fontSize={30} color={"#242424"} fontWeight={"bold"}>
          ${props.price}
        </Typography>

        {props.discount > 0 && (
          <Typography color={"#FC4059"} fontSize={30}>
            ${props.discount}
          </Typography>
        )}
      </FlexBox>
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
  );
}
