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

  return (
    <div>
      <div>
        {/* {data.map((item: any) => {
          return <div>{item.title}</div>;
        })} */}
        {data.title}
      </div>
    </div>
  );
};

export default ProductDetail;
