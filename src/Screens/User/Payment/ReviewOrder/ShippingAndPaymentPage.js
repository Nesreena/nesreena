import {
  InnerSection,
  FlexBox,
  FlexRow,
  FlexColumn,
  Typography,
} from "../../../../App.Styles";
//   import {Input} from '../../LoginPage/LoginPage.Styles'

import {
  BorderedNum,
  ShortLine,
  OrderImg,
  ChangeText,
  PayBox,
  Input,
  LongLine,
} from "./Review Order.Style";
import camera from "../../../../Assets/camera.png";
import Button from "../../../../Components/Button/Button";

export default function ShippingAndPayment(props) {
  return (
    <FlexBox color="#fff">
      <InnerSection style={{ justifyContent: "start", alignItems: "start" }}>
        <FlexColumn
          style={{
            justifyContent: "start",
            alignItems: "start",
            margin: "39px 0 ",
          }}
        >
          <Typography fontSize={32} fontWeight={"bold"}>
            Review Order
          </Typography>

          {/* <FlexBox style={{ justifyContent: "start", margin: "31px 0" }}>
            <BorderedNum fontSize={22} fontWeight={"bold"}>
              1
            </BorderedNum>

            <Typography fontSize={22} fontWeight={"bold"}>
              Shipping and Payment
            </Typography>
            <ShortLine />
            <BorderedNum
              fontSize={22}
              fontWeight={"bold"}
              style={{ opacity: 0.6 }}
            >
              2
            </BorderedNum>

            <Typography
              fontSize={22}
              fontWeight={"bold"}
              style={{ opacity: 0.6 }}
            >
              Place an Order
            </Typography>
          </FlexBox> */}

          <FlexRow style={{ justifyContent: "start" }}>
            <PayBox width={950}>
              <FlexColumn style={{ alignItems: "start" }}>
                <Typography fontSize={32} fontWeight={"bold"}>
                  Shipping Address
                </Typography>

                <FlexColumn>
                  <FlexRow style={{ margin: "20px 0" }}>
                    <FlexColumn style={{ alignItems: "start" }}>
                      <Typography
                        fontSize={22}
                        style={{ marginBottom: "10px" }}
                      >
                        Country
                      </Typography>

                      <Input type={"text"} placeholder={"ddddd"} />
                    </FlexColumn>
                    <FlexColumn style={{ alignItems: "start" }}>
                      <Typography
                        fontSize={22}
                        style={{ marginBottom: "10px" }}
                      >
                        City
                      </Typography>

                      <Input type={"text"} placeholder={"ddddd"} />
                    </FlexColumn>
                  </FlexRow>
                  <FlexRow style={{ margin: "20px 0" }}>
                    <FlexColumn style={{ alignItems: "start" }}>
                      <Typography
                        fontSize={22}
                        style={{ marginBottom: "10px" }}
                      >
                        Zip Code
                      </Typography>

                      <Input type={"text"} placeholder={"ddddd"} />
                    </FlexColumn>
                    <FlexColumn style={{ alignItems: "start" }}>
                      <Typography
                        fontSize={22}
                        style={{ marginBottom: "10px" }}
                      >
                        Street Address
                      </Typography>

                      <Input type={"text"} placeholder={"ddddd"} />
                    </FlexColumn>
                  </FlexRow>
                </FlexColumn>
              </FlexColumn>

              <FlexColumn style={{ alignItems: "start", marginTop: "40px" }}>
                <Typography fontSize={32} fontWeight={"bold"}>
                  Payment Details
                </Typography>

                <FlexColumn>
                  <FlexRow style={{ margin: "20px 0" }}>
                    <FlexColumn style={{ alignItems: "start" }}>
                      <Typography
                        fontSize={22}
                        style={{ marginBottom: "10px" }}
                      >
                        Name on Card
                      </Typography>

                      <Input type={"text"} placeholder={"ddddd"} />
                    </FlexColumn>
                    <FlexColumn style={{ alignItems: "start" }}>
                      <Typography
                        fontSize={22}
                        style={{ marginBottom: "10px" }}
                      >
                        Card Number
                      </Typography>

                      <Input type={"text"} placeholder={"ddddd"} />
                    </FlexColumn>
                  </FlexRow>
                  <FlexRow style={{ margin: "20px 0" }}>
                    <FlexColumn style={{ alignItems: "start" }}>
                      <Typography
                        fontSize={22}
                        style={{ marginBottom: "10px" }}
                      >
                        Expiration Date
                      </Typography>

                      <Input type={"text"} placeholder={"ddddd"} />
                    </FlexColumn>
                    <FlexColumn style={{ alignItems: "start" }}>
                      <Typography
                        fontSize={22}
                        style={{ marginBottom: "10px" }}
                      >
                        CVC
                      </Typography>

                      <Input type={"text"} placeholder={"ddddd"} />
                    </FlexColumn>
                  </FlexRow>
                </FlexColumn>
              </FlexColumn>
            </PayBox>

            <PayBox width={536} style={{ marginLeft: "20px" }}>
              <FlexColumn>
                <FlexRow
                  style={{ justifyContent: "space-between", margin: "35px 0" }}
                >
                  <Typography fontSize={24} fontWeight={"bold"}>
                    Order Details
                  </Typography>
                  <ChangeText>change</ChangeText>
                </FlexRow>

                <FlexRow>
                  <OrderImg src={camera} />

                  <FlexColumn style={{ alignItems: "start" }}>
                    <Typography>
                      {props.item} iPhone 11 Pro 256GB Memory{" "}
                    </Typography>
                    <FlexRow
                      style={{
                        justifyContent: "space-between",
                        width: "316px",
                        marginTop: "40px",
                      }}
                    >
                      <Typography>
                        {props.price} $499.99 × {props.orderNum}1{" "}
                      </Typography>
                      <Typography fontWeight={"bold"}>
                        {props.price} $499.99
                      </Typography>
                    </FlexRow>
                  </FlexColumn>
                </FlexRow>
                <LongLine />
                <FlexRow>
                  <OrderImg src={camera} />

                  <FlexColumn style={{ alignItems: "start" }}>
                    <Typography>
                      {props.item} iPhone 11 Pro 256GB Memory{" "}
                    </Typography>
                    <FlexRow
                      style={{
                        justifyContent: "space-between",
                        marginTop: "40px",
                        width: "316px",
                      }}
                    >
                      <Typography>
                        {props.price} $499.99 × {props.orderNum}1
                      </Typography>
                      <Typography fontWeight={"bold"}>
                        {props.price} $499.99{" "}
                      </Typography>
                    </FlexRow>
                  </FlexColumn>
                </FlexRow>
                <LongLine />
              </FlexColumn>

              <FlexRow style={{ justifyContent: "space-between" }}>
                <FlexColumn style={{ alignItems: "start" }}>
                  <Typography
                    fontSize={16}
                    color={"#707070"}
                    style={{ letterSpacing: "0.32px", marginBottom: "20px" }}
                  >
                    Subtotal
                  </Typography>

                  <Typography
                    fontSize={16}
                    color={"#707070"}
                    style={{ letterSpacing: "0.32px", marginBottom: "20px" }}
                  >
                    Tax
                  </Typography>

                  <Typography
                    fontSize={16}
                    color={"#707070"}
                    style={{ letterSpacing: "0.32px", marginBottom: "20px" }}
                  >
                    Shipping
                  </Typography>
                  <Typography
                    fontSize={16}
                    fontWeight={"bold"}
                    style={{ letterSpacing: "0.32px", marginBottom: "20px" }}
                  >
                    Total
                  </Typography>
                </FlexColumn>

                <FlexColumn
                  style={{ alignItems: "start", marginLeft: "322px" }}
                >
                  <Typography
                    fontSize={16}
                    color={"#707070"}
                    style={{ letterSpacing: "0.32px", marginBottom: "20px" }}
                  >
                    $2.53 {props.SubTotal}{" "}
                  </Typography>

                  <Typography
                    fontSize={16}
                    color={"#707070"}
                    style={{ letterSpacing: "0.32px", marginBottom: "20px" }}
                  >
                    Tax {props.Tax}
                  </Typography>

                  <Typography
                    fontSize={16}
                    color={"#707070"}
                    style={{ letterSpacing: "0.32px", marginBottom: "20px" }}
                  >
                    Shipping {props.Shipping}
                  </Typography>
                  <Typography
                    fontSize={16}
                    fontWeight={"bold"}
                    style={{ letterSpacing: "0.32px", marginBottom: "20px" }}
                  >
                    Total {props.Total}
                  </Typography>
                </FlexColumn>
              </FlexRow>
            </PayBox>
          </FlexRow>
        </FlexColumn>

        <FlexColumn style={{ alignItems: "flex-end", marginLeft: "-126px}" }}>
          <Button
            onClick={() => {}}
            isGray={false}
            width={"324px"}
            borderRadius={"16px"}
            style={{ margin: "60px 0", height: "62px" }}
            text="Review order"
          />
        </FlexColumn>
      </InnerSection>
    </FlexBox>
  );
}
