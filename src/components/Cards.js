import React from "react"
import PropTypes from 'prop-types';
import CardWrapper from "./CardsWrapper";

export default function Cards({ name, cardText, img }) {
  return (
    <CardWrapper title='Cats'>
      <img src={img}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{cardText}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </CardWrapper>
  )
}