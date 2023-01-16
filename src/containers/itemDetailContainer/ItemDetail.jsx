import Button, { ButtonChild } from "../../components/button/Button";
import "./ItemDetail.css";
import ItemCount from "../../components/itemCount/ItemCount";
import {Link} from "react-router-dom"

// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

function ItemDetail({ product }) {

  const urlCart = `/cart`;

  return (
    <div className="detail">
      <Card style={{ width: "24rem" }}>
        <Card.Img variant="top" src={product.imgurl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <ItemCount />
          <Card.Text>Precio: ${product.price}</Card.Text>
          <Link to={urlCart}>
          <ButtonChild>Ir al carrito</ButtonChild>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
