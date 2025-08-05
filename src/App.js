import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Item from './view/ProductList/ProductList';
import Header from './view/Header/Header';
import ProductDetails from './view/ProductDetails/ProductDetails';
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
    image: "/images/camisa-social.jpg",
    description: "Camisa social 100% algodão, ideal para ocasiões formais."
  },
  {
    id: 2,
    name: "Camisa Regata",
    price: 99.00,
    image: "/images/camisa-regata.jpg",
    description: "Camisa regata leve e confortável para dias quentes."
  },
  {
    id: 3,
    name: "Blusa",
    price: 99.90,
    image: "/images/blusa.jpg",
    description: "Blusa de frio com tecido de alta qualidade."
  },
  {
    id: 4,
    name: "Calça",
    price: 99.50,
    image: "/images/calca.jpg",
    description: "Calça jeans moderna com corte ajustado."
  }
];

function App() {
  const [cartItems, setCartItems] = React.useState(0);
  
  const handleAddToCart = () => {
    setCartItems(c => c + 1);
  };
  
  return (
    <Router>
      <GlobalStyle />
      <Header cartCount={cartItems} />
      
      <MainContent>
        <Routes>
          <Route path="/" element={
            <>
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Produtos em Destaque</h2>
              
              <Container>
                {products.map(product => (
                  <Item 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </Container>
            </>
          } />
          
          <Route 
            path="/product/:id" 
            element={
              <ProductDetails 
                products={products} 
                onAddToCart={handleAddToCart} 
              />
            } 
          />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;