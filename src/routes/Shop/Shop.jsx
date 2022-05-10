import { useContext } from "react";

import "./styles.scss";
import { CategoriesContext } from "../../context/categories";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
