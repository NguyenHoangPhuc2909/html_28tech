import { useEffect, useState } from "react";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      fetch(`http://localhost:3001/products`)
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
    }
    fetchApi();
  }, []);

  return (
    <>
      <div className="product__list">
        {data.map(item => (
          <div className="product__item" key={item.id}>
            <div className="product__image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h3 className="product__title">{item.title}</h3>
            <p className="product__price">${item.price}</p>
            <p className="product__discount">${item.discountPercentage}%</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;