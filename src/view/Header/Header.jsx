import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2a9d8f;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
`;

const CartLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  background: rgba(0,0,0,0.1);
  transition: background 0.3s;

  &:hover {
    background: rgba(0,0,0,0.2);
  }
`;

const Header = ({ cartCount }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Minha Loja</Logo>
        <nav>
          <CartLink href="/cart">
            Carrinho ({cartCount})
          </CartLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;