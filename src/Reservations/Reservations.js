import React from 'react';
import './Reservations.css';
import Reservation from '../Reservation/Reservation';

const Reservations = ({ reservations }) => {
  const resys = reservations.map(resy => {
    return <Reservation 
      key={resy.id}
      name={resy.name}
      date={resy.date}
      time={resy.time}
      number={resy.number}
    />
  });

  return (
    <section className="resys-container">
      {resys}
    </section>
  )
}

export default Reservations;
