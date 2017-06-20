import React from 'react';
import styled from 'styled-components';
import Message from './Message';
import Container from './Container';

const App = () => (
  <Container>
    <Message className="foo">
      Hello
    </Message>
    <Message className="bar" color="rebeccapurple">
      World!
    </Message>
  </Container>
);

export default App;
