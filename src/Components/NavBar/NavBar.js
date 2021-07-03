import {
  NavContainer,
  NavInnerSection,
  StyledLink,
  NavBox,
  Logo,
  SearchInput,
  SearchButton,
  StyledSearchIcon,
  Icon,
  IconCouunt,
} from "./NavBar.Styles";
import logo from "../../Assets/Screenshot 2021-06-14 110717.png";
import { Typography } from "../../App.Styles";
import { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../../Redux/User/userActions";

const StyleObj = {
  fontSize: 20,
  color: "#FFF",
  fill: "#FFF",
  margin: "auto 0 auto 32px",
};

const NavBar = () => {
  const [value, setValue] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <NavInnerSection>
        <NavBox>
          <StyledLink to={"/"}>
            <Logo src={logo} alt="Logo" />
          </StyledLink>
        </NavBox>
        <NavBox style={{ background: "#FFF", borderRadius: 6 }}>
          <SearchInput
            value={value}
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <SearchButton>
            <StyledSearchIcon />
            Search
          </SearchButton>
        </NavBox>

        <NavBox>
          <Icon to={state.userDetails.user._id ? "/Profile" : "/LoginPage"}>
            <PersonIcon style={StyleObj} />
            {state.userDetails.user._id ? (
              <Typography fontSize={"13px"} color={"#fff"}>
               {state.userDetails.user.name}
              </Typography>
            ) : (
              <Typography fontSize={"13px"} color={"#fff"}>
                Login / Sign up
              </Typography>
            )}
          </Icon>

          <Icon>
            <IconCouunt>0</IconCouunt>
            <BookmarkIcon style={StyleObj} />
            <Typography fontSize={"13px"} color={"#fff"}>
              Wishlist
            </Typography>
          </Icon>

          <Icon to={"/cart"}>
            <IconCouunt>0</IconCouunt>
            <ShoppingCartIcon style={StyleObj} />
            <Typography fontSize={"13px"} color={"#fff"}>
              Cart
            </Typography>
          </Icon>
          {state.userDetails.user._id && (
          <Icon
            onClick={() => {
              dispatch(logoutAction());
              localStorage.removeItem("user");
            }}
          >
            <ExitToAppIcon style={StyleObj} />

            <Typography fontSize={"13px"} color={"#fff"}>
              Logout
            </Typography>
          </Icon> )}
        </NavBox>
      </NavInnerSection>
    </NavContainer>
  );
};

export default NavBar;
