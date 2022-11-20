import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addCartItemsNumber,
  getCart,
  removeFromCart,
} from "../../redux/productsSlice";
import "./Cart.scss";

const Cart = () => {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  let total = 0;

  function handleDelete(id: number) {
    dispatch(removeFromCart(id));
    dispatch(addCartItemsNumber(-1));
  }

  return (
    <div>
      {cart ? (
        <div>
          {cart.map((item, id) => {
            total += item.price;
            return (
              <div className="cart-items" key={id}>
                <div className="single-cart-item">
                  <img src={item.image} alt={item.title} />
                  {item.title.substring(0, 19)}... <br /> <br /> Price: $
                  {item.price}
                  <button onClick={() => handleDelete(item.id)}>X</button>
                </div>
              </div>
            );
          })}
          <p className="total-price">Total: ${Math.round(total * 100) / 100}</p>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Cart;
