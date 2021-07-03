import {
  InnerSection,
  FlexBox,
  FlexRow,
  FlexColumn,
  Typography,
} from "../../../../App.Styles";

import { BorderedNum, ShortLine, OrderImg,ChangeText } from "./Review Order.Style";
import camera from "../../../../Assets/camera.png";
export default function PlaceOrder(props) {
  return (
    <FlexBox color="#fff">
      <InnerSection  style={{ justifyContent: "start", alignItems: "start" }}>
        <FlexColumn style={{ justifyContent: "start", alignItems: "start", margin: "39px 0 "}}>
          <Typography fontSize={32}
            fontWeight={"bold"} >Review Order</Typography>

  
          {/* <FlexBox style={{justifyContent : "start", margin:"31px 0" }}>
            <BorderedNum fontSize={22}
            fontWeight={"bold"} style={{ opacity: 0.6 }}>1</BorderedNum>
           
            <Typography fontSize={22}
            fontWeight={"bold"} style={{ opacity: 0.6 }}>Shipping and Payment</Typography>
          <ShortLine />
            <BorderedNum fontSize={22}
            fontWeight={"bold"}>2</BorderedNum>
            
            <Typography fontSize={22}
            fontWeight={"bold"}>Place an Order</Typography>
          </FlexBox> */}
      
          <FlexRow  style={{alignItems: "start", justifyContent : "start" ,}}>
            <FlexColumn
              style={{
                width: "950px",
                height: "652px",
                justifyContent: "start",
                padding:"41px 41px",
                background: "#F2F2F2",
                borderRadius: "16px",
               
              }}
            >
              <FlexColumn style={{alignItems: "start", justifyContent : "start" ,}}>
                <Typography fontSize={24}
            fontWeight={"bold"} >Shipping Address</Typography>
                <Typography  fontSize={22} >{props.userName} John rose </Typography>
                <Typography>
                  {" "}
                  {props.address} 56051 Jones Falls, Philippines, Turkey - 62502{" "}
                </Typography>
              </FlexColumn>

              <FlexColumn >
                <FlexRow style={{ justifyContent: "space-between" , margin:"41px 0"}} >
                  <Typography fontSize={24}
            fontWeight={"bold"} >Order Details</Typography>
                  <ChangeText>change</ChangeText>
                </FlexRow>

                <FlexRow>
                  <OrderImg src={camera} />

                  <FlexColumn style={{  alignItems: "start" }}>
                    <Typography>
                      {props.item} iPhone 11 Pro 256GB Memory{" "}
                    </Typography>
                    <FlexRow style={{ justifyContent: "space-between",width:"461px", marginTop:"40px"}}>
                    <Typography>{props.price} $499.99 × {props.orderNum}1 </Typography>
                    <Typography fontWeight={"bold"} >{props.price} $499.99</Typography>
                    </FlexRow>
                  </FlexColumn>
                </FlexRow>

                <FlexRow style={{ marginTop:"40px"}}>
                  <OrderImg src={camera} />

                  <FlexColumn style={{  alignItems: "start" }}>
                    <Typography>
                      {props.item} iPhone 11 Pro 256GB Memory{" "}
                    </Typography>
                    <FlexRow style={{ justifyContent: "space-between",width:"461px",  marginTop:"40px"}}>
                    <Typography>{props.price} $499.99 × {props.orderNum}1</Typography>
                    <Typography  fontWeight={"bold"} >{props.price} $499.99 </Typography>
                    </FlexRow>
                  </FlexColumn>
                </FlexRow>

                <FlexColumn >
                  <FlexRow style={{ justifyContent: "space-between" , margin:"41px 0"}}> 
                    <Typography fontSize={24}
            fontWeight={"bold"}>Payment Details</Typography>
                    <ChangeText>change</ChangeText>
                  </FlexRow>
                </FlexColumn>
              </FlexColumn>
            </FlexColumn>

            <FlexColumn  style={{
                width: " 400px",
                height: "280px",
                padding:"41px 41px",
                background: "#F2F2F2",
                borderRadius: "16px",
                alignItems: "start",
                justifyContent: "start",
                marginLeft:"30px"
              }}>
                  <Typography fontSize={24}
            fontWeight={"bold"} style={{letterSpacing: "1.28px", marginBottom:"20px"}}>
                  Order Details    
                  </Typography>

                  <FlexRow style={{ justifyContent: "space-between"}}>
                      <FlexColumn style={{  alignItems: "start" }}>
                      <Typography fontSize={16} color={"#707070"} style={{letterSpacing: "0.32px", marginBottom:"20px"}}>
                      Subtotal   
                  </Typography>

                  <Typography fontSize={16} color={"#707070"} style={{letterSpacing: "0.32px", marginBottom:"20px"}}>
                  Tax   
                  </Typography>

                  <Typography fontSize={16} color={"#707070"} style={{letterSpacing: "0.32px", marginBottom:"20px"}}>
                  Shipping   
                  </Typography>
                  <Typography fontSize={16}
            fontWeight={"bold"}  style={{letterSpacing: "0.32px", marginBottom:"20px"}}>
                  Total  
                  </Typography>
                      </FlexColumn>

                      <FlexColumn style={{  alignItems: "start" , marginLeft:"120px"}} >
                      <Typography fontSize={16} color={"#707070"} style={{letterSpacing: "0.32px", marginBottom:"20px"}}>
                      $2.53 {props.SubTotal}    </Typography>

                  <Typography fontSize={16} color={"#707070"} style={{letterSpacing: "0.32px", marginBottom:"20px"}}>
                  Tax  {props.Tax }
                  </Typography>

                  <Typography fontSize={16} color={"#707070"} style={{letterSpacing: "0.32px", marginBottom:"20px"}}>
                  Shipping   {props.Shipping}
                  </Typography>
                  <Typography fontSize={16}
            fontWeight={"bold"} style={{letterSpacing: "0.32px", marginBottom:"20px"}} >
                  Total  {props.Total}
                  </Typography>
                      </FlexColumn>
                  </FlexRow>
           

            </FlexColumn>
          </FlexRow>
        </FlexColumn>
      </InnerSection>
    </FlexBox>
  );
}
