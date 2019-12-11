import React, { Component } from 'react';
import './App.css';
import { getReservations, addReservation, removeReservation } from '../apiCalls';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getReservations()
      .then(reservations => this.setState({ reservations }))
      .catch(err => this.setState({error: err.message}))
  }

  sendReservation = (newReservation) => {
    console.log(newReservation);
    addReservation(newReservation)
      .then(data => this.setState({ reservations: [...this.state.reservations, data]}))
      .catch(err => this.setState({ error: err.message }))
  }

  deleteReservation = (e) => {
    const id = e.target.id;
    removeReservation(id)
      .then(reservations => this.setState({ ...reservations }))
  }
 
  

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form 
            sendReservation={this.sendReservation}
          />
        </div>
        <div className='resy-container'>
          <Reservations 
            deleteReservation={this.deleteReservation}
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
