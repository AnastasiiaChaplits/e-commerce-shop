import { FC } from "react";

import { CartItemContainer, ItemDetails, ItemName } from "./styles";

type Item = {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};
export type CartItemProps = {
  cartItem: Item;
};
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
