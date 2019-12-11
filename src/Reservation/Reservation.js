import React from 'react';
import './Reservation.css'

const Reservation = ({ name, date, time, number}) => {
  return  (
    <article className="resy-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button type="button" className="cancel-btn">Cancel</button>
    </article>
  )
}


export default Reservation;
