import React from 'react';
import './Reservations.css';

const Reservations = ({ reservations }) => {
  const reservations = reservations.map(resy => {
    return <Reservation 
      key={resy.id}
      name={resy.name}
      date={resy.date}
      time={resy.time}
      number={resy.number}
    />
  });

  return (
    <section>
      {reservations}
    </section>
  )
}

export default Reservations;
