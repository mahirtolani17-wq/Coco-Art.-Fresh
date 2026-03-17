/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, MessageCircle, MapPin, Palmtree, PartyPopper, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const INSTAGRAM_URL = "https://www.instagram.com/cocoart.fresh?igsh=MXhyNHhlM2x6b3JvMw==";
  const WHATSAPP_URL = "https://whatsapp.com/channel/0029VaAhv4T2ZjCrptjQ4k0y";

  return (
    <div className="min-h-screen bg-[#fdf8f6] font-sans selection:bg-green-200 selection:text-green-900">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold text-green-900 tracking-tight">
          CocoArt.Fresh
        </div>
        <div className="flex gap-4">
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-green-900 hover:bg-green-900 hover:text-white transition-colors shadow-sm"
          >
            <Instagram size={20} />
          </a>
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-green-900 hover:bg-green-900 hover:text-white transition-colors shadow-sm"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=1920&auto=format&fit=crop" 
            alt="Tropical Beach Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdf8f6]/40 via-[#fdf8f6]/80 to-[#fdf8f6]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium text-sm mb-8"
          >
            <Palmtree size={16} />
            <span>Fresh & Customized Tropical Coconuts</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-[#14532d] leading-tight mb-6"
          >
            Sip the Tropics,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
              Anywhere You Are.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#4a3f3c] mb-10 max-w-2xl mx-auto"
          >
            Elevate your events with our signature engraved coconuts, or find our fresh carts on the road. Pure beachy vibes, delivered fresh.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#166534] text-white rounded-full font-semibold text-lg hover:bg-[#14532d] transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Instagram size={20} />
              DM for Quotation
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#166534] border border-[#166534]/20 rounded-full font-semibold text-lg hover:bg-green-50 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Join WhatsApp Channel
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-display font-bold text-[#14532d]">What We Do</h2>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-700">
                <PartyPopper size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#14532d] mb-2">Customized Event Coconuts</h3>
                <p className="text-[#4a3f3c] leading-relaxed">
                  Make your weddings, corporate events, and parties unforgettable. We provide fresh, branded, and customized coconuts that serve as the perfect tropical refreshment and photo prop.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#14532d] mb-2">Street Carts</h3>
                <p className="text-[#4a3f3c] leading-relaxed">
                  Catch our signature tropical carts on the road! We bring the beach directly to the streets with ice-cold, freshly cracked coconuts ready to drink.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1525995015-593dba282832?q=80&w=400&h=500&auto=format&fit=crop" 
              alt="Fresh Coconut" 
              className="rounded-2xl w-full h-64 object-cover shadow-md mt-8"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1530103862676-de8892b12a15?q=80&w=400&h=500&auto=format&fit=crop" 
              alt="Event Setup" 
              className="rounded-2xl w-full h-64 object-cover shadow-md"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Visual Gallery / Vibe Check */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-[#14532d] mb-4">The CocoArt.Fresh Vibe</h2>
            <p className="text-[#4a3f3c]">Follow us on Instagram for daily tropical updates</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1620021465593-9121f1e29080?q=80&w=600&h=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?q=80&w=600&h=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&h=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1596649284812-788e91242337?q=80&w=600&h=600&auto=format&fit=crop"
            ].map((imgSrc, i) => (
              <a 
                key={i} 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noreferrer" 
                className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-100 block"
              >
                <img
                  src={imgSrc}
                  alt={`Instagram vibe ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0" />
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#166534] font-bold hover:text-teal-600 transition-colors"
            >
              View more on Instagram <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14532d] text-green-50 py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-display font-bold mb-6">CocoArt.Fresh</h2>
          <p className="mb-8 text-green-200">Fresh customized coconuts for events & on the road.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
          <p className="text-sm text-green-400/60">
            &copy; {new Date().getFullYear()} CocoArt.Fresh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
