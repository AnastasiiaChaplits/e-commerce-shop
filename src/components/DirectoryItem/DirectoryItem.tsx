import { FC } from "react";
import { DirectoryItemContainer, Body, BackgroundImage } from "./styled";

type Category = {
  title: string;
  imageUrl: string;
};

export type DirectoryItemProps = {
  category: Category;
};

const DirectoryItem: FC<DirectoryItemProps> = ({
  category: { title, imageUrl },
}) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body to={`shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
