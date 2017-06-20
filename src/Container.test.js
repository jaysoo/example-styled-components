import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Container from './Container';

test('normal', () => {
  const component = renderer.create(
    <Container>
      Hello
    </Container>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

test('bold', () => {
  const component = renderer.create(
    <Container bold>
      Hello
    </Container>
  )
const tree = component.toJSON()
expect(tree).toMatchSnapshot()
});
