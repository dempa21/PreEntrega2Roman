import React, { useState, useEffect } from "react";
import FlexWrapper from "../../components/flexWrapper/FlexWrapper";

import Item from "../../components/Item/Item";
import "./ItemListContainer.css";
import getItems from "../../services/mockAsyncService";

import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { idCategory } = useParams();


  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProductList(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);


  return (
    <>  
      {/* <ItemDetail */}
      <FlexWrapper>
      <div className="App-header">
      {productList.map((producto) => (
      <Item
      key = {producto.id}
      id = {producto.id}
      title = {producto.title}
      price = {producto.price}
      detail = {producto.description}
      category = {producto.category}
      imgurl = {producto.imgurl}
        />
      ))}
      </div>
      </FlexWrapper>
    </>
  );
 }

export default ItemListContainer;