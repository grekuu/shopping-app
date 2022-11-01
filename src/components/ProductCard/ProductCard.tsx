import { ProductsType } from "../../redux/productsSlice";
import "./ProductCard.scss";

const ProductCard = ({ id, title, image, price, rating }: ProductsType) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{price}</p>
      <p>{rating.rate}</p>
    </div>
  );
};

export default ProductCard;
