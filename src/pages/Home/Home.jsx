import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import Slide from "../../components/Slide/Slide";

import "./Home.css";

import banner1 from "../../banners/Proceso-creativo.webp";
import banner2 from "../../banners/Oficina.webp";
import banner3 from "../../banners/Restaurant.webp";
import Space from "../../components/Space/Space";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [space, setSpace] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url: "http://127.0.0.1:8000/api/",
        });

        setSpace(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [setSpace]);

  return (
    <Fragment>
      <Slide banner1={banner1} banner2={banner2} banner3={banner3} />
      {space.map(({ id, name, image, info, color }) => (
        <Space
          key={id}
          id={id}
          name={name}
          image={image}
          info={info}
          color={color}
        />
      ))}
      <Footer />
    </Fragment>
  );
}
