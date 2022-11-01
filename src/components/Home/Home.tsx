import ProductListing from "../ProductListing/ProductListing";
import "./Home.scss";
import { useEffect } from "react";
import { fetchAsyncProducts } from "../../redux/productsSlice";
import { useAppDispatch } from "../../redux/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <div>
      <ProductListing></ProductListing>
    </div>
  );
};

export default Home;
