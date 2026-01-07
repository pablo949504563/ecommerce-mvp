import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '12px', 
      padding: '16px', 
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '40px' }}>📦</div> {/* Placeholder para imagem */}
      <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
      <p style={{ color: '#666', fontSize: '0.9em' }}>{product.description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#2c3e50' }}>
        R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </p>
      <button 
        onClick={() => onAddToCart(product.id)}
        style={{
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%'
        }}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;