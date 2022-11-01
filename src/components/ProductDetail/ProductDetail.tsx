import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import {
  fetchAsyncProductDetail,
  getProductDetail,
} from "../../redux/productsSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getProductDetail);

  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncProductDetail(id!));
  }, [dispatch, id]);

  let renderProduct;

  renderProduct = data ? (
    <div className="movie-detail-container">
      <p>{data.title}</p>
    </div>
  ) : (
    <div className="movies-error">
      <h3>Loading</h3>
    </div>
  );

  return <div>{data ? <div>{data.title}</div> : <div>Loading </div>}</div>;
};

export default ProductDetail;
