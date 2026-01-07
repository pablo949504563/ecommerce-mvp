import React from 'react';

const CartSidebar = ({ items, onClear, onCheckout }) => {
  const total = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <div style={{ 
      width: '350px', 
      backgroundColor: '#f9f9f9', 
      padding: '20px', 
      borderLeft: '2px solid #eee',
      height: '100vh',
      position: 'sticky',
      top: 0
    }}>
      <h2>🛒 Seu Carrinho</h2>
      <hr />

      {items.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>Seu carrinho está vazio.</p>
      ) : (
        <>
          <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            {items.map(item => (
              <div key={item.id} style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #ddd' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>{item.product.name}</strong>
                  <span>x{item.quantity}</span>
                </div>
                <div style={{ fontSize: '0.9em', color: '#555' }}>
                  Subtotal: R$ {(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <button 
              onClick={onCheckout}
              style={{
                backgroundColor: '#27ae60',
                color: 'white',
                border: 'none',
                width: '100%',
                padding: '12px',
                borderRadius: '5px',
                marginBottom: '10px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
              Finalizar Pedido
            </button>
            <button 
              onClick={onClear}
              style={{
                backgroundColor: 'transparent',
                color: '#e74c3c',
                border: '1px solid #e74c3c',
                width: '100%',
                padding: '8px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
              Esvaziar Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;