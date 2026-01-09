import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header' 
import CategorySidebar from './components/CategorySidebar';
import ProductCard from './components/ProductCard'
import CartSidebar from './components/CartSidebar'
import OrderHistory from './components/OrderHistory'

const API_CART = 'http://localhost:8080/cart';
const API_ORDERS = 'http://localhost:8080/orders';
const API_PRODUCTS = 'http://localhost:8080/products';

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [userId] = useState("cliente_demo_01")
  const [orders, setOrders] = useState([])
  
  // NOVO: Estado para controlar a visibilidade do carrinho estilo AliExpress
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchOrders();
  }, [])

  const fetchOrders = () => {
    axios.get(`${API_ORDERS}/user/${userId}`)
      .then(res => setOrders(res.data))
      .catch(err => console.error("Erro ao carregar histórico", err));
  }

  const fetchProducts = () => {
    axios.get(API_PRODUCTS)
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
        // NOVO: Abre o carrinho automaticamente ao adicionar item
        setIsCartOpen(true); 
      })
      .catch(err => alert("Erro ao adicionar produto"));
  }

  const clearCart = () => {
    axios.delete(`${API_CART}/${userId}`)
      .then(() => fetchCart())
      .catch(err => console.error("Erro ao limpar carrinho", err));
  }

  const finishOrder = () => {
    axios.post(`${API_ORDERS}/checkout/${userId}`)
      .then(res => {
        alert(`Pedido #${res.data.id} realizado com sucesso!`);
        fetchCart();
        fetchOrders();
        setIsCartOpen(false); // Fecha o carrinho após finalizar
      })
      .catch(err => alert("Erro ao finalizar pedido."));
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2] font-sans relative overflow-x-hidden">
      {/* Header: Passamos a função de abrir o carrinho ao clicar no ícone */}
      <Header 
        cartCount={cartItems.length} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      <main className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6">
        <CategorySidebar />

        <div className="flex-1 flex flex-col gap-8">
          {/* Banner Promo */}
          <div className="w-full h-48 bg-gradient-to-r from-[#ff4747] to-[#ff8a5c] rounded-2xl flex items-center px-12 text-white shadow-lg overflow-hidden relative">
            <div className="z-10">
              <h2 className="text-4xl font-black italic uppercase leading-none">Super Deals</h2>
              <p className="text-lg opacity-90 mt-2">Tecnologia com até 60% OFF</p>
            </div>
            <div className="absolute right-[-5%] top-[-20%] w-64 h-64 bg-white opacity-10 rounded-full"></div>
          </div>

          {/* Vitrine */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🔥 Recomendados para Você
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map(p => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>
          </section>

          {/* Histórico */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
            <OrderHistory orders={orders} />
          </section>
        </div>
      </main>

      {/* MODIFICAÇÃO: Renderização condicional do Carrinho (Overlay) */}
      {isCartOpen && (
        <CartSidebar 
          items={cartItems} 
          onClear={clearCart} 
          onCheckout={finishOrder} 
          onClose={() => setIsCartOpen(false)} 
        />
      )}
    </div>
  )
}

export default App