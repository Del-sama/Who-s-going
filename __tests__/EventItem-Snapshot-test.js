import 'react-native';
import React from 'react';
import EventItem from '../src/components/EventItem';


import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <EventItem />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
