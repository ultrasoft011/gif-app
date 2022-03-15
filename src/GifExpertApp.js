import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
  //   const categorias = ["One punch", "Samuria X", "Dragon Ball"];
  const [categorias, setCategorias] = useState(["One punch"]);

  //   const handleAddClick = () => {
  //     setCategorias([...categorias, "New Category"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory props={setCategorias} />
      <ol>
        {categorias.map((element) => (
          <GifGrid category={element} key={element} />
        ))}
      </ol>
    </>
  );
}
