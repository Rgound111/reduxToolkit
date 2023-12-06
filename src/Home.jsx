import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './redux';
import './Home.css'

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((output) => output.product.productData);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      let data = response.data;
      dispatch(addProduct(data));
      setDataFetched(true);
    } catch (error) {
      console.error(error, "error");
    }
  };

  return (
    <div style={{ margin: "3rem" }} className=''>
      <button onClick={fetchData}>Get Data</button><br />
      {dataFetched ? (
        <div >
          <ul>
            {products.map((product) => (
              <>
              <div className='Main_container '>
              <div key={product.id} className='sub_container'>
                <img src={product.image} alt=""  className='Image'/>
                <li>{product.title}</li>
                <span>${product.price}</span>           
              </div>
              </div>
              </>
            ))}
          </ul>
        </div>
      ) : (
        <p>Click "Get Data" to load products.</p>
      )}
    </div>
  );
};

export default Home;
