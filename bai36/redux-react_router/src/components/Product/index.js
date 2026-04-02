import { useEffect, useState } from "react";
import { getProductList } from "../../Services/productServices";
import { FaCartPlus } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await getProductList();
      setProducts(result);
    };
    fetchAPI();
  }, []);

  console.log(products);
  return (
    <>
      <div className="container">
        <div className="product">
          {products.map(item => (
            <div className="product__item">
              <div className="product__image">
                <img src={item.thumbnail} alt={item.title} />
                <p className="product_discount">{item.discountPercentage}%</p>
              </div>
              <div className="product__content">
                <h3 className="product__title">{item.title}</h3>
                <div className="product__meta">
                  <div className="product__prices">
                    <p className="product__price--new">${item.price} - </p>
                    <p className="product__price--old">${item.price}</p>
                  </div>

                  {/* Hàng 2: stock + button */}
                  <div className="product__actions">
                    <p className="product__rating"><IoIosStarOutline /> {item.rating}</p>
                    <button className="product__btn"><FaCartPlus /></button>
                  </div>
                </div>
              </div>
            </div>
          ))};
        </div>
      </div>
    </>
  );
}

export default Product;