import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import './ProductDetail.css'

export default function ProductDetail() {
  const id = useParams().id;
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Axios({
          url: `https://cafregoso.com/api/`,
        });

        setCategory(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();

    const fetchData = async () => {
      try {
        const response = await Axios({
          url: `https://cafregoso.com/api/producto/${id}`,
        });

        setProduct(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  const cat = product.category

  function getCategory(producto) {
    return producto.id === cat[0].id
  }

  let getBanner
  if(cat) {
    getBanner = category.find(getCategory)
  }

  let imgBanner
  if(getBanner) {
    imgBanner = getBanner.image2
  }

  return (
    <Fragment>
      <Banner img={ imgBanner } />
      <section className="product-container">
        <div className="product-container_img">
          <img src={ product.image } alt={ product.name } />
        </div>
        <div className="product-container_acc">
          <div className="product-title">
            <h1>{ product.name }</h1>
          </div>
          <div className="product-info">
            <div>
              <h3>Características</h3>
              <p>
                { product.description }
              </p>
            </div>
            <div className="product-colors">
              <h3>Colores</h3>
              <p>
                { product.materials }
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
