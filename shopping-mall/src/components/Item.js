import { Col } from "react-bootstrap";
import { Link, Routes, Route } from 'react-router-dom';
import React from "react";
import '../App.css';

function Item(props) {
    return (
      <>
        <Col className="item-card" width="30%">
          <Link to={`/detail/${props.shoes.id}`}
          className="item">
          <img src={"https://codingapple1.github.io/shop/shoes"+ props.number +".jpg"} alt="shoes" width="80%"/>
          <h4> {props.shoes.title} </h4>
          <p> {props.shoes.price} </p>
          {/* <p> {props.shoes.content} </p> */}
          </Link>
        </Col>
      </>
    )
}

export default Item;