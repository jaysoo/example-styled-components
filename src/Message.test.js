import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Message from './Message';

it('renders', () => {
  const component = renderer.create(
    <Message>
      Hello!
    </Message>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
