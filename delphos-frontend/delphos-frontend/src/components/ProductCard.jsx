import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  // Simulação de preço antigo para gerar o efeito de "desconto" do AliExpress
  const oldPrice = (product.price * 1.3).toFixed(2);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-[#ff4747] flex flex-col">
      
      {/* Container da Imagem */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.imageUrl || 'https://via.placeholder.com/300'} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Selo Choice e Badge de Oferta */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <span className="bg-[#ff4747] text-white text-[10px] font-black px-2 py-0.5 rounded-sm shadow-sm">
            Choice
          </span>
          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm">
            -30%
          </span>
        </div>
      </div>

      {/* Informações do Produto */}
      <div className="p-3 flex flex-col flex-1">
        
        {/* Título com line-clamp (limita a 2 linhas) */}
        <h3 className="text-sm text-gray-700 leading-snug h-10 line-clamp-2 group-hover:text-[#ff4747] transition-colors">
          {product.name}
        </h3>

        {/* Avaliação e Vendas */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill={i < 4 ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-500">4.8</span>
          <span className="text-[10px] text-gray-400">| 500+ vendidos</span>
        </div>

        {/* Bloco de Preço */}
        <div className="mt-3">
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-[#ff4747]">R$</span>
            <span className="text-2xl font-black text-[#ff4747]">
              {product.price.toFixed(2).split('.')[0]}
            </span>
            <span className="text-sm font-bold text-[#ff4747]">
              ,{product.price.toFixed(2).split('.')[1]}
            </span>
          </div>
          <div className="text-[11px] text-gray-400 line-through">
            R$ {oldPrice}
          </div>
        </div>

        {/* Selo de Frete Grátis */}
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-100">
            Frete grátis
          </span>
        </div>

        {/* Botão de Adição Rápida */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Evita clicar no card ao clicar no botão
            onAddToCart(product.id);
          }}
          className="mt-4 w-full bg-[#1a1a1a] text-white py-2.5 rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#ff4747] transition-all active:scale-95"
        >
          <ShoppingCart size={14} />
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;