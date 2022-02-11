import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
          url: `http://127.0.0.1:8000/api/`,
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
          url: `http://127.0.0.1:8000/api/producto/${id}`,
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
          <div className="product-acc">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Características</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                { product.description }
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Materiales</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                { product.materials }
              </Typography>
            </AccordionDetails>
          </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
