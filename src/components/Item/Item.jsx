import "./item.css";

import { ButtonChild } from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";
import {Link} from "react-router-dom"

function Item({ id, title, price, detail, imgurl }) {
  const urlDetail = `/detail/${id}`;
  return (
    <>
    <div className="item-card">
      <ToggleButton icon="♥" />
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_img">
        <img src={imgurl} alt="imagen"></img>
      </div>
      <div className="item-card_detail">
        <h4>$ {price}</h4>
        {/* <p>{detail}</p> */}
        <Link to={urlDetail}>
        <ButtonChild>Ver detalle</ButtonChild>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Item;
