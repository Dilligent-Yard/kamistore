import React, { useEffect, useState } from 'react';
import { ChevronLeft, Shield, Scale, Network, AlertTriangle } from 'lucide-react';

interface AboutPageProps {
  onClose: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#020202] z-[100] overflow-y-auto">
      <div className="min-h-screen flex flex-col items-center p-0 md:p-8">
        
        {/* Main Frame */}
        <div className="w-full max-w-[1400px] bg-[#050505] border border-neutral-900 shadow-2xl relative flex flex-col min-h-[90vh]">
            
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-neutral-900 h-16 flex items-center justify-between px-6 md:px-8">
                <div className="flex items-center gap-4">
                    <button onClick={onClose} className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-mono uppercase tracking-widest">Voltar</span>
                    </button>
                    <div className="h-4 w-px bg-neutral-800"></div>
                    <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Arquitetura do Sistema</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">KĀMI.SYS</span>
                </div>
            </header>

            <main className="flex-grow p-8 md:p-16">
                {/* Hero */}
                <div className={`mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6 block">
                        Estrutura Corporativa // V.2.0.4
                    </span>
                    <h1 className="text-[8vw] md:text-[5vw] leading-[0.9] font-black text-white uppercase tracking-tighter mb-8 max-w-4xl">
                        Protocolo<br/>Operacional<span className="text-neutral-800">.</span>
                    </h1>
                    <p className="text-sm md:text-base text-neutral-400 font-light max-w-2xl leading-relaxed border-l border-neutral-800 pl-6">
                        Kāmi opera como um conglomerado descentralizado de vendedores independentes, cada um funcionando com autonomia estratégica. Nossa arquitetura é suportada por conformidade legal dedicada e logística automatizada.
                    </p>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">
                    
                    {/* Block 1 */}
                    <div className="bg-[#050505] p-12 hover:bg-neutral-900/20 transition-colors group relative overflow-hidden">
                        <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-6 block">01 // Estrutura</span>
                        <h3 className="text-xl text-white font-medium mb-4 group-hover:text-emerald-500 transition-colors">Matriz Corporativa</h3>
                        <p className="text-xs text-neutral-500 font-mono leading-relaxed mb-8">
                            Cada unidade de negócios mantém identidade operacional enquanto aproveita recursos compartilhados em conformidade, estratégia e proteção legal.
                        </p>
                        <Network size={24} className="text-neutral-700 group-hover:text-emerald-500 transition-colors" strokeWidth={1} />
                    </div>

                    {/* Block 2 */}
                    <div className="bg-[#050505] p-12 hover:bg-neutral-900/20 transition-colors group relative overflow-hidden">
                        <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-6 block">02 // Rede</span>
                        <h3 className="text-xl text-white font-medium mb-4 group-hover:text-emerald-500 transition-colors">Distribuição P2P</h3>
                        <p className="text-xs text-neutral-500 font-mono leading-relaxed mb-8">
                            Conexão direta comprador-vendedor em uma rede distribuída. Garante transparência e elimina fricção intermediária.
                        </p>
                        <Shield size={24} className="text-neutral-700 group-hover:text-emerald-500 transition-colors" strokeWidth={1} />
                    </div>

                    {/* Block 3 */}
                    <div className="bg-[#050505] p-12 hover:bg-neutral-900/20 transition-colors group relative overflow-hidden">
                        <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-6 block">03 // Legal</span>
                        <h3 className="text-xl text-white font-medium mb-4 group-hover:text-emerald-500 transition-colors">Conformidade</h3>
                        <p className="text-xs text-neutral-500 font-mono leading-relaxed mb-8">
                            Operações sujeitas à legislação brasileira (CDC/LGPD). Rastreabilidade completa de transações para resolução de disputas.
                        </p>
                        <Scale size={24} className="text-neutral-700 group-hover:text-emerald-500 transition-colors" strokeWidth={1} />
                    </div>

                    {/* Block 4 */}
                    <div className="bg-[#050505] p-12 hover:bg-neutral-900/20 transition-colors group relative overflow-hidden">
                        <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-6 block">04 // Suporte</span>
                        <h3 className="text-xl text-white font-medium mb-4 group-hover:text-emerald-500 transition-colors">Resolução</h3>
                        <p className="text-xs text-neutral-500 font-mono leading-relaxed mb-8">
                            Canais oficiais disponíveis para resolução de conflitos via Consumidor.gov.br ou contato institucional direto.
                        </p>
                        <AlertTriangle size={24} className="text-neutral-700 group-hover:text-emerald-500 transition-colors" strokeWidth={1} />
                    </div>

                </div>

                {/* Contact Footer */}
                <div className="mt-24 border-t border-neutral-900 pt-12 flex flex-col md:flex-row justify-between gap-12">
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Canais Oficiais</h4>
                        <div className="flex flex-col gap-2">
                             <a href="mailto:kamiselling@proton.me" className="text-xs font-mono text-neutral-500 hover:text-white transition-colors">kamiselling@proton.me</a>
                             <span className="text-xs font-mono text-neutral-600">Protocolo de Email Criptografado</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                        <button onClick={onClose} className="px-6 py-3 border border-neutral-800 text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Fechar Terminal
                        </button>
                    </div>
                </div>

            </main>
        </div>
      </div>
    </div>
  );
};

