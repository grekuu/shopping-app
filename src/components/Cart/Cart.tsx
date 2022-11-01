import { useAppSelector } from "../../redux/hooks";
import { getCart } from "../../redux/productsSlice";
import "./Cart.scss";

const Cart = () => {
  const cart = useAppSelector(getCart);

  return (
    <div>
      {cart ? (
        <div>
          {cart.map((item) => {
            return (
              <div className="cart-items">
                <div className="single-cart-item">
                  <img src={item.image} alt={item.title} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Cart;
