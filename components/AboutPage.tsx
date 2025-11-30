import React from 'react';
import { X, Shield, Scale, Users, Network, FileText, AlertTriangle, Code2, Lock } from 'lucide-react';

interface AboutPageProps {
  onClose: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>
      
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-8 md:py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-neutral-900">
        <div className="flex flex-col">
          <div className="text-sm font-bold tracking-[0.25em] uppercase text-white mix-blend-difference cursor-pointer" onClick={onClose}>
            KĀMI.<span className="text-neutral-600">SYS</span>
          </div>
          <span className="text-[8px] font-mono text-neutral-500 mt-1 hidden md:block">
            V.2.0.4 // ABOUT
          </span>
        </div>
        
        <button 
          onClick={onClose}
          className="text-neutral-500 hover:text-white transition-colors p-2"
          aria-label="Fechar"
        >
          <X strokeWidth={1.5} size={24} />
        </button>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <div className="mb-20 md:mb-32 border-l border-neutral-800 pl-6 md:pl-12 py-8 relative">
            <div className="absolute -left-1 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent"></div>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter text-white uppercase mb-6 opacity-90">
              Sobre<span className="text-neutral-800">.</span>
            </h1>
            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest max-w-xs leading-relaxed">
                INFORMAÇÕES INSTITUCIONAIS // ESTRUTURA CORPORATIVA
              </p>
              <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
              <div className="flex gap-4">
                <span className="px-2 py-1 border border-neutral-800 text-[9px] font-mono text-neutral-400">COMPLIANCE</span>
                <span className="px-2 py-1 border border-neutral-800 text-[9px] font-mono text-neutral-400">LEGAL</span>
              </div>
            </div>
          </div>

          {/* Conglomerate Section */}
          <section className="mb-20 relative group">
            <div className="flex items-center gap-3 mb-6 border-b border-neutral-900 pb-4">
              <div className="flex items-center gap-3">
                <Network size={16} className="text-neutral-500" />
                <h2 className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                  /// ESTRUTURA CORPORATIVA
                </h2>
              </div>
              <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full ml-auto"></span>
            </div>
            
