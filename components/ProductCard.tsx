import React from 'react';
import { Product, Language } from '../types';
import { UI_TEXT } from '../constants';
import { Plus, Disc } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  lang: Language;
  index: number;
  onAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, lang, index, onAdd }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="group relative border border-neutral-900 bg-neutral-950/30 hover:bg-neutral-900/50 transition-colors duration-500 flex flex-col h-[400px]">
      
      {/* Top Technical Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-900">
        <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
          ID: {product.id.toUpperCase()}
        </span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-900 group-hover:bg-green-500 transition-colors duration-500"></div>
          <span className="font-mono text-[9px] text-neutral-500 uppercase">ONLINE</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
        
        {/* Decorative background element */}
        <span className="absolute -right-4 -bottom-10 text-[120px] font-bold text-neutral-900/20 pointer-events-none select-none font-mono">
          0{index + 1}
        </span>

        <div className="relative z-10">
          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-[0.2em] mb-2 block">
            {UI_TEXT.digitalAsset[lang]} // {product.protocol === 'tinder' ? UI_TEXT.tinderLabel[lang] : UI_TEXT.spotifyLabel[lang]}
          </span>
          
          <h3 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            {product.name[lang]}
          </h3>
          
          <div className="flex items-center gap-2 text-neutral-500">
             <Disc size={12} className="animate-spin-slow" />
             <p className="text-[10px] font-mono uppercase tracking-widest">
              {product.description[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-auto border-t border-neutral-900 p-6 flex items-center justify-between group-hover:border-neutral-800 transition-colors">
        <div className="flex flex-col">
          <span className="font-mono text-[9px] text-neutral-600 mb-1">VAL.</span>
          <span className="text-xl text-white font-mono tracking-tighter">
            {formatPrice(product.price)}
          </span>
        </div>
        
        <button 
          onClick={() => onAdd(product)}
          className="relative px-6 py-2 overflow-hidden border border-neutral-800 text-white text-[10px] font-mono tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          <span className="relative z-10">{UI_TEXT.addToCart[lang]}</span>
        </button>
      </div>
    </div>
  );
};
