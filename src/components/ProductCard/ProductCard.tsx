import { Link } from "react-router-dom";
import { ProductsType } from "../../redux/productsSlice";
import "./ProductCard.scss";

const ProductCard = ({ id, title, image, price, rating }: ProductsType) => {
  return (
    <div className="product-card">
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img src={image} alt={title} loading="lazy" />
        <h4>{title.substring(0, 19)}...</h4>
        <p>
          Price: <b>${price}</b>
        </p>
        <p>
          Rating: <b>{rating.rate}</b>
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
