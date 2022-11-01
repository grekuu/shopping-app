import { useAppSelector } from "../../redux/hooks";
import { getAllProducts } from "../../redux/productsSlice";
import "./ProductListing.scss";

function ProductListing() {
  const products = useAppSelector(getAllProducts);

  console.log(products);

  return (
    <div>
      <div className="products-wrapper">
        {products.map((product) => {
          return <div>{product.title}</div>;
        })}
      </div>
    </div>
  );
}

export default ProductListing;
