import React, { useState } from 'react';
import Head from 'next/head';
import NextImage from 'next/image';
import { ChevronDown, Star, Check, Menu, X, Sparkles, Zap, Award, Layers, LucideImage, Settings, BookOpen, CheckCircle, BookOpenText, BadgeCheck, KeyRound, Rocket } from 'lucide-react';

export default function EbookPromptsLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const purchaseLink = 'https://pay.kiwify.com.br/G1YLd1e';
  const seo = {
    title: '@daniellemarchesan - E-book 75 Prompts para Criar Books Incríveis com IA',
    description:
      'Descubra como criar fotos estilo book profissional usando apenas IA. Copie, cole e gere imagens incríveis mesmo sem conhecimento técnico.',
    image: '/cover-headline.svg'
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-sm sm:text-base font-bold text-[#964F4C]">@daniellemarchesan</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <button onClick={() => scrollToSection('features')} className="text-sm uppercase text-gray-700 hover:text-[#964F4C] transition">O que Você Vai Receber</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm uppercase text-gray-700 hover:text-[#964F4C] transition">Depoimentos</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-sm uppercase text-gray-700 hover:text-[#964F4C] transition">Para Quem é</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm uppercase text-gray-700 hover:text-[#964F4C] transition">FAQ</button>
            </div>

            <a
              href={purchaseLink}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:block px-6 py-2.5 bg-[#964F4C] text-white rounded-lg font-semibold hover:bg-[#964F4C] transition transform hover:scale-105"
            >
              Comprar Agora
            </a>

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
              <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 uppercase text-gray-700">O que Você Vai Receber</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 uppercase text-gray-700">Depoimentos</button>
              <button onClick={() => scrollToSection('why-choose')} className="block w-full text-left py-2 uppercase text-gray-700">Para Quem é</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 uppercase text-gray-700">FAQ</button>
              <a
                href={purchaseLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-2 px-4 py-2.5 bg-[#964F4C] text-white rounded-lg font-semibold block text-center"
              >
                COMPRAR AGORA
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-marsala/10 via-white to-marsala/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#964F4C]/20 text-[#964F4C] rounded-full text-sm font-medium">
                <Check size={16} />
                Mais de 3.000 imagens criadas com estes prompts
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Crie Fotos Estilo Book Profissional <span className="text-[#964F4C]">Usando Apenas IA</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Copie, cole e gere imagens incríveis mesmo sem conhecimento técnico.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={purchaseLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-[#964F4C] text-white rounded-lg font-bold text-lg hover:bg-[#964F4C] transition transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  COMPRAR AGORA
                </a>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="px-8 py-4 bg-white text-[#964F4C] border-2 border-[#964F4C] rounded-lg font-bold text-lg hover:bg-[#964F4C]/10 transition"
                >
                  Ver Depoimentos
                </button>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 ml-2">
                  <span className="font-bold">97%</span> dos compradores avaliam como &ldquo;o melhor e-book de prompts que já usaram&rdquo;
                </p>
              </div>
            </div>

            <div className="relative animate-slide-in flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white w-full max-w-[320px] lg:max-w-[380px]">
                <NextImage
                  src="/cover-headline.svg"
                  alt="Cover do E-book"
                  width={380}
                  height={520}
                  sizes="(max-width: 1024px) 320px, 380px"
                  priority
                  className="w-full h-auto"
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
              <Check className="text-[#964F4C]" size={24} />
              <span className="font-semibold">Resultado Imediato</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Check className="text-[#964F4C]" size={24} />
              <span className="font-semibold">Aprovado por Criadores</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Check className="text-[#964F4C]" size={24} />
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
          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Prompts Otimizados",
                desc: "Estruturados com luz, lente, ângulo, textura e composição.",
                Icon: Sparkles
              },
              {
                title: "Guia de Uso do Gemini",
                desc: "Aprenda como gerar imagens perfeitas mesmo sendo iniciante.",
                Icon: BookOpen
              },
              {
                title: "Instruções para Personalização",
                desc: "Como adaptar traços, poses e cenários ao seu rosto.",
                Icon: Settings
              },
              {
                title: "Resultados Ultra-Realistas",
                desc: "Linguagem projetada para gerar imagens 8K de altíssima qualidade.",
                Icon: LucideImage
              },
              {
                title: "Compatível com Gemini, Midjourney e Outros Geradores",
                desc: "Use os prompts em diferentes plataformas de IA.",
                Icon: Check
              },
              {
                title: "Explicação para Melhorar as Imagens",
                desc: "Como usar Remini, Facetune e ajustes de pós-produção.",
                Icon: Zap
              }
            ].map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition hover:border-blue-300 group"
              >
                <div className="w-12 h-12 bg-[#964F4C]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#964F4C] transition">
                  <Icon className="text-[#964F4C] group-hover:text-white transition" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-600">{desc}</p>
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
                desc: "Cada prompt foi usado para gerar imagens reais que já impressionaram centenas de pessoas.",
                Icon: CheckCircle
              },
              {
                title: "Explicações Simples e Diretas",
                desc: "Ideal para quem nunca usou IA para gerar fotos.",
                Icon: BookOpenText
              },
              {
                title: "Alta Qualidade Garantida",
                desc: "Linguagem otimizada para resultados profissionais estilo editorial.",
                Icon: BadgeCheck
              },
              {
                title: "Conteúdo Exclusivo",
                desc: "Estruturas de prompt que você não encontra gratuitamente por aí.",
                Icon: KeyRound
              },
              {
                title: "Versatilidade Máxima",
                desc: "Crie desde books femininos e masculinos até fotos infantis, natalinas e temáticas.",
                Icon: Layers
              },
              {
                title: "Transformação Imediata",
                desc: "Você copia e cola, e em segundos está vendo imagens prontas.",
                Icon: Rocket
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 bg-[#964F4C] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <pillar.Icon size={32} className="text-white" />
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

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {[
              {
                name: "Nathalia Kegler",
                location: "Brasil",
                text: "Tô adorandooo! Muito fácil de fazer da forma como você ensina.",
                photo: "/nathalia.webp"
              },
              {
                name: "Helena Fotografias",
                location: "Empreendedora Digital",
                text: "É perfeita! Os melhores prompts estão aqui.",
                photo: "/helena.webp"
              },
              {
                name: "Clarissa Telles",
                location: "Brasil",
                text: "Muito bom! Consigo fazer vários cenários e as fotos ficam super naturais.",
                photo: "/clarissa.webp"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#964F4C] relative">
                    <NextImage
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
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
                    className={`text-[#964F4C] flex-shrink-0 transition-transform ${
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
<section id="final-cta" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#964F4C] to-[#7a3f3d]">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-white space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Comece a Criar Suas Fotos Profissionais Hoje
        </h2>
        <p className="text-lg sm:text-xl text-white/80">
          Transforme suas fotos em segundos.
        </p>
        
        <div className="space-y-4">
          <a
            href={purchaseLink}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white text-[#964F4C] rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl inline-block text-center"
          >
            GARANTIR MEU E-BOOK AGORA
          </a>
          <p className="text-sm text-white/70">
            ✓ Acesso vitalício ✓ Atualizações grátis ✓ Garantia de 7 dias
          </p>
        </div>
      </div>

        <div className="flex justify-center">
          <div className="w-72 h-96 sm:w-80 sm:h-[420px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
            <NextImage
              src="/cover-footer.svg"
              alt="E-book cover"
              width={320}
              height={420}
              sizes="(max-width: 640px) 280px, 320px"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
    </div>
  </div>
</section>

      {/* Footer */}
{/* Footer */}
<footer className="bg-white text-gray-900 py-12 px-4 border-t border-gray-200">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-gray-600">
      E-book 75 Prompts para Criar Books Incríveis com IA © 2025 · Site criado por @vitorpaimio
    </p>
    <div className="mt-4">
      <a
        href="https://www.instagram.com/daniellemarchesan"
        target="_blank"
        rel="noreferrer"
        className="text-[#964F4C] hover:text-[#7a3f3d] transition"
      >
        Instagram
      </a>
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
    </>
  );
}
