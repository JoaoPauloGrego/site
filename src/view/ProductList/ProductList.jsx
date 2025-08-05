import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 15px;
  border-radius: 4px;
`;

const ProductTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
  text-align: center;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #2a9d8f;
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

const AddButton = styled.button`
  background-color: #2a9d8f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  margin-bottom: 5px;
  width: 100%;
  
  &:hover {
    background-color: #21867a;
  }
`;

const DetailsButton = styled(AddButton)`
  background-color: #e0e0e0;
  color: #333;

  &:hover {
    background-color: #d0d0d0;
  }
`;

const Item = ({ id, onAddToCart, image, name, price }) => {
  return (
    <ProductCard>
      <ProductImage 
        src={image} 
        alt={name} 
      />
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>R$ {price.toFixed(2)}</ProductPrice>
      
      <AddButton onClick={onAddToCart}>
        Adicionar ao Carrinho
      </AddButton>
      
      <Link to={`/product/${id}`}>
        <DetailsButton>Detalhes</DetailsButton>
      </Link>
    </ProductCard>
  );
};

export default Item;