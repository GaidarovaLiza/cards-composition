import React from "react"
import PropTypes from 'prop-types';
import Cats from "./Cats";

export default function CatsWrapper({ name, cardText, img }) {
  return (
    <Cats title='Cats'>
      <img src={img}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{cardText}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </Cats>
  )
}