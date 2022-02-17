import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import Slide from "../../components/Slide/Slide";
import Space from "../../components/Space/Space";
import SpaceRight from "../../components/SpaceRight/SpaceRight";
import Footer from "../../components/Footer/Footer";

// Banners
import banner1 from "../../banners/Proceso-creativo.webp";
import banner2 from "../../banners/Oficina.webp";
import banner3 from "../../banners/Restaurant.webp";

import "./Home.css";

export default function Home() {
  const [space, setSpace] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url: "https://cafregoso.com/api/",
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
      {space.map(({ id, name, image, info, color }) => {
        if (id === 1) {
          return (
            <Space
              key={id}
              id={id}
              name={name}
              image={image}
              info={info}
              color={color}
            />
          );
        }
        if (id === 2) {
          return (
            <SpaceRight
              key={id}
              id={id}
              name={name}
              image={image}
              info={info}
              color={color}
            />
          );
        }
        if (id === 3) {
          return (
            <Space
              key={id}
              id={id}
              name={name}
              image={image}
              info={info}
              color={color}
            />
          );
        }
        return (
          <SpaceRight
            key={id}
            id={id}
            name={name}
            image={image}
            info={info}
            color={color}
          />
        );
      })}
      <Footer />
    </Fragment>
  );
}
