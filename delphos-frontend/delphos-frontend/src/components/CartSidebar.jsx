import React from 'react';
import { Trash2, ShoppingBag, X } from 'lucide-react';

const CartSidebar = ({ items = [], onClear, onCheckout, onClose }) => {
  
  const subtotal = items.reduce((acc, item) => {
    const preco = item?.product?.price || 0;
    const quantidade = item?.quantity || 1;
    return acc + (preco * quantidade);
  }, 0);

  const freight = subtotal > 99 || items.length === 0 ? 0 : 15.00;
  const total = subtotal + freight;

  return (
    <>
      {/* 1. Overlay (Fundo Escuro) */}
      <div 
        className="fixed inset-0 bg-black/50 z-[100] transition-opacity animate-in fade-in duration-300" 
        onClick={onClose}
      />

      {/* 2. Gaveta Lateral (Drawer) */}
      <div className="fixed right-0 top-0 w-80 bg-white shadow-2xl flex flex-col h-screen z-[101] animate-in slide-in-from-right duration-300">
        
        {/* Cabeçalho */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#ff4747]" />
            <h2 className="font-bold text-gray-800">Meu Carrinho</h2>
            <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold">
              {items.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button onClick={onClear} className="text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
            )}
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="flex gap-3 pb-4 border-b border-gray-50 last:border-0">
                <img 
                  // CORREÇÃO: Busca a imagem dentro de product.imageUrl
                  src={item?.product?.imageUrl || 'https://placehold.co/60x60?text=Item'} 
                  alt={item?.product?.name} 
                  className="w-16 h-16 object-cover rounded-lg border border-gray-100"
                />
                <div className="flex-1">
                  <h4 className="text-xs text-gray-700 line-clamp-2 leading-tight font-medium">
                    {item?.product?.name || 'Produto'}
                  </h4>
                  <div className="mt-1 flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400">Qtd: {item.quantity}</span>
                      <span className="text-sm font-bold text-gray-900">
                        {}
                        R$ {Number(item?.product?.price || 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 opacity-40">
              <ShoppingBag size={48} />
              <p className="text-sm font-medium">Seu carrinho está vazio</p>
            </div>
          )}
        </div>

        {/* Resumo de Valores */}
        <div className="p-5 bg-gray-50 border-t border-gray-200 space-y-3">
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span>Frete</span>
            <span className={freight === 0 ? "text-green-600 font-bold" : ""}>
              {freight === 0 ? "Grátis" : `R$ ${freight.toFixed(2)}`}
            </span>
          </div>

          <div className="pt-3 border-t border-gray-300 flex justify-between items-center">
            <span className="font-bold text-gray-800">Total</span>
            <div className="text-right">
              <span className="text-2xl font-black text-[#ff4747]">
                R$ {total.toFixed(2)}
              </span>
            </div>
          </div>

          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className={`w-full py-4 rounded-full font-bold text-sm transition-all active:scale-95 ${
              items.length > 0 ? "bg-[#ff4747] text-white shadow-lg shadow-red-200" : "bg-gray-300 text-gray-500"
            }`}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;