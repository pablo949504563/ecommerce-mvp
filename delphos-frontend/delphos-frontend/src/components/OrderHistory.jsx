import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>📜 Meus Pedidos Anteriores</h2>
      {orders.length === 0 ? (
        <p>Você ainda não realizou pedidos.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {orders.map((order) => (
            <div key={order.id} style={cardStyle}>
              <div style={headerStyle}>
                <strong>Pedido #{order.id}</strong>
                <span style={dateStyle}>{new Date(order.orderDate).toLocaleString()}</span>
              </div>
              
              {/* Lista de Itens do Pedido */}
              <div style={itemsListStyle}>
                {order.items.map((item, index) => (
                  <div key={index} style={itemRowStyle}>
                    <span>{item.quantity}x Produto ID: {item.productId}</span>
                    <span>R$ {item.priceAtPurchase.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div style={footerStyle}>
                <strong>Total: <span style={{ color: '#27ae60' }}>R$ {order.totalValue.toFixed(2)}</span></strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Estilos rápidos para organizar a visualização
const cardStyle = { backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' };
const headerStyle = { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' };
const itemsListStyle = { padding: '10px 0', fontSize: '0.9em', color: '#7f8c8d' };
const itemRowStyle = { display: 'flex', justifyContent: 'space-between', marginBottom: '5px' };
const dateStyle = { fontSize: '0.85em', color: '#95a5a6' };
const footerStyle = { textAlign: 'right', borderTop: '1px solid #eee', paddingTop: '10px' };

export default OrderHistory;