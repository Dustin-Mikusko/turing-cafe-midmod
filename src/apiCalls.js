export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => {
      if (!res.ok) {
        throw Error('Error gathering reservations')
      }
      return res.json();
    })
};

export const addReservation = newReservation => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newReservation),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => {
      if (!res.ok) {
        throw Error('Error posting reservation')
      }
      return res.json();
    })
}

export const removeReservation = id => {
  const options = {
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
    .then(res => {
      if (!res.ok) {
        throw ('Error deleting reservation')
      }
      return res.json()
    })
}
