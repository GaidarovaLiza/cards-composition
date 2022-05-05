import React from "react"
import PropTypes from 'prop-types';
import CatWrapper from "./Cats";

export default function Cat({ name, cardText, img }) {
  return (
    <CatWrapper title='Cats'>
      <img src={img}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{cardText}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </CatWrapper>
  )
}