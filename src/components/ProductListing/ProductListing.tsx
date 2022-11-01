import { useAppSelector } from "../../redux/hooks";
import { getAllProducts } from "../../redux/productsSlice";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.scss";

function ProductListing() {
  const products = useAppSelector(getAllProducts);

  console.log(products);

  return (
    <div>
      <div className="products-wrapper">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product}></ProductCard>;
        })}
      </div>
    </div>
  );
}

export default ProductListing;
