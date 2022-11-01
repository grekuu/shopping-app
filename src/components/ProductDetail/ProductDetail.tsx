import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import {
  addToCart,
  fetchAsyncProductDetail,
  getProductDetail,
  removeSelectedProduct,
} from "../../redux/productsSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getProductDetail);

  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncProductDetail(id!));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, id]);

  function handleAdd() {
    dispatch(addToCart(data!));
  }

  return (
    <div>
      {data ? (
        <div className="product-container">
          <div className="product-left">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="product-right">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>
              Rating: <b>{data.rating.rate}</b>
            </p>
            <p>
              Price: <b>${data.price}</b>
            </p>
            <button onClick={handleAdd}>Add to cart</button>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ProductDetail;
