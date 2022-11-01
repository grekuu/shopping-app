import "./Header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="store-title">
        Store
      </Link>

      <Link to="/cart">
        <AiOutlineShoppingCart className="cart-icon" />
      </Link>
    </div>
  );
};

export default Header;
