import React from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-[90]">
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between gap-8">
        
        {/* Logo Estilo AliExpress */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#ff4747] text-white p-1.5 rounded-lg font-black italic text-xl">
            D
          </div>
          <span className="text-2xl font-bold tracking-tighter text-gray-900">
            DELPHOS<span className="text-[#ff4747]">express</span>
          </span>
        </div>

        {/* Barra de Busca Central */}
        <div className="flex-1 max-w-2xl relative">
          <input 
            type="text" 
            placeholder="Encontre computadores, microfones e mais..." 
            className="w-full bg-gray-100 border-2 border-transparent focus:border-[#ff4747] rounded-full py-2 px-6 outline-none transition-all"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ff4747] text-white p-1.5 rounded-full hover:bg-[#e63939]">
            <Search size={18} />
          </button>
        </div>

        {/* Ações do Usuário */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer group">
            <User size={24} className="text-gray-700 group-hover:text-[#ff4747]" />
            <div className="hidden lg:block text-xs">
              <p className="text-gray-500">Bem-vindo</p>
              <p className="font-bold">Minha Conta</p>
            </div>
          </div>

          {/* Botão do Carrinho que abre a Gaveta */}
          <button 
            onClick={onCartClick}
            className="flex items-center gap-2 relative group p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="relative">
              <ShoppingCart size={28} className="text-gray-700 group-hover:text-[#ff4747]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff4747] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="hidden lg:block text-left leading-none">
              <p className="text-[10px] text-gray-500">Carrinho</p>
              <p className="font-bold text-sm">R$ Total</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;