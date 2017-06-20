import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import App from './App';

it('renders', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});