            <div className="relative border border-neutral-900 bg-neutral-950/30 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden">
              {/* Decorative Number */}
              <span className="absolute -right-8 -top-8 text-[180px] font-black text-neutral-900/20 pointer-events-none select-none font-mono leading-none">
                01
              </span>
              
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-px h-12 bg-gradient-to-b from-neutral-800 to-transparent mt-1"></div>
                  <div className="flex-1">
                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
                      A <span className="text-white font-semibold">Kāmi</span> faz parte de um <span className="text-white font-semibold">conglomerado de empresas independentes</span>, 
                      cada uma operando com autonomia estratégica e especialização em seus respectivos segmentos de mercado.
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Nossa estrutura organizacional é apoiada por uma <span className="text-white font-semibold">equipe dedicada de marketing</span> e 
                      <span className="text-white font-semibold"> assessoria jurídica</span>, garantindo que todas as operações sejam conduzidas 
                      dentro dos mais altos padrões de conformidade legal e eficiência comercial.
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-neutral-900 pt-6 mt-6">
                  <p className="text-neutral-500 text-xs leading-relaxed font-mono">
                    Esta arquitetura corporativa permite que cada unidade de negócio mantenha sua identidade e foco operacional, 
                    enquanto se beneficia de recursos compartilhados e expertise consolidada em áreas críticas como compliance, 
                    estratégia de mercado e proteção jurídica.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* P2P System Section */}
          <section className="mb-20 relative group">
            <div className="flex items-center gap-3 mb-6 border-b border-neutral-900 pb-4">
              <div className="flex items-center gap-3">
                <Shield size={16} className="text-neutral-500" />
                <h2 className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                  /// SISTEMA PEER-TO-PEER
                </h2>
              </div>
              <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full ml-auto"></span>
            </div>
            
            <div className="relative border border-neutral-900 bg-neutral-950/30 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden">
              {/* Decorative Number */}
              <span className="absolute -right-8 -top-8 text-[180px] font-black text-neutral-900/20 pointer-events-none select-none font-mono leading-none">
                02
              </span>
              
              <div className="relative z-10 p-8 md:p-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-gradient-to-b from-neutral-800 to-transparent mt-1"></div>
                  <p className="text-neutral-300 leading-relaxed text-sm md:text-base flex-1">
                    Nossa plataforma opera através de um <span className="text-white font-semibold">sistema peer-to-peer (P2P)</span>, 
                    conectando compradores diretamente com vendedores verificados em uma rede distribuída e descentralizada. 
                    Este modelo garante transparência, redução de intermediários e maior eficiência na distribuição de ativos digitais.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-neutral-900 bg-neutral-950/50 p-6 hover:border-neutral-800 transition-colors group/sub">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 border border-neutral-800 bg-neutral-900/50 group-hover/sub:border-neutral-700 transition-colors">
                        <Scale size={16} className="text-neutral-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-mono text-[10px] uppercase tracking-widest mb-3">
                          PROTEÇÃO JURÍDICA
                        </h3>
                        <p className="text-neutral-400 text-xs leading-relaxed font-mono">
                          Todas as transações estão sujeitas à <span className="text-white">legislação brasileira</span>, 
                          incluindo CDC, LGPD e demais normativas. Garantias legais estabelecidas pelo ordenamento jurídico nacional.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <span className="px-2 py-1 border border-neutral-800 text-[8px] font-mono text-neutral-600 uppercase">CDC</span>
                      <span className="px-2 py-1 border border-neutral-800 text-[8px] font-mono text-neutral-600 uppercase">LGPD</span>
                    </div>
                  </div>
                  
                  <div className="border border-neutral-900 bg-neutral-950/50 p-6 hover:border-neutral-800 transition-colors group/sub">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 border border-neutral-800 bg-neutral-900/50 group-hover/sub:border-neutral-700 transition-colors">
                        <Users size={16} className="text-neutral-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-mono text-[10px] uppercase tracking-widest mb-3">
                          VERIFICAÇÃO
                        </h3>
                        <p className="text-neutral-400 text-xs leading-relaxed font-mono">
                          Vendedores verificados e monitorados continuamente. Rastreabilidade completa das transações para 
                          resolução de disputas através dos canais legais apropriados.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <span className="px-2 py-1 border border-neutral-800 text-[8px] font-mono text-neutral-600 uppercase">VERIFIED</span>
                      <span className="px-2 py-1 border border-neutral-800 text-[8px] font-mono text-neutral-600 uppercase">TRACEABLE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dropshipping Technical Section */}
          <section className="mb-20 relative group">
            <div className="flex items-center gap-3 mb-6 border-b border-neutral-900 pb-4">
              <div className="flex items-center gap-3">
                <FileText size={16} className="text-neutral-500" />
                <h2 className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                  /// MODELO DE DISTRIBUIÇÃO
                </h2>
              </div>
              <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full ml-auto"></span>
            </div>
            
            <div className="relative border border-neutral-900 bg-neutral-950/30 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden">
              {/* Decorative Number */}
              <span className="absolute -right-8 -top-8 text-[180px] font-black text-neutral-900/20 pointer-events-none select-none font-mono leading-none">
                03
              </span>
              
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-gradient-to-b from-neutral-800 to-transparent mt-1"></div>
                  <div className="flex-1 space-y-4">
                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                      A Kāmi opera através de um <span className="text-white font-semibold">modelo de distribuição logística otimizada</span>, 
                      onde a gestão de inventário e o processo de fulfillment são realizados através de uma rede integrada de fornecedores e 
                      parceiros logísticos. Este sistema permite uma <span className="text-white font-semibold">distribuição direta e eficiente</span> 
                      dos ativos digitais, minimizando custos operacionais e maximizando a velocidade de entrega.
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      A arquitetura técnica da plataforma utiliza protocolos de sincronização em tempo real entre múltiplos pontos de distribuição, 
                      garantindo que cada transação seja processada através do nó mais próximo e eficiente disponível na rede. 
                      Esta abordagem distribuída assegura alta disponibilidade e redundância operacional.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 border-t border-neutral-900 pt-6">
                  <div className="bg-neutral-950 border border-neutral-800 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neutral-900/50 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <Code2 size={12} className="text-neutral-500" />
                        <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                          // ARQUITETURA TÉCNICA
                        </p>
                      </div>
                      <p className="text-neutral-400 text-xs leading-relaxed font-mono mb-4">
                        Sistema de distribuição baseado em rede descentralizada com múltiplos pontos de processamento. 
                        Fulfillment automatizado através de APIs integradas e protocolos de sincronização assíncrona.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 border border-neutral-800 text-[8px] font-mono text-neutral-500 uppercase">DISTRIBUTED</span>
                        <span className="px-2 py-1 border border-neutral-800 text-[8px] font-mono text-neutral-500 uppercase">REAL-TIME</span>
                        <span className="px-2 py-1 border border-neutral-800 text-[8px] font-mono text-neutral-500 uppercase">API</span>
                        <span className="px-2 py-1 border border-neutral-800 text-[8px] font-mono text-neutral-500 uppercase">SYNC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Complaint Section */}
          <section className="mb-20 relative group">
            <div className="flex items-center gap-3 mb-6 border-b border-neutral-900 pb-4">
              <div className="flex items-center gap-3">
                <AlertTriangle size={16} className="text-neutral-500" />
                <h2 className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                  /// SUPORTE E DENÚNCIAS
                </h2>
              </div>
              <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full ml-auto"></span>
            </div>
            
            <div className="relative border border-neutral-900 bg-neutral-950/30 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden">
              {/* Decorative Number */}
              <span className="absolute -right-8 -top-8 text-[180px] font-black text-neutral-900/20 pointer-events-none select-none font-mono leading-none">
                04
              </span>
              
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-gradient-to-b from-neutral-800 to-transparent mt-1"></div>
                  <p className="text-neutral-300 leading-relaxed text-sm md:text-base flex-1">
                    Caso você tenha enfrentado qualquer problema com algum dos vendedores da plataforma, 
                    você possui canais oficiais para registrar sua denúncia e buscar a resolução adequada através dos órgãos competentes.
                  </p>
                </div>
                
                <div className="mt-8 border border-neutral-800 bg-neutral-950 p-8 relative overflow-hidden group/link">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-neutral-900/30 to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Lock size={14} className="text-neutral-500" />
                      <p className="text-white font-mono text-[10px] uppercase tracking-widest">
                        Teve problema com algum dos vendedores?
                      </p>
                    </div>
                    <a 
                      href="https://www.consumidor.gov.br/pages/principal/index.jsf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 group/btn"
                    >
                      <span className="text-white text-sm font-mono uppercase tracking-wider">
                        Registrar denúncia no Consumidor.gov.br
                      </span>
                      <span className="text-neutral-500 group-hover/btn:text-white transition-colors text-xs">↗</span>
                    </a>
                    <div className="mt-6 pt-6 border-t border-neutral-900">
                      <p className="text-neutral-500 text-xs leading-relaxed font-mono">
                        O Consumidor.gov.br é o portal oficial do governo brasileiro para registro de reclamações e denúncias 
                        relacionadas a relações de consumo, permitindo que você busque a resolução de problemas através dos 
                        órgãos de defesa do consumidor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <span className="text-[9px] text-neutral-700 font-mono">EST. 2024</span>
              <span className="text-[9px] text-neutral-700 font-mono hidden md:block">//</span>
              <span className="text-[9px] text-neutral-700 font-mono">TOKYO // BRASIL</span>
            </div>
            <button 
              onClick={onClose}
              className="text-[10px] font-mono text-neutral-600 hover:text-white uppercase tracking-widest transition-colors px-4 py-2 border border-transparent hover:border-neutral-800"
            >
              [RETORNAR]
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

