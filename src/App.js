// src/App.js
import React from 'react';
import styled from 'styled-components';
import Item from './view/ProductList/ProductList';
import Header from './view/Header/Header';
import { GlobalStyle } from './styles/StyledComponents';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  gap: 30px;

  @media(min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
`;

const products = [
  {
    id: 1,
    name: "Camisa Social",
    price: 99.90,
    image: ""
  },
  {
    id: 2,
    name: "Camisa Regata",
    price: 99.00,
    image: ""
  },
  {
    id: 3,
    name: "Blusa",
    price: 99.90,
    image: ""
  },
  {
    id: 4,
    name: "Calça",
    price: 99.50,
    image: ""
  }
];

function App() {
  const [cartItems, setCartItems] = React.useState(0);
  
  return (
    <>
      <GlobalStyle />
      <Header cartCount={cartItems} />
      
      <MainContent>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Produtos em Destaque</h2>
        
        <Container>
          {products.map(product => (
            <Item 
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={() => setCartItems(c => c + 1)}
            />
          ))}
        </Container>
      </MainContent>
    </>
  );
}

export default App;