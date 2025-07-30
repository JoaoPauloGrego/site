import React from 'react';
import styled from 'styled-components'
import Card from './view/card';
import { GlobalStyle } from './styles/StyledComponents';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;

  @media(min-width:768px){
  flex-direction: row;
  justify-content: center;
  gap: 40px  
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <h1 style={{textAlign: 'center', marginBottom: '40px' }}>Página</h1>

      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
    </>
  );
}

export default App;
