import { iteratorSymbol } from "immer/dist/internal";
import { useAppSelector } from "../../redux/hooks";
import { getCart } from "../../redux/productsSlice";
import "./Cart.scss";

const Cart = () => {
  const cart = useAppSelector(getCart);
  let total = 0;

  return (
    <div>
      {cart ? (
        <div>
          {cart.map((item) => {
            total += item.price;
            return (
              <div className="cart-items">
                <div className="single-cart-item">
                  <img src={item.image} alt={item.title} />
                  {item.title} <br /> Price: ${item.price}
                </div>
              </div>
            );
          })}
          <p className="total-price">Total: ${total}</p>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Cart;
