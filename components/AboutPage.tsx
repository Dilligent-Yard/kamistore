import React from 'react';
import { X, Shield, Scale, Users, Network, FileText, AlertTriangle } from 'lucide-react';

interface AboutPageProps {
  onClose: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-8 md:py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-neutral-900">
        <div className="flex flex-col">
          <div className="text-sm font-bold tracking-[0.25em] uppercase text-white">
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
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="mb-16 border-l border-neutral-800 pl-6 md:pl-12 py-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-6">
              Sobre <span className="text-neutral-800">Nós</span>
            </h1>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest max-w-2xl leading-relaxed">
              INFORMAÇÕES INSTITUCIONAIS // ESTRUTURA CORPORATIVA
            </p>
          </div>

          {/* Conglomerate Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Network size={20} className="text-neutral-500" />
              <h2 className="text-2xl font-mono text-white tracking-widest uppercase">
                Estrutura Corporativa
              </h2>
            </div>
            <div className="bg-[#0A0A0A] border border-neutral-800 p-8 md:p-12 space-y-6">
              <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                A <span className="text-white font-semibold">Kāmi</span> faz parte de um <span className="text-white font-semibold">conglomerado de empresas independentes</span>, 
                cada uma operando com autonomia estratégica e especialização em seus respectivos segmentos de mercado. 
                Nossa estrutura organizacional é apoiada por uma <span className="text-white font-semibold">equipe dedicada de marketing</span> e 
                <span className="text-white font-semibold"> assessoria jurídica</span>, garantindo que todas as operações sejam conduzidas 
                dentro dos mais altos padrões de conformidade legal e eficiência comercial.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Esta arquitetura corporativa permite que cada unidade de negócio mantenha sua identidade e foco operacional, 
                enquanto se beneficia de recursos compartilhados e expertise consolidada em áreas críticas como compliance, 
                estratégia de mercado e proteção jurídica.
              </p>
            </div>
          </section>

          {/* P2P System Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Shield size={20} className="text-neutral-500" />
              <h2 className="text-2xl font-mono text-white tracking-widest uppercase">
                Sistema Peer-to-Peer
              </h2>
            </div>
            <div className="bg-[#0A0A0A] border border-neutral-800 p-8 md:p-12 space-y-6">
              <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                Nossa plataforma opera através de um <span className="text-white font-semibold">sistema peer-to-peer (P2P)</span>, 
                conectando compradores diretamente com vendedores verificados em uma rede distribuída e descentralizada. 
                Este modelo garante transparência, redução de intermediários e maior eficiência na distribuição de ativos digitais.
              </p>
              <div className="border-l-2 border-neutral-700 pl-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Scale size={18} className="text-neutral-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">
                      Proteção Jurídica Brasileira
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Todas as transações realizadas através da plataforma Kāmi estão sujeitas à <span className="text-white font-semibold">legislação brasileira</span>, 
                      incluindo o Código de Defesa do Consumidor (CDC), a Lei Geral de Proteção de Dados (LGPD) e demais normativas aplicáveis. 
                      Os compradores possuem garantias legais estabelecidas pelo ordenamento jurídico nacional, assegurando seus direitos em caso de 
                      qualquer irregularidade ou descumprimento contratual.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users size={18} className="text-neutral-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">
                      Verificação e Compliance
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Nossos vendedores passam por um processo rigoroso de verificação e são monitorados continuamente para garantir 
                      conformidade com os padrões estabelecidos. O sistema P2P permite rastreabilidade completa das transações, 
                      facilitando a resolução de eventuais disputas através dos canais legais apropriados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dropshipping Technical Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FileText size={20} className="text-neutral-500" />
              <h2 className="text-2xl font-mono text-white tracking-widest uppercase">
                Modelo de Distribuição
              </h2>
            </div>
            <div className="bg-[#0A0A0A] border border-neutral-800 p-8 md:p-12 space-y-6">
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
              <div className="mt-6 p-4 bg-neutral-950 border border-neutral-800">
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                  // ARQUITETURA TÉCNICA
                </p>
                <p className="text-neutral-400 text-xs leading-relaxed font-mono">
                  Sistema de distribuição baseado em rede descentralizada com múltiplos pontos de processamento. 
                  Fulfillment automatizado através de APIs integradas e protocolos de sincronização assíncrona.
                </p>
              </div>
            </div>
          </section>

          {/* Complaint Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle size={20} className="text-neutral-500" />
              <h2 className="text-2xl font-mono text-white tracking-widest uppercase">
                Suporte e Denúncias
              </h2>
            </div>
            <div className="bg-[#0A0A0A] border border-neutral-800 p-8 md:p-12 space-y-6">
              <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                Caso você tenha enfrentado qualquer problema com algum dos vendedores da plataforma, 
                você possui canais oficiais para registrar sua denúncia e buscar a resolução adequada através dos órgãos competentes.
              </p>
              <div className="border border-neutral-700 p-6 bg-neutral-950">
                <p className="text-neutral-400 text-sm mb-4">
                  <span className="text-white font-semibold">Teve problema com algum dos vendedores?</span>
                </p>
                <a 
                  href="https://www.consumidor.gov.br/pages/principal/index.jsf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors text-sm font-mono uppercase tracking-wider border-b border-neutral-600 hover:border-white pb-1"
                >
                  Registrar denúncia no Consumidor.gov.br
                  <span className="text-[10px]">↗</span>
                </a>
                <p className="text-neutral-500 text-xs mt-4 leading-relaxed">
                  O Consumidor.gov.br é o portal oficial do governo brasileiro para registro de reclamações e denúncias 
                  relacionadas a relações de consumo, permitindo que você busque a resolução de problemas através dos 
                  órgãos de defesa do consumidor.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[9px] text-neutral-700 font-mono">EST. 2024</span>
            <span className="text-[9px] text-neutral-700 font-mono">TOKYO // BRASIL</span>
            <button 
              onClick={onClose}
              className="text-[10px] font-mono text-neutral-600 hover:text-white uppercase tracking-widest transition-colors"
            >
              [RETORNAR]
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

