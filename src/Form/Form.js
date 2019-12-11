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
        name: '',
        date: '',
        time: '',
        guests: '',
      }
    }
  }


  render() {
    return (
      <form>
        <input name="name" type="text" placeholder="Name"></input>
        <input name="date" type="text" placeholder="Date (mm/dd)"></input>
        <input name="time" type="text" placeholder="Time (hh:mm am/pm)"></input>
        <input name="guests" type="number" placeholder="Number of Guests"></input>
        <button type="button" className="resy-btn">Make Reservation</button>
      </form>
    )
  }
}

export default Form;
