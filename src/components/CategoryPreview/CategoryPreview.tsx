import { FC } from "react";

import { CategoryPreviewContainer, Title, Preview } from "./styles";
import ProductCard from "../ProductCard/ProductCard";
import { CategoryItem } from "../../store/categories/categoriesTypes";

export type CategoryPreviewType = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewType> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
