import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductCardContainer, Footer, Name, Price } from "./styles";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { addItemToCart } from "../../store/cart/cartAction";
import { selectCartItems } from "../../store/cart/cartSelector";
// import { CartContext } from "../../context/cart";

type Item = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
export type ProductCardProps = {
  product: Item;
};
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  // const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
