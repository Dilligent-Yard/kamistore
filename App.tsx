import React, { useState } from 'react';
import { PRODUCTS, UI_TEXT } from './constants';
import { Product } from './types';
import { ProductCard } from './components/ProductCard';
import { Button } from './components/Button';
import { PaymentModal } from './components/PaymentModal';
import { AboutModal } from './components/AboutModal';
import { AboutPage } from './components/AboutPage';
import { DisclaimerModal } from './components/DisclaimerModal';
import { ShoppingBag, X, ArrowRight, CheckCircle, Info, Shield, Globe, Terminal, Activity } from 'lucide-react';

const App: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  
  // Payment State
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // About State
  const [showAbout, setShowAbout] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setShowDisclaimer(true);
  };

  const handleDisclaimerConfirm = () => {
    setShowDisclaimer(false);
    setShowPayment(true);
  };

  const handlePaymentConfirm = () => {
    setShowPayment(false);
    setCart([]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Full page overlays
  if (showAboutPage) {
    return <AboutPage onClose={() => setShowAboutPage(false)} />;
  }

  return (
    <div className="w-full flex justify-center p-0 md:p-8 min-h-screen box-border">
      
      {/* Main Layout Frame */}
      <div className="w-full max-w-[1600px] bg-[#050505] border border-neutral-900 shadow-2xl relative flex flex-col">
        
        {/* Decorative Corner Markers */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 z-50"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50 z-50"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50 z-50"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 z-50"></div>

        {/* Success Notification - Absolute Positioned within Frame */}
        <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 z-[70] transition-all duration-500 pointer-events-none ${showSuccess ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="bg-white text-black px-6 py-4 flex items-center gap-4 border border-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <CheckCircle size={18} className="text-emerald-600" />
            <div className="flex flex-col">
               <span className="text-[10px] font-mono uppercase tracking-widest font-bold">TRANSAÇÃO_CONFIRMADA</span>
               <span className="text-[10px] font-mono text-neutral-600">Ativos despachados na fila.</span>
            </div>
          </div>
        </div>

        {/* Modals */}
        <DisclaimerModal 
          isOpen={showDisclaimer}
          onClose={() => setShowDisclaimer(false)}
          onConfirm={handleDisclaimerConfirm}
        />

        <PaymentModal 
          isOpen={showPayment}
          onClose={() => setShowPayment(false)}
          onConfirm={handlePaymentConfirm}
          total={totalPrice}
          cart={cart}
        />

        <AboutModal 
          isOpen={showAbout}
          onClose={() => setShowAbout(false)}
        />

        {/* Navbar */}
        <header className="w-full h-16 border-b border-neutral-900 flex items-center justify-between px-6 md:px-8 bg-[#050505] sticky top-0 z-40 backdrop-blur-sm bg-opacity-95">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-white animate-pulse"></div>
            <div className="flex flex-col cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h1 className="text-sm font-bold tracking-[0.3em] uppercase leading-none">
                KĀMI<span className="text-neutral-600 group-hover:text-neutral-400 transition-colors">.SYS</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-8">
             <div className="hidden md:flex items-center gap-6">
                <button onClick={() => setShowAboutPage(true)} className="text-[10px] font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors">
                  [ SOBRE ]
                </button>
             </div>

             <button 
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group pl-6 border-l border-neutral-900 h-8"
            >
              <span className="hidden md:inline group-hover:text-white transition-colors">{UI_TEXT.cart}</span>
              <div className="relative">
                <ShoppingBag size={16} strokeWidth={1.5} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-3.5 w-3.5 items-center justify-center bg-white text-[9px] text-black font-bold font-mono">
                    {cart.length}
                  </span>
                )}
              </div>
            </button>
          </div>
        </header>

        <main className="flex-grow flex flex-col relative">
          
          {/* Hero Section */}
          <section className="w-full border-b border-neutral-900 flex flex-col md:flex-row min-h-[420px]">
             {/* Text Content */}
             <div className="w-full md:w-2/3 p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-900 relative overflow-hidden group">
                <div className="mt-8 relative z-10">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Activity size={12} className="text-emerald-500" /> Sistema V.2.0.4 // Online
                  </span>
                  <h2 className="text-[10vw] md:text-[5vw] leading-[0.85] font-black tracking-tighter text-white uppercase mix-blend-exclusion">
                    Ativos<br/>Digitais<span className="text-neutral-800">.</span>
                  </h2>
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                   <div className="px-3 py-1.5 border border-neutral-800 text-[9px] font-mono text-neutral-400 uppercase tracking-wider bg-neutral-900/30">
                      Criptografado AES-256
                   </div>
                   <div className="px-3 py-1.5 border border-neutral-800 text-[9px] font-mono text-neutral-400 uppercase tracking-wider bg-neutral-900/30">
                      Entrega Instantânea
                   </div>
                   <div className="px-3 py-1.5 border border-neutral-800 text-[9px] font-mono text-neutral-400 uppercase tracking-wider bg-neutral-900/30">
                      Protocolo P2P
                   </div>
                </div>
             </div>

             {/* Functional Panels */}
             <div className="w-full md:w-1/3 bg-[#080808] flex flex-col">
                <div className="flex-1 p-10 border-b border-neutral-900 flex flex-col justify-center hover:bg-neutral-900/20 transition-colors group">
                   <Globe size={24} strokeWidth={1} className="text-neutral-700 group-hover:text-white transition-colors mb-6" />
                   <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Acesso Global</h3>
                   <p className="text-[10px] text-neutral-500 font-mono leading-relaxed uppercase tracking-wide">
                      Operando dentro da Legislação Brasileira (CDC/LGPD).<br/>
                      Pontos de acesso global verificados.
                   </p>
                </div>
                <div className="flex-1 p-10 flex flex-col justify-center hover:bg-neutral-900/20 transition-colors group">
                   <Terminal size={24} strokeWidth={1} className="text-neutral-700 group-hover:text-white transition-colors mb-6" />
                   <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Handshake Seguro</h3>
                   <p className="text-[10px] text-neutral-500 font-mono leading-relaxed uppercase tracking-wide">
                      Protocolo P2P Direto Iniciado.<br/>
                      Canais de transmissão criptografados.
                   </p>
                </div>
             </div>
          </section>

          {/* Grid Controls */}
          <div className="w-full h-12 border-b border-neutral-900 bg-[#050505] flex items-center justify-between px-6 md:px-8 sticky top-16 z-30">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Status do Inventário: Ativo</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest hidden md:inline-block">
               /// Indexando {PRODUCTS.length} Itens
            </span>
          </div>

          {/* Product Grid */}
          <div className="w-full bg-neutral-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border-b border-neutral-900">
             {PRODUCTS.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                  onAdd={addToCart} 
                />
             ))}
          </div>

          {/* Footer */}
          <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center bg-[#050505] gap-6">
             <div className="flex items-center gap-6">
                <button onClick={() => setShowAbout(true)} className="text-[10px] font-mono text-neutral-600 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors">
                  <Info size={12} />
                  <span>Créditos</span>
                </button>
                <div className="h-3 w-px bg-neutral-800"></div>
                <span className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">V 2.0.4</span>
             </div>
             
             <div className="flex flex-col items-center md:items-end">
                <span className="text-[9px] font-mono text-neutral-700 uppercase tracking-[0.2em] mb-1">Kāmi Digital Systems © 2025</span>
                <span className="text-[9px] font-mono text-neutral-800 uppercase tracking-widest">Tokyo // Brasil</span>
             </div>
          </footer>

        </main>
      </div>

      {/* Cart Drawer */}
      <div 
        className={`fixed inset-0 z-[60] transition-all duration-500 ${cartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${cartOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setCartOpen(false)}
        />
        
        <div className={`absolute top-0 right-0 h-full w-full md:w-[500px] bg-[#080808] border-l border-neutral-800 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Cart Header */}
          <div className="px-8 h-20 border-b border-neutral-800 flex items-center justify-between bg-[#080808]">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-white flex items-center gap-3">
              <ShoppingBag size={14} />
              {UI_TEXT.cart}
            </h2>
            <button onClick={() => setCartOpen(false)} className="text-neutral-500 hover:text-white transition-colors border border-transparent hover:border-neutral-800 p-2">
              <X strokeWidth={1} size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow p-8 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-neutral-800 space-y-6">
                <div className="w-20 h-20 border border-neutral-800 rounded-full flex items-center justify-center bg-neutral-900/50">
                   <ShoppingBag size={24} strokeWidth={1} className="text-neutral-700" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-600">{UI_TEXT.emptyCart}</span>
                  <span className="font-mono text-[9px] text-neutral-800">Sistema Pronto</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="bg-[#050505] border border-neutral-800 p-6 flex justify-between items-start group hover:border-neutral-600 transition-colors relative">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                         <span className="font-mono text-[9px] text-neutral-500 border border-neutral-800 px-1.5 py-0.5">ID: {item.id.toUpperCase().substring(0,8)}</span>
                      </div>
                      <p className="text-sm text-white font-medium uppercase tracking-wide">{item.name}</p>
                      <p className="text-[10px] text-neutral-500 font-mono uppercase">
                        Protocolo {item.protocol}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between h-full gap-4">
                      <p className="text-sm font-mono text-white">{formatPrice(item.price)}</p>
                      <button 
                        onClick={() => removeFromCart(idx)}
                        className="text-[9px] font-mono text-neutral-600 hover:text-red-500 uppercase tracking-widest transition-colors border-b border-transparent hover:border-red-500/50 pb-0.5"
                      >
                        {UI_TEXT.remove}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          <div className="p-8 border-t border-neutral-800 bg-[#080808]">
            <div className="flex justify-between items-end mb-8 font-mono border-b border-neutral-900 pb-6">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest">{UI_TEXT.total}</span>
              <div className="text-right">
                <span className="text-[10px] text-neutral-600 mr-2">BRL</span>
                <span className="text-3xl text-white font-light tracking-tight">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <Button 
              fullWidth 
              variant="primary"
              disabled={cart.length === 0}
              className={cart.length === 0 ? 'opacity-20 cursor-not-allowed' : ''}
              onClick={handleCheckout}
            >
              <div className="flex items-center justify-between w-full">
                <span>{UI_TEXT.checkout}</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </div>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;

