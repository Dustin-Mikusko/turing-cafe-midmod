import React from 'react';
import './Reservation.css'

const Reservation = ({ id, name, date, time, number, deleteReservation }) => {
  return  (
    <article className="resy-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button id={id} onClick={deleteReservation} type="button" className="cancel-btn">Cancel</button>
    </article>
  )
}


export default Reservation;
