import propTypes from "prop-types";
import {Image, } from "./CartItem.Styles";
import {FlexRow, Typography} from "../../App.Styles"

export default  function CartItem({ counter, setCounter, price, image, name, handleDelete }) {
  return (
    <FlexRow>
      <Image src={"https://proshop-ms.herokuapp.com/" + image} alt={name} />
    </FlexRow>
  );
}

CartItem.defaultProps = {
  handleDelete: () => {},
  setCounter: () => {},
  counter: 1,
};

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  counter: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  setCounter: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
};