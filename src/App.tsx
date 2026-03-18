import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Paintbrush, 
  Palette, 
  History, 
  CheckCircle2, 
  Menu, 
  X, 
  Globe, 
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Facebook
} from 'lucide-react';
import { translations, Language } from './translations';
import pintorImg from './img/pintor.png';
import portfolioImg1 from './img/1.png';
import portfolioImg2 from './img/2.png';
import portfolioImg3 from './img/3.png';
import portfolioImg4 from './img/4.png';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  return (
    <div className="min-h-screen bg-white selection:bg-burnt-orange selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-navy/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-lg group-hover:bg-burnt-orange transition-colors">
              <Paintbrush className="text-white w-6 h-6" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">Luís Marques</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-burnt-orange transition-colors">{t.nav.services}</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-burnt-orange transition-colors">{t.nav.portfolio}</a>
            <a href="#about" className="text-sm font-medium hover:text-burnt-orange transition-colors">{t.nav.about}</a>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-full border border-navy/10 hover:border-burnt-orange transition-all"
            >
              <Globe className="w-4 h-4" />
              {lang.toUpperCase()}
            </button>
            <a 
              href="#contact" 
              className="bg-navy text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-burnt-orange transition-all shadow-lg shadow-navy/10"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-bold">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a>
              <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>{t.nav.portfolio}</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
              <button onClick={toggleLang} className="flex items-center gap-2 text-lg">
                <Globe className="w-5 h-5" />
                {lang === 'pt' ? 'English' : 'Português'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 transform translate-x-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-burnt-orange/10 text-burnt-orange text-xs font-bold uppercase tracking-widest mb-6">
                {lang === 'pt' ? 'Mestre Pintor Especializado' : 'Specialized Master Painter'}
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-8">
                {t.hero.title}
              </h1>
              <p className="text-lg text-navy/70 max-w-md mb-10 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-burnt-orange text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-burnt-orange/20"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#portfolio" 
                  className="bg-white border border-navy/10 px-8 py-4 rounded-full font-bold hover:bg-navy/5 transition-colors"
                >
                  {t.nav.portfolio}
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                  src={pintorImg} 
                  alt="Luís Marques working" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-4xl font-display font-bold">20</p>
                  <p className="text-sm uppercase tracking-widest opacity-80">{t.stats.yearsPainter}</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-navy/5 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-burnt-orange/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-burnt-orange w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-xs text-navy/50 uppercase font-bold tracking-tighter">{t.stats.yearsExperience}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <p className="text-4xl md:text-5xl font-display font-bold text-burnt-orange">20</p>
              <p className="text-xs md:text-sm uppercase tracking-widest opacity-60 mt-2">{t.stats.yearsPainter}</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display font-bold text-burnt-orange">500+</p>
              <p className="text-xs md:text-sm uppercase tracking-widest opacity-60 mt-2">{t.stats.yearsExperience}</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-4xl md:text-5xl font-display font-bold text-burnt-orange">100%</p>
              <p className="text-xs md:text-sm uppercase tracking-widest opacity-60 mt-2">{t.stats.projects}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{t.services.title}</h2>
            <div className="w-20 h-1.5 bg-burnt-orange mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Paintbrush, title: t.services.wallPainting.title, desc: t.services.wallPainting.desc },
              { icon: Palette, title: t.services.artisticMurals.title, desc: t.services.artisticMurals.desc },
              { icon: CheckCircle2, title: t.services.restoration.title, desc: t.services.restoration.desc },
              { icon: MapPin, title: t.services.serviceArea.title, desc: t.services.serviceArea.desc }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-navy/5 border border-navy/5"
              >
                <div className="w-14 h-14 bg-navy text-white rounded-2xl flex items-center justify-center mb-8">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-navy/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800" 
                  alt="Painting details" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-burnt-orange text-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block">
                <p className="italic font-display text-lg">"A pintura não é apenas cor, é a alma de um espaço."</p>
                <p className="mt-4 font-bold text-sm uppercase tracking-widest">— Luís Marques</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">{t.about.title}</h2>
              <p className="text-xl text-navy/80 leading-relaxed mb-8">
                {t.about.text}
              </p>
              <div className="space-y-4">
                {['Técnicas Clássicas', 'Materiais Premium', 'Compromisso com Prazos', 'Visão Técnica Única'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-burnt-orange/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-burnt-orange" />
                    </div>
                    <span className="font-semibold text-navy/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid (Bento Style) */}
      <section id="portfolio" className="py-24 md:py-32 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">{t.nav.portfolio}</h2>
              <p className="text-white/60 max-w-md">{lang === 'pt' ? 'Uma seleção de trabalhos que definem a minha carreira.' : 'A selection of works that define my career.'}</p>
            </div>
            <a href="#" className="text-burnt-orange font-bold flex items-center gap-2 hover:gap-4 transition-all">
              {lang === 'pt' ? 'Ver todos os projetos' : 'View all projects'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group relative">
              <img src={portfolioImg1} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-2xl font-display font-bold">Mural Residencial - Cascais</p>
              </div>
            </div>
            <div className="md:col-span-2 rounded-3xl overflow-hidden group relative">
              <img src={portfolioImg2} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-xl font-display font-bold">Interiores Modernos - Lisboa</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden group relative">
              <img src={portfolioImg3} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-3xl overflow-hidden group relative">
              <img src={portfolioImg4} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-20 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">{t.contact.title}</h2>
                <p className="text-white/60 mb-12 text-lg">
                  {lang === 'pt' ? 'Estou disponível para novos projetos de pintura e murais artísticos em todo o país.' : 'I am available for new painting and mural projects nationwide.'}
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-burnt-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Telefone</p>
                      <p className="text-lg font-bold">+351 912 345 678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-burnt-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest">WhatsApp</p>
                      <a href="https://wa.me/351918234567" className="text-lg font-bold hover:text-burnt-orange transition-colors">+351 918 234 567</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-12">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-navy transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-navy transition-all"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="md:w-1/2 bg-white p-12 md:p-20">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">{t.contact.name}</label>
                  <input type="text" className="w-full border-b-2 border-navy/10 py-3 focus:border-burnt-orange outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">{t.contact.email}</label>
                  <input type="email" className="w-full border-b-2 border-navy/10 py-3 focus:border-burnt-orange outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">{t.contact.message}</label>
                  <textarea rows={4} className="w-full border-b-2 border-navy/10 py-3 focus:border-burnt-orange outline-none transition-colors resize-none" />
                </div>
                <button className="w-full bg-navy text-white py-5 rounded-2xl font-bold text-lg hover:bg-burnt-orange transition-all shadow-xl shadow-navy/10">
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy flex items-center justify-center rounded-lg">
              <Paintbrush className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold tracking-tight">Luís Marques</span>
          </div>
          <p className="text-navy/40 text-sm">
            © {new Date().getFullYear()} Luís Marques. {lang === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-8 text-sm font-bold text-navy/60">
            <a href="#" className="hover:text-burnt-orange transition-colors">Privacy</a>
            <a href="#" className="hover:text-burnt-orange transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
