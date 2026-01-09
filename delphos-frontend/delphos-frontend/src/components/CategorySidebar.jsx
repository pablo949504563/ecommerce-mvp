import React from 'react';
import { 
  Smartphone, 
  Laptop, 
  Watch, 
  Headphones, 
  Gamepad2, 
  Tv, 
  Cpu, 
  Zap 
} from 'lucide-react';

const CategorySidebar = () => {
  // Dados estáticos que simulam o que viria do seu banco futuramente
  const categories = [
    { id: 1, name: 'Eletrônicos', icon: <Smartphone size={18} /> },
    { id: 2, name: 'Informática', icon: <Laptop size={18} /> },
    { id: 3, name: 'Acessórios', icon: <Watch size={18} /> },
    { id: 4, name: 'Áudio', icon: <Headphones size={18} /> },
    { id: 5, name: 'Games', icon: <Gamepad2 size={18} /> },
    { id: 6, name: 'TV e Vídeo', icon: <Tv size={18} /> },
    { id: 7, name: 'Componentes', icon: <Cpu size={18} /> },
  ];

  return (
    <aside className="w-64 hidden lg:block bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-fit sticky top-20">
      <h2 className="text-gray-900 font-bold mb-6 flex items-center gap-2 text-lg">
        <Zap className="text-[#ff4747] fill-[#ff4747]" size={20} />
        Categorias
      </h2>

      <nav>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li 
              key={category.id} 
              className="group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all hover:bg-orange-50 hover:text-[#ff4747]"
            >
              <div className="text-gray-400 group-hover:text-[#ff4747] transition-colors">
                {category.icon}
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-[#ff4747]">
                {category.name}
              </span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs">›</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Banner de Promoção Interno da Sidebar */}
      <div className="mt-8 p-4 bg-gradient-to-br from-orange-100 to-red-50 rounded-xl border border-orange-200">
        <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mb-1">Oferta do Dia</p>
        <p className="text-xs font-semibold text-gray-800">Ganhe 10% OFF na primeira compra!</p>
      </div>
    </aside>
  );
};

export default CategorySidebar;