import { DirectoryItemContainer, Body, BackgroundImage } from "./styled";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
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
