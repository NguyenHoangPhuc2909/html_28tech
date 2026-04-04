import { useEffect, useState } from "react";
import { getProductList } from "../../Services/productServices";
import ProductItem from "./ProductItem";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await getProductList();
      setProducts(result);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <div className="container">
        <div className="product">
          {products.map(item => (
            <ProductItem item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;