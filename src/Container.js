import styled from 'styled-components';
import Message from './Message'

const Container = styled.div`
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, sans-serif;

  ${Message} {
    margin: 3px;
  }
`;

export default Container;
