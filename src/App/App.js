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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations 
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
