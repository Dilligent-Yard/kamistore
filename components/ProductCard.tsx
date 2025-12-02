import React from 'react';
import { Product } from '../types';
import { UI_TEXT } from '../constants';
import { ChevronRight, AlertCircle, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
  onAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index, onAdd }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const isSharedAccount = product.id === 'xbox_gpu_account' || product.id === 'youtube_premium_family';

  return (
    <div className="group bg-[#050505] hover:bg-neutral-900/10 transition-colors duration-300 flex flex-col h-[500px] relative overflow-hidden">
      
      {/* Hover Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-start p-8 relative z-10">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">
             0{index + 1} // {product.protocol.toUpperCase()}
          </span>
          <h3 className="text-3xl font-light text-white tracking-tight leading-none uppercase">
            {product.name}
          </h3>
        </div>
        <div className="flex flex-col items-end gap-1">
           <div className={`w-1.5 h-1.5 ${isSharedAccount ? 'bg-amber-500' : 'bg-emerald-500'} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full px-8">
        <div className="w-full h-px bg-neutral-900 group-hover:bg-neutral-800 transition-colors"></div>
      </div>

      {/* Body */}
      <div className="flex-grow p-8 flex flex-col gap-4 relative z-10">
        <div className="flex items-center gap-2">
           <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest border border-neutral-800 px-2 py-1">
             {UI_TEXT.digitalAsset}
           </span>
           {isSharedAccount && (
            <span className="text-[9px] font-mono text-amber-500/80 uppercase tracking-widest border border-amber-900/30 bg-amber-900/10 px-2 py-1 flex items-center gap-1">
              <AlertCircle size={10} /> Compartilhada
            </span>
           )}
        </div>

        {isSharedAccount ? (
          <div className="mt-2 space-y-3">
            <p className="text-xs text-neutral-400 font-mono leading-relaxed opacity-80">
              Ponto de acesso compartilhado. Lógica de distribuição automatizada.
            </p>
            <div className="flex items-center gap-2 text-neutral-600 text-[9px] font-mono uppercase">
               <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
               <span>Garantia Não-Permanente</span>
            </div>
          </div>
        ) : (
          <div className="mt-2">
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
              {product.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-emerald-900/60 text-[9px] font-mono uppercase group-hover:text-emerald-500/50 transition-colors">
               <ShieldCheck size={10} />
               <span>Chave Verificada</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer / Action */}
      <div className="mt-auto p-8 pt-0 z-20">
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] text-neutral-600 mb-1 uppercase tracking-wider">Preço Unitário</span>
            <div className="flex items-baseline gap-1">
               <span className="text-xs text-neutral-500 font-mono">BRL</span>
               <span className="text-2xl text-white font-mono tracking-tighter">{formatPrice(product.price)}</span>
            </div>
          </div>

          <button 
            onClick={() => onAdd(product)}
            className="group/btn relative overflow-hidden bg-transparent hover:bg-white text-white hover:text-black transition-all duration-300 h-10 px-6 flex items-center gap-3 border border-neutral-700 hover:border-white"
          >
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase relative z-10 font-bold">{UI_TEXT.addToCart}</span>
            <ChevronRight size={12} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>

    </div>
  );
};
