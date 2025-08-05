import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 20px;
`;

const BackButton = styled.button`
  background: #f0f0f0;
  border: none;
  padding: 10px 15px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #2a9d8f;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 30px;
`;

const AddButton = styled.button`
  background-color: #2a9d8f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.3s;
  
  &:hover {
    background-color: #21867a;
  }
`;

const ProductDetails = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <DetailContainer>
        <h2>Produto não encontrado</h2>
        <BackButton onClick={() => navigate(-1)}>
          &larr; Voltar
        </BackButton>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate(-1)}>
        &larr; Voltar para produtos
      </BackButton>
      
      <ProductDetail>
        <ProductImage 
          src={product.image} 
          alt={product.name} 
        />
        
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
          
          <Description>
            {product.description}
          </Description>
          
          <AddButton onClick={() => {
            onAddToCart();
          }}>
            Adicionar ao Carrinho
          </AddButton>
        </ProductInfo>
      </ProductDetail>
    </DetailContainer>
  );
};

export default ProductDetails;