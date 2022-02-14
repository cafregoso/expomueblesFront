import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";

import './Products.css'

export default function Products() {
  const id = useParams().id
  const [subcategories, setSubcategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://177.231.255.18/api/`).then((response) => {
      setCategories(response.data);
    });

    axios.get(`http://177.231.255.18/api/${id}`).then((response) => {
      setSubcategories(response.data);
    });
  }, [id]);

  function useBanner(category) {
    return category.id === parseInt(id);
  }

  const imageBanner = categories.find(useBanner);

  return (
    <Fragment>
      {imageBanner && <Banner img={imageBanner.image2} />}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
        }}
        className='products-section'
      >
        {subcategories.map(({ id, image1, name }) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
              display: "grid",
              placeItems: "center",
            }}
            to={`/producto/${id}`}
            key={ id }
          >
            <Card img={ image1 } name={ name } />
          </Link>
        ))}
      </section>
    </Fragment>
  );
}
