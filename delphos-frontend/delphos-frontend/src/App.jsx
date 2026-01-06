import { useEffect, useState } from 'react'
import axios from 'axios'

const API_BASE = 'http://localhost:8080/api/cart';

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [userId] = useState("cliente_demo_01")

  // 1. Carrega Vitrine e Carrinho ao iniciar
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  const fetchProducts = () => {
    axios.get('http://localhost:8080/api/products')
      .then(res => setProducts(res.data));
  }

  const fetchCart = () => {
    axios.get(`${API_BASE}/${userId}`)
      .then(res => setCartItems(res.data))
      .catch(err => console.error("Erro ao carregar carrinho", err));
  }

  const addToCart = (productId) => {
    axios.post(`${API_BASE}/${userId}/add`, { productId, quantity: 1 })
      .then(() => {
        alert("Adicionado!");
        fetchCart(); // Atualiza a lista do carrinho automaticamente
      });
  }

  const clearCart = () => {
    axios.delete(`${API_BASE}/${userId}`)
      .then(() => fetchCart());
  }

  return (
    <div style={{ display: 'flex', padding: '20px', gap: '20px', fontFamily: 'sans-serif' }}>
      
      {/* SEÇÃO DA VITRINE */}
      <div style={{ flex: 3 }}>
        <h1>🛒 Vitrine Delphos</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
              <h3>{p.name}</h3>
              <p>R$ {p.price.toFixed(2)}</p>
              <button onClick={() => addToCart(p.id)}>Adicionar</button>
            </div>
          ))}
        </div>
      </div>

      {/* SEÇÃO DO CARRINHO (RESUMO) */}
      <div style={{ flex: 1, backgroundColor: '#eee', padding: '20px', borderRadius: '8px', minHeight: '80vh' }}>
        <h2>Seu Carrinho</h2>
        {cartItems.length === 0 ? <p>Vazio...</p> : (
          <>
            {cartItems.map(item => (
              <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                <strong>{item.product.name}</strong>
                <p>Qtd: {item.quantity} - R$ {(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <h3 style={{ marginTop: '20px' }}>
              Total: R$ {cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0).toFixed(2)}
            </h3>
            <button onClick={clearCart} style={{ backgroundColor: 'red', color: 'white', width: '100%', padding: '10px' }}>
              Esvaziar Carrinho
            </button>
            <button style={{ backgroundColor: 'green', color: 'white', width: '100%', padding: '10px', marginTop: '10px' }}>
              Finalizar Pedido
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default App