import React from 'react';
import { X, Shield, Scale, Users, Network, FileText, AlertTriangle, Code2, Lock, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onClose: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden">
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-neutral-950/50 via-transparent to-neutral-950/30 pointer-events-none"></div>
      
      {/* Animated Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.02] pointer-events-none"></div>
      
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-8 md:py-6 flex justify-between items-center bg-black/90 backdrop-blur-xl border-b border-neutral-900/50">
        <div className="flex flex-col group">
          <div className="text-sm font-bold tracking-[0.25em] uppercase text-white mix-blend-difference cursor-pointer transition-all duration-300 hover:tracking-[0.3em]" onClick={onClose}>
            KĀMI.<span className="text-neutral-600 group-hover:text-neutral-500 transition-colors">SYS</span>
          </div>
          <span className="text-[8px] font-mono text-neutral-500 mt-1 hidden md:block">
            V.2.0.4 // ABOUT
          </span>
        </div>
        
        <button 
          onClick={onClose}
          className="text-neutral-500 hover:text-white transition-all duration-300 p-2 hover:bg-neutral-900/50 rounded-sm"
          aria-label="Fechar"
        >
          <X strokeWidth={1.5} size={24} />
        </button>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Enhanced Hero Section */}
          <div className="mb-20 md:mb-32 border-l border-neutral-800/50 pl-6 md:pl-12 py-8 relative group">
            <div className="absolute -left-1 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent group-hover:via-neutral-700 transition-colors duration-500"></div>
            <div className="absolute left-0 top-0 w-1 h-8 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter text-white uppercase mb-6 opacity-90 relative">
                <span className="relative inline-block">
                  Sobre<span className="text-neutral-800">.</span>
                  <span className="absolute -top-2 -right-4 opacity-20">
                    <Sparkles size={16} className="text-white animate-pulse" />
                  </span>
                </span>
              </h1>
              
              <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest max-w-xs leading-relaxed">
                  INFORMAÇÕES INSTITUCIONAIS // ESTRUTURA CORPORATIVA
                </p>
                <div className="h-px w-12 bg-gradient-to-r from-neutral-800 to-transparent hidden md:block"></div>
                <div className="flex gap-4">
                  <span className="px-3 py-1.5 border border-neutral-800/50 text-[9px] font-mono text-neutral-400 hover:border-neutral-700 hover:text-neutral-300 transition-all duration-300 cursor-default">COMPLIANCE</span>
                  <span className="px-3 py-1.5 border border-neutral-800/50 text-[9px] font-mono text-neutral-400 hover:border-neutral-700 hover:text-neutral-300 transition-all duration-300 cursor-default">LEGAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Conglomerate Section */}
          <section className="mb-20 relative group">
            <div className="flex items-center gap-3 mb-6 border-b border-neutral-900/50 pb-4">
              <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                <div className="p-1.5 border border-neutral-800/50 rounded-sm group-hover:border-neutral-700 transition-colors">
                  <Network size={14} className="text-neutral-500 group-hover:text-neutral-400 transition-colors" />
                </div>
                <h2 className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase group-hover:text-neutral-300 transition-colors">
                  /// ESTRUTURA CORPORATIVA
                </h2>
              </div>
              <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full ml-auto shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
            </div>
            
            <div className="relative border border-neutral-900/50 bg-gradient-to-br from-neutral-950/40 via-neutral-950/30 to-neutral-950/40 hover:border-neutral-800/50 hover:from-neutral-950/60 hover:via-neutral-950/40 hover:to-neutral-950/60 transition-all duration-700 overflow-hidden group/card">
              {/* Enhanced Decorative Number */}
              <span className="absolute -right-8 -top-8 text-[180px] font-black text-neutral-900/30 pointer-events-none select-none font-mono leading-none group-hover/card:text-neutral-900/40 transition-colors duration-700">
                01
              </span>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/0 via-transparent to-neutral-900/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-px h-12 bg-gradient-to-b from-neutral-800/50 via-neutral-700/30 to-transparent mt-1 group-hover/card:from-neutral-700 group-hover/card:via-neutral-600/50 transition-colors duration-500"></div>
                  <div className="flex-1 space-y-4">
                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base group-hover/card:text-neutral-200 transition-colors">
                      A <span className="text-white font-semibold relative">
                        Kāmi
                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></span>
                      </span> faz parte de um <span className="text-white font-semibold">conglomerado de empresas independentes</span>, 
                      cada uma operando com autonomia estratégica e especialização em seus respectivos segmentos de mercado.
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed group-hover/card:text-neutral-300 transition-colors">
                      Nossa estrutura organizacional é apoiada por uma <span className="text-white font-semibold">equipe dedicada de marketing</span> e 
                      <span className="text-white font-semibold"> assessoria jurídica</span>, garantindo que todas as operações sejam conduzidas 
                      dentro dos mais altos padrões de conformidade legal e eficiência comercial.
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-neutral-900/50 pt-6 mt-6 group-hover/card:border-neutral-800/50 transition-colors">
                  <p className="text-neutral-500 text-xs leading-relaxed font-mono group-hover/card:text-neutral-400 transition-colors">
                    Esta arquitetura corporativa permite que cada unidade de negócio mantenha sua identidade e foco operacional, 
                    enquanto se beneficia de recursos compartilhados e expertise consolidada em áreas críticas como compliance, 
                    estratégia de mercado e proteção jurídica.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced P2P System Section */}
          <section className="mb-20 relative group">
            <div className="flex items-center gap-3 mb-6 border-b border-neutral-900/50 pb-4">
              <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                <div className="p-1.5 border border-neutral-800/50 rounded-sm group-hover:border-neutral-700 transition-colors">
                  <Shield size={14} className="text-neutral-500 group-hover:text-neutral-400 transition-colors" />
                </div>
                <h2 className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase group-hover:text-neutral-300 transition-colors">
                  /// SISTEMA PEER-TO-PEER
                </h2>
              </div>
              <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full ml-auto shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
            </div>
            
            <div className="relative border border-neutral-900/50 bg-gradient-to-br from-neutral-950/40 via-neutral-950/30 to-neutral-950/40 hover:border-neutral-800/50 hover:from-neutral-950/60 hover:via-neutral-950/40 hover:to-neutral-950/60 transition-all duration-700 overflow-hidden group/card">
              {/* Enhanced Decorative Number */}
              <span className="absolute -right-8 -top-8 text-[180px] font-black text-neutral-900/30 pointer-events-none select-none font-mono leading-none group-hover/card:text-neutral-900/40 transition-colors duration-700">
                02
              </span>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/0 via-transparent to-neutral-900/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 p-8 md:p-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-gradient-to-b from-neutral-800/50 via-neutral-700/30 to-transparent mt-1 group-hover/card:from-neutral-700 group-hover/card:via-neutral-600/50 transition-colors duration-500"></div>
                  <p className="text-neutral-300 leading-relaxed text-sm md:text-base flex-1 group-hover/card:text-neutral-200 transition-colors">
                    Nossa plataforma opera através de um <span className="text-white font-semibold relative">
                      sistema peer-to-peer (P2P)
                      <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></span>
                    </span>, 
                    conectando compradores diretamente com vendedores verificados em uma rede distribuída e descentralizada. 
                    Este modelo garante transparência, redução de intermediários e maior eficiência na distribuição de ativos digitais.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-neutral-900/50 bg-gradient-to-br from-neutral-950/60 to-neutral-950/40 p-6 hover:border-neutral-800/50 hover:from-neutral-950/80 hover:to-neutral-950/60 transition-all duration-500 group/sub relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/0 to-transparent opacity-0 group-hover/sub:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2.5 border border-neutral-800/50 bg-neutral-900/30 group-hover/sub:border-neutral-700 group-hover/sub:bg-neutral-900/50 transition-all duration-300 rounded-sm">
                          <Scale size={16} className="text-neutral-400 group-hover/sub:text-neutral-300 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-mono text-[10px] uppercase tracking-widest mb-3 group-hover/sub:text-neutral-100 transition-colors">
                            PROTEÇÃO JURÍDICA
                          </h3>
                          <p className="text-neutral-400 text-xs leading-relaxed font-mono group-hover/sub:text-neutral-300 transition-colors">
                            Todas as transações estão sujeitas à <span className="text-white">legislação brasileira</span>, 
                            incluindo CDC, LGPD e demais normativas. Garantias legais estabelecidas pelo ordenamento jurídico nacional.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <span className="px-2.5 py-1 border border-neutral-800/50 text-[8px] font-mono text-neutral-600 uppercase hover:border-neutral-700 hover:text-neutral-500 transition-all cursor-default">CDC</span>
                        <span className="px-2.5 py-1 border border-neutral-800/50 text-[8px] font-mono text-neutral-600 uppercase hover:border-neutral-700 hover:text-neutral-500 transition-all cursor-default">LGPD</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-neutral-900/50 bg-gradient-to-br from-neutral-950/60 to-neutral-950/40 p-6 hover:border-neutral-800/50 hover:from-neutral-950/80 hover:to-neutral-950/60 transition-all duration-500 group/sub relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/0 to-transparent opacity-0 group-hover/sub:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2.5 border border-neutral-800/50 bg-neutral-900/30 group-hover/sub:border-neutral-700 group-hover/sub:bg-neutral-900/50 transition-all duration-300 rounded-sm">
                          <Users size={16} className="text-neutral-400 group-hover/sub:text-neutral-300 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-mono text-[10px] uppercase tracking-widest mb-3 group-hover/sub:text-neutral-100 transition-colors">
                            VERIFICAÇÃO
                          </h3>
                          <p className="text-neutral-400 text-xs leading-relaxed font-mono group-hover/sub:text-neutral-300 transition-colors">
                            Vendedores verificados e monitorados continuamente. Rastreabilidade completa das transações para 
                            resolução de disputas através dos canais legais apropriados.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <span className="px-2.5 py-1 border border-neutral-800/50 text-[8px] font-mono text-neutral-600 uppercase hover:border-neutral-700 hover:text-neutral-500 transition-all cursor-default">VERIFIED</span>
                        <span className="px-2.5 py-1 border border-neutral-800/50 text-[8px] font-mono text-neutral-600 uppercase hover:border-neutral-700 hover:text-neutral-500 transition-all cursor-default">TRACEABLE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Dropshipping Technical Section */}
          <section className="mb-20 relative group">
            <div className="flex items-center gap-3 mb-6 border-b border-neutral-900/50 pb-4">
              <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                <div className="p-1.5 border border-neutral-800/50 rounded-sm group-hover:border-neutral-700 transition-colors">
                  <FileText size={14} className="text-neutral-500 group-hover:text-neutral-400 transition-colors" />
                </div>
                <h2 className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase group-hover:text-neutral-300 transition-colors">
                  /// MODELO DE DISTRIBUIÇÃO
                </h2>
              </div>
              <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full ml-auto shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
            </div>
            
            <div className="relative border border-neutral-900/50 bg-gradient-to-br from-neutral-950/40 via-neutral-950/30 to-neutral-950/40 hover:border-neutral-800/50 hover:from-neutral-950/60 hover:via-neutral-950/40 hover:to-neutral-950/60 transition-all duration-700 overflow-hidden group/card">
              {/* Enhanced Decorative Number */}
              <span className="absolute -right-8 -top-8 text-[180px] font-black text-neutral-900/30 pointer-events-none select-none font-mono leading-none group-hover/card:text-neutral-900/40 transition-colors duration-700">
                03
              </span>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/0 via-transparent to-neutral-900/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-gradient-to-b from-neutral-800/50 via-neutral-700/30 to-transparent mt-1 group-hover/card:from-neutral-700 group-hover/card:via-neutral-600/50 transition-colors duration-500"></div>
                  <div className="flex-1 space-y-4">
                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base group-hover/card:text-neutral-200 transition-colors">
                      A Kāmi opera através de um <span className="text-white font-semibold relative">
                        modelo de distribuição logística otimizada
                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></span>
                      </span>, 
                      onde a gestão de inventário e o processo de fulfillment são realizados através de uma rede integrada de fornecedores e 
                      parceiros logísticos. Este sistema permite uma <span className="text-white font-semibold">distribuição direta e eficiente</span> 
                      dos ativos digitais, minimizando custos operacionais e maximizando a velocidade de entrega.
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed group-hover/card:text-neutral-300 transition-colors">
                      A arquitetura técnica da plataforma utiliza protocolos de sincronização em tempo real entre múltiplos pontos de distribuição, 
                      garantindo que cada transação seja processada através do nó mais próximo e eficiente disponível na rede. 
                      Esta abordagem distribuída assegura alta disponibilidade e redundância operacional.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 border-t border-neutral-900/50 pt-6 group-hover/card:border-neutral-800/50 transition-colors">
                  <div className="bg-gradient-to-br from-neutral-950/80 to-neutral-950/60 border border-neutral-800/50 p-6 relative overflow-hidden group/tech hover:border-neutral-700/50 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-neutral-900/30 to-transparent pointer-events-none opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 border border-neutral-800/50 rounded-sm">
                          <Code2 size={12} className="text-neutral-500" />
                        </div>
                        <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                          // ARQUITETURA TÉCNICA
                        </p>
                      </div>
                      <p className="text-neutral-400 text-xs leading-relaxed font-mono mb-4 group-hover/tech:text-neutral-300 transition-colors">
                        Sistema de distribuição baseado em rede descentralizada com múltiplos pontos de processamento. 
                        Fulfillment automatizado através de APIs integradas e protocolos de sincronização assíncrona.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 border border-neutral-800/50 text-[8px] font-mono text-neutral-500 uppercase hover:border-neutral-700 hover:text-neutral-400 transition-all cursor-default">DISTRIBUTED</span>
                        <span className="px-2.5 py-1 border border-neutral-800/50 text-[8px] font-mono text-neutral-500 uppercase hover:border-neutral-700 hover:text-neutral-400 transition-all cursor-default">REAL-TIME</span>
                        <span className="px-2.5 py-1 border border-neutral-800/50 text-[8px] font-mono text-neutral-500 uppercase hover:border-neutral-700 hover:text-neutral-400 transition-all cursor-default">API</span>
                        <span className="px-2.5 py-1 border border-neutral-800/50 text-[8px] font-mono text-neutral-500 uppercase hover:border-neutral-700 hover:text-neutral-400 transition-all cursor-default">SYNC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Complaint Section */}
          <section className="mb-20 relative group">
            <div className="flex items-center gap-3 mb-6 border-b border-neutral-900/50 pb-4">
              <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                <div className="p-1.5 border border-neutral-800/50 rounded-sm group-hover:border-neutral-700 transition-colors">
                  <AlertTriangle size={14} className="text-neutral-500 group-hover:text-neutral-400 transition-colors" />
                </div>
                <h2 className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase group-hover:text-neutral-300 transition-colors">
                  /// SUPORTE E DENÚNCIAS
                </h2>
              </div>
              <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full ml-auto shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
            </div>
            
            <div className="relative border border-neutral-900/50 bg-gradient-to-br from-neutral-950/40 via-neutral-950/30 to-neutral-950/40 hover:border-neutral-800/50 hover:from-neutral-950/60 hover:via-neutral-950/40 hover:to-neutral-950/60 transition-all duration-700 overflow-hidden group/card">
              {/* Enhanced Decorative Number */}
              <span className="absolute -right-8 -top-8 text-[180px] font-black text-neutral-900/30 pointer-events-none select-none font-mono leading-none group-hover/card:text-neutral-900/40 transition-colors duration-700">
                04
              </span>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/0 via-transparent to-neutral-900/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-gradient-to-b from-neutral-800/50 via-neutral-700/30 to-transparent mt-1 group-hover/card:from-neutral-700 group-hover/card:via-neutral-600/50 transition-colors duration-500"></div>
                  <p className="text-neutral-300 leading-relaxed text-sm md:text-base flex-1 group-hover/card:text-neutral-200 transition-colors">
                    Caso você tenha enfrentado qualquer problema com algum dos vendedores da plataforma, 
                    você possui canais oficiais para registrar sua denúncia e buscar a resolução adequada através dos órgãos competentes.
                  </p>
                </div>
                
                <div className="mt-8 border border-neutral-800/50 bg-gradient-to-br from-neutral-950/80 to-neutral-950/60 p-8 relative overflow-hidden group/link hover:border-neutral-700/50 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-neutral-900/20 to-transparent pointer-events-none opacity-0 group-hover/link:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-1.5 border border-neutral-800/50 rounded-sm">
                        <Lock size={14} className="text-neutral-500" />
                      </div>
                      <p className="text-white font-mono text-[10px] uppercase tracking-widest">
                        Teve problema com algum dos vendedores?
                      </p>
                    </div>
                    <a 
                      href="https://www.consumidor.gov.br/pages/principal/index.jsf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3.5 border border-neutral-800/50 bg-gradient-to-r from-neutral-900/50 to-neutral-900/30 hover:from-neutral-800/60 hover:to-neutral-800/40 hover:border-neutral-700/50 transition-all duration-300 group/btn relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></span>
                      <span className="text-white text-sm font-mono uppercase tracking-wider relative z-10">
                        Registrar denúncia no Consumidor.gov.br
                      </span>
                      <span className="text-neutral-500 group-hover/btn:text-white transition-colors text-xs relative z-10 transform group-hover/btn:translate-x-1">↗</span>
                    </a>
                    <div className="mt-6 pt-6 border-t border-neutral-900/50">
                      <p className="text-neutral-500 text-xs leading-relaxed font-mono group-hover/link:text-neutral-400 transition-colors">
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

          {/* Enhanced Footer */}
          <div className="mt-20 pt-8 border-t border-neutral-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <span className="text-[9px] text-neutral-700 font-mono hover:text-neutral-600 transition-colors cursor-default">EST. 2024</span>
              <span className="text-[9px] text-neutral-700 font-mono hidden md:block">//</span>
              <span className="text-[9px] text-neutral-700 font-mono hover:text-neutral-600 transition-colors cursor-default">TOKYO // BRASIL</span>
            </div>
            <button 
              onClick={onClose}
              className="text-[10px] font-mono text-neutral-600 hover:text-white uppercase tracking-widest transition-all duration-300 px-4 py-2 border border-transparent hover:border-neutral-800/50 hover:bg-neutral-950/50 rounded-sm"
            >
              [RETORNAR]
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

