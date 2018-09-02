import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import EventItem from '../src/components/sharedComponents/EventItem';

it('renders correctly', () => {
  const tree = renderer.create(
    <EventItem />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
