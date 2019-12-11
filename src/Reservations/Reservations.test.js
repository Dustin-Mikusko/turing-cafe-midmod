import React from 'react';
import { shallow } from 'enzyme';
import Reservations from './Reservations';

describe('Reservations', () => {
  it('should render component with correct data to match snapshot', () => {
    let mockReservations = [
      {
        id: 1,
        name: 'Dustin',
        date: '7/13',
        time: '6:30',
        number: 4,
      }
    ]
    const wrapper = shallow(<Reservations reservations={mockReservations}  />);

    expect(wrapper).toMatchSnapshot();
  })
})
