import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGif } from "../hooks/useFetchGif";
// import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGif( category );
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then(setList);
  // }, [category]);

  return (
    <>
    { loading && 'Cargando..' }
    
      <h3>{category}</h3>
      <div className="card-grid">
        {data.map((element) => (
          <GifGridItem key={element.id} {...element} />
        ))}
      </div>
    </>
  );
};
