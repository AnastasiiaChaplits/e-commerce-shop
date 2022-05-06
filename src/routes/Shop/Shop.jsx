import { useContext } from "react";

import "./styles.scss";
import { ProductsContext } from "../../context/products";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
