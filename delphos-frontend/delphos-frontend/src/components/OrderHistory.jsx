import React from 'react';

const OrderHistory = ({ orders }) => {
  if (!orders || orders.length === 0) return null;

  return (
    <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h2>📜 Meus Pedidos Anteriores</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {orders.map(order => (
          <div key={order.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong>Pedido #{order.id}</strong>
              <span style={{ color: '#666' }}>{new Date(order.orderDate).toLocaleString('pt-BR')}</span>
            </div>
            <div style={{ fontSize: '0.9em', color: '#555' }}>
              {order.items.length} item(ns) - 
              <strong style={{ color: '#27ae60' }}> Total: R$ {order.totalValue.toFixed(2)}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;