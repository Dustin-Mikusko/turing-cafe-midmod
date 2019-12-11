import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('should render component with correct data and match snapshot', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const wrapper = shallow(<Form />);
    const mockEvent = { target: {name: 'name', value: 'Dustin'} };
    const expected = 'Dustin';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should update error state if any input is empty when make reservation button is clicked', () => {
    const wrapper = shallow(<Form />);
    const mockState = {
      name: 'Dustin',
      date: '7/13',
      time: '',
      guests: 4,
      error: {
        name: false,
        date: false,
        time: false,
        guests: false,
      }
    };
    const expected = {
      name: false,
      date: false,
      time: true,
      guests: false,
    }

    wrapper.setState(mockState);
    
    wrapper.find('button').simulate('click');

    expect(wrapper.state('error')).toEqual(expected);
  })
})

