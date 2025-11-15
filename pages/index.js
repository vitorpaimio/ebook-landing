import React, { useState } from 'react';
import { ChevronDown, Star, Check, Menu, X } from 'lucide-react';

export default function EbookPromptsLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-sm sm:text-base font-bold text-marsala">E-book 66 Prompts</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <button onClick={() => scrollToSection('features')} className="text-sm text-gray-700 hover:text-marsala transition">O que Você Vai Receber</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm text-gray-700 hover:text-marsala transition">Exemplos de Imagens</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-sm text-gray-700 hover:text-marsala transition">Para Quem é</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm text-gray-700 hover:text-marsala transition">FAQ</button>
            </div>

            <button
              onClick={() => scrollToSection('final-cta')}
              className="hidden lg:block px-6 py-2.5 bg-marsala text-white rounded-lg font-semibold hover:bg-marsala transition transform hover:scale-105"
            >
              Comprar Agora
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-gray-700">O que Você Vai Receber</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-gray-700">Exemplossss</button>
              <button onClick={() => scrollToSection('why-choose')} className="block w-full text-left py-2 text-gray-700">Para Quem é</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-gray-700">FAQ</button>
              <button onClick={() => scrollToSection('final-cta')} className="w-full mt-2 px-4 py-2.5 bg-marsala text-white rounded-lg font-semibold">Comprar Agora</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-marsala/10 via-white to-marsala/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-marsala/20 text-marsala rounded-full text-sm font-medium">
                <Check size={16} />
                Mais de 3.000 imagens criadas com estes prompts
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Crie Fotos Estilo Book Profissional <span className="text-marsala">Usando Apenas IA</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                66 prompts prontos, testados e validados. Copie, cole e gere imagens incríveis mesmo sem conhecimento técnico.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('final-cta')}
                  className="px-8 py-4 bg-marsala text-white rounded-lg font-bold text-lg hover:bg-marsala transition transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Baixar Agora
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="px-8 py-4 bg-white text-marsala border-2 border-marsala rounded-lg font-bold text-lg hover:bg-marsala/10 transition"
                >
                  Ver Exemplos de Imagens
                </button>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 ml-2">
                  <span className="font-bold">97%</span> dos compradores avaliam como "o melhor e-book de prompts que já usaram"
                </p>
              </div>
            </div>

            <div className="relative animate-slide-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="data:image/svg+xml,%3Csvg width='600' height='800' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='800' fill='%232563eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='white'%3EE-book Cover%3C/text%3E%3C/svg%3E"
                  alt="E-book Preview"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Logos */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2 text-gray-700">
              <Check className="text-marsala" size={24} />
              <span className="font-semibold">Resultado Imediato</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Check className="text-marsala" size={24} />
              <span className="font-semibold">Aprovado por Criadores</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Check className="text-marsala" size={24} />
              <span className="font-semibold">Testado em Gemini e Outras IAs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              O Que Você Vai Receber
            </h2>
          </div>

          {/* Main Feature Card */}
          <div className="mb-8 bg-gradient-to-br from-marsala to-marsala rounded-2xl p-8 sm:p-12 text-white shadow-xl transform hover:scale-[1.02] transition">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">66 Prompts Profissionais</h3>
            <p className="text-lg text-marsala/20">Criados e testados para gerar fotos realistas estilo book.</p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Divisão por 12 Categorias",
                desc: "Praia, Feminino, Masculino, Corporativo, Kids, Natal, Halloween e mais."
              },
              {
                title: "Prompts Otimizados",
                desc: "Estruturados com luz, lente, ângulo, textura e composição."
              },
              {
                title: "Guia de Uso do Gemini",
                desc: "Aprenda como gerar imagens perfeitas mesmo sendo iniciante."
              },
              {
                title: "Instruções para Personalização",
                desc: "Como adaptar traços, poses e cenários ao seu rosto."
              },
              {
                title: "Resultados Ultra-Realistas",
                desc: "Linguagem projetada para gerar imagens 8K de altíssima qualidade."
              },
              {
                title: "Compatível com Gemini, Midjourney e Outros Geradores",
                desc: "Use os prompts em diferentes plataformas de IA."
              },
              {
                title: "Explicação para Melhorar as Imagens",
                desc: "Como usar Remini, Facetune e ajustes de pós-produção."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition hover:border-blue-300 group"
              >
                <div className="w-12 h-12 bg-marsala/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-marsala transition">
                  <Check className="text-marsala group-hover:text-white transition" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Por Que Escolher Este E-book?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prompts Testados e Validados",
                desc: "Cada prompt foi usado para gerar imagens reais que já impressionaram centenas de pessoas."
              },
              {
                title: "Explicações Simples e Diretas",
                desc: "Ideal para quem nunca usou IA para gerar fotos."
              },
              {
                title: "Alta Qualidade Garantida",
                desc: "Linguagem otimizada para resultados profissionais estilo editorial."
              },
              {
                title: "Conteúdo Exclusivo",
                desc: "Estruturas de prompt que você não encontra gratuitamente por aí."
              },
              {
                title: "Versatilidade Máxima",
                desc: "Crie desde books femininos e masculinos até fotos infantis, natalinas e temáticas."
              },
              {
                title: "Transformação Imediata",
                desc: "Você copia e cola, e em segundos está vendo imagens prontas."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 bg-marsala rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{pillar.title}</h3>
                <p className="text-gray-600 text-center">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Nathalia Kegler",
                location: "Brasil",
                text: "Tô adorandooo! Muito fácil de fazer da forma como você ensina.",
                avatar: "NK"
              },
              {
                name: "Helena Fotografias",
                location: "Empreendedora Digital",
                text: "É perfeita! Os melhores prompts estão aqui.",
                avatar: "HF"
              },
              {
                name: "Josia R. Mentora",
                location: "Brasil",
                text: "Experiência maravilhosa!",
                avatar: "JR"
              },
              {
                name: "Clarissa Telles",
                location: "Brasil",
                text: "Muito bom! Consigo fazer vários cenários e as fotos ficam super naturais.",
                avatar: "CT"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-marsala rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Preciso saber usar IA para aproveitar o e-book?",
                a: "Não! O material explica de forma simples e direta como usar os prompts, mesmo sendo iniciante."
              },
              {
                q: "Funciona só no Gemini?",
                a: "Não. Os prompts foram otimizados para o Gemini, mas funcionam também no Midjourney, Copilot Image, Leonardo e outros."
              },
              {
                q: "Os prompts funcionam com qualquer tipo de foto?",
                a: "Sim! Você pode usar suas selfies, fotos antigas e até fotos tiradas com celular."
              },
              {
                q: "O e-book é atualizado?",
                a: "Sim! Ao comprar, você recebe futuras atualizações gratuitamente dentro da minha comunidade."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-marsala flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-marsala to-marsala">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Comece a Criar Suas Fotos Profissionais Hoje
              </h2>
              <p className="text-lg sm:text-xl text-marsala/20">
                Acesso imediato aos 66 prompts testados. Transforme suas fotos em segundos.
              </p>
              
              <div className="space-y-4">
                <button className="w-full sm:w-auto px-10 py-5 bg-white text-marsala rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
                  Garantir Meu E-book Agora
                </button>
                <p className="text-sm text-marsala/20">
                  ✓ Acesso vitalício ✓ Atualizações grátis ✓ Garantia de 7 dias
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-white text-lg">App Mockup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            E-book 66 Prompts para Criar Books Incríveis com IA © 2025
          </p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition">Instagram</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
