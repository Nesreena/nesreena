import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";
import {CartBox} from "./ShoppingCart.Styles";
import emptyCart from "../../../Assets/emptyCart.png";
import EmptyCart from "./ShoppingCart.Styles";
import Button from "../../../Components/Button/Button";
import { LineBox } from "./ShoppingCart.Styles";
import CartItem from "../../../Components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";


export default function ShoppingCart(props) {
    const state = useSelector((state) => state);

  return (
    <FlexColumn color={"#fff"}>
      <InnerSection>
        <FlexRow style={{ justifyContent: "start", marginTop: "20px" }}>
          <Typography style={{ color: "#707070" }}>Back </Typography>
          <Typography style={{ margin: "0 5px" }}> / </Typography>
          <Typography> Shopping Cart</Typography>
        </FlexRow>

        <FlexRow >
    

     <CartBox style={{background:"red"}}>
     {state.cart?.cart?.map((item) => (
            <CartItem
              key={item._id}
              image={item.image} />
          ))}

     </CartBox>
        
          <FlexBox>
            <FlexColumn
              style={{
                background: "#F2F2F2",
                width: "384px ",
                height: "351px",
                marginTop: 30,
                borderRadius: "16px",
              }}
            >
              <FlexColumn style={{ marginTop: 30 }}>
                <Typography
                  fontSize={32}
                  fontWeight={"bold"}
                  style={{ padding: "28px 0" }}
                >
                  {" "}
                  Subtotal ({props.number}) items
                </Typography>
                <Typography
                  fontSize={32}
                  style={{
                    padding: "0 0 15px 0",
                    color: "#707070",
                    textDecoration: " line-through",
                  }}
                >
                  {" "}
                  {props.totalPrice}{" "}
                </Typography>
                <Typography
                  fontSize={38}
                  fontWeight={"bold"}
                  style={{ marginBottom: 30 }}
                >
                  {" "}
                  {props.dicCountPrice}{" "}
                </Typography>
              </FlexColumn>

              <FlexBox>
                <Button
                  onClick={() => {}}
                  isGray={false}
                  width={"324px"}
                  borderRadius={"10px"}
                  style={{ margin: "60px 0", height: "62px" }}
                  text="Proceed to checkout"
                />
              </FlexBox>
            </FlexColumn>
          </FlexBox>
        </FlexRow>
      </InnerSection>
    </FlexColumn>
  );
}
