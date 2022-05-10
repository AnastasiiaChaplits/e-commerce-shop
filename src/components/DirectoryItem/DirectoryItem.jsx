import "./styled.scss";
import { Link } from "react-router-dom";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link className="body" to={`shop/${title}`}>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default DirectoryItem;
