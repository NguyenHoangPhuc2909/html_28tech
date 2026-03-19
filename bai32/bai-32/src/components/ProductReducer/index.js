import { useEffect, useReducer } from "react";

const initialState = {
  products: [],
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

function ProductReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchAPI = () => {
      dispatch({ type: "FETCH_START" });
      fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data.products
          });
        })
        .catch((error) => {
          dispatch({
            type: "FETCH_ERROR",
            payload: error.message
          });
        });
    };

    const timer = setTimeout(() => {
      fetchAPI();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {state.loading ? (
        <>Dang load du lieu</>
      ) : state.error ? (
        <>{state.error}</>
      ) : (
        <>
          <ul>
            {state.products.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ProductReducer;