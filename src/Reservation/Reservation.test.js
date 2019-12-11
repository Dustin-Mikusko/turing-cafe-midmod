import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('Reservation',() => {
  it('should redner correct info matching the snapshot', () => {
    const wrapper = shallow(<Reservation />);

    expect(wrapper).toMatchSnapshot();
  })
})
