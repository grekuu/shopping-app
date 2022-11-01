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
              <div className="cart-items" key={item.id}>
                <div className="single-cart-item">
                  <img src={item.image} alt={item.title} />
                  {item.title} <br /> <br /> Price: ${item.price}
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
