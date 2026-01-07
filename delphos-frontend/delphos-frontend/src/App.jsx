import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import CartSidebar from './components/CartSidebar'
import OrderHistory from './components/OrderHistory'

const API_CART = 'http://localhost:8080/cart';
const API_ORDERS = 'http://localhost:8080/orders';

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [userId] = useState("cliente_demo_01")
  const [orders, setOrders] = useState([])

  // Carrega Vitrine e Carrinho ao iniciar
  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchOrders();
  }, [])
  //função para buscar os pedidos
  const fetchOrders = () => {
  axios.get(`${API_ORDERS}/user/${userId}`)
    .then(res => setOrders(res.data))
    .catch(err => console.error("Erro ao carregar histórico", err));
  }
  const fetchProducts = () => {
    axios.get('http://localhost:8080/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Erro ao carregar produtos", err));
  }

  const fetchCart = () => {
    axios.get(`${API_CART}/${userId}`)
      .then(res => setCartItems(res.data))
      .catch(err => console.error("Erro ao carregar carrinho", err));
  }

  const addToCart = (productId) => {
    axios.post(`${API_CART}/${userId}/add`, { productId, quantity: 1 })
      .then(() => {
        fetchCart(); 
      })
      .catch(err => alert("Erro ao adicionar produto"));
  }

  const clearCart = () => {
    axios.delete(`${API_CART}/${userId}`)
      .then(() => fetchCart())
      .catch(err => console.error("Erro ao limpar carrinho", err));
  }

  const finishOrder = () => {
    // AJUSTE OPÇÃO 2: Rota batendo com @PostMapping("/checkout/{userId}") do seu Java
    axios.post(`${API_ORDERS}/checkout/${userId}`)
      .then(res => {
        alert(`Pedido #${res.data.id} realizado com sucesso!`);
        fetchCart(); // Atualiza a tela (ficará vazio pois o backend limpou tb_cart_items)
        fetchOrders(); // Atualiza o histórico de pedidos
      })
      .catch(err => {
        console.error(err);
        alert("Erro ao finalizar pedido. Verifique se o carrinho não está vazio no banco.");
      });
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f7f6' }}>
      
      {/* Coluna Principal: Vitrine + Histórico */}
      <div style={{ flex: 1, padding: '40px' }}>
        <h1 style={{ marginBottom: '30px', color: '#2c3e50' }}>🛒 Vitrine Delphos</h1>
        
        {/* Grid de Produtos */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '25px' 
        }}>
          {products.length > 0 ? (
            products.map(p => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onAddToCart={addToCart} 
              />
            ))
          ) : (
            <p>Carregando produtos ou vitrine vazia...</p>
          )}
        </div>

        {/* Linha Divisora opcional */}
        <hr style={{ margin: '50px 0', border: '0', borderTop: '1px solid #ddd' }} />

        {/* NOVO: Seção de Histórico de Pedidos */}
        <OrderHistory orders={orders} />
      </div>

      {/* Barra Lateral do Carrinho fixa na direita */}
      <CartSidebar 
        items={cartItems} 
        onClear={clearCart} 
        onCheckout={finishOrder} 
      />

    </div>
  )
}

export default App