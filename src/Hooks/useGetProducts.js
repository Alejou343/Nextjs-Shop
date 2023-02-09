import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios(API); //Se modificó para solucionar el error (TypeError: Destroy isn't a function)
      setProducts(response.data);
    })();
  }, [API]);

  return products;
};

export default useGetProducts;
