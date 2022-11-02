import "./Header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getCartItemsNumber } from "../../redux/productsSlice";

const Header = () => {
  const numberOfItems = useAppSelector(getCartItemsNumber);

  return (
    <div className="header">
      <Link to="/" className="store-title">
        Store
      </Link>

      <Link to="/cart">
        <div className="header-right">
          <AiOutlineShoppingCart className="cart-icon" />
          <div className="cart-num">{numberOfItems}</div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
