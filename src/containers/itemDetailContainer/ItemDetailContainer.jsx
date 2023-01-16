import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAsyncService";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  // const paramsUrl = useParams();
  // const id = paramsUrl.id;
  const { id } = useParams();
  console.log(useParams()); // destructuring

  // onAddtoCart
  function handleAddToCart() {
    alert(`Agregaste x ${product.title} al carrito`);
  }

  // useEffect(() => {
  //   getSingleItem(id).then((respuesta) => {
  //     setProduct(respuesta);
  //   });
  // }, []);

  async function getItemsAsync() {
    let respuesta = await getSingleItem(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <>{<ItemDetail product={product} />};</>;
};

export default ItemDetailContainer;
