import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: '',
      error: {
        name: false,
        date: false,
        time: false,
        guests: false,
      }
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  checkInputs = () => {
    const errorProperty = this.state.error;
    Object.keys(errorProperty).forEach(key => {
      if (!this.state[key]) {
        errorProperty[key] = true;
        this.setState({ error: errorProperty });
      } else {
        errorProperty[key] = false;
        this.setState({ error: errorProperty})
      }
    });
    this.checkReady()
  }

  checkReady = () => {
    return !this.state.error.name && !this.state.error.date && !this.state.error.time && !this.state.error.guests ? this.submitReservation() : null;
  }

  submitReservation = newReservation => {
    const { sendReservation } = this.props;
    const reservation = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: Number(this.state.guests)
    };
    sendReservation(reservation);
  }




  render() {
    const nameErrorClass = this.state.error.name ? 'error' : '';
    const dateErrorClass = this.state.error.date ? 'error' : '';
    const timeErrorClass = this.state.error.time ? 'error' : '';
    const guestsErrorClass = this.state.error.guests ? 'error' : '';
    return (
      <form>
        <input className={nameErrorClass} onChange={this.handleChange} value={this.state.name} name="name" type="text" placeholder="Name"></input>
        <input className={dateErrorClass} onChange={this.handleChange} value={this.state.date} name="date" type="text" placeholder="Date (mm/dd)"></input>
        <input className={timeErrorClass} onChange={this.handleChange} value={this.state.time} name="time" type="text" placeholder="Time (hh:mm am/pm)"></input>
        <input className={guestsErrorClass} onChange={this.handleChange} value={this.state.guests} name="guests" type="number" placeholder="Number of Guests"></input>
        <button onClick={this.checkInputs}type="button" className="resy-btn">Make Reservation</button>
      </form>
    )
  }
}

export default Form;
