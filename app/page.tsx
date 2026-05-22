"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Menu, X, ArrowRight, MapPin, Mail, ExternalLink,
  Globe, Lightbulb, HeartHandshake, Coins, ArrowUpRight,
} from "lucide-react";

const TIMELINE = [
  { date: "2016", event: "Vencare founded by Mr Tonny Shi & Ms Becky Song" },
  { date: "Mar 2018", event: "Signed first distribution contract with PIT Medical Systems GmbH" },
  { date: "May 2018", event: "Established first UVA PIT ECP centre at Hospital Ampang, Kuala Lumpur" },
  { date: "Nov 2020", event: "Established Vencare Medical Pty Ltd in Melbourne, Australia" },
  { date: "Apr 2022", event: "Established first UVA PIT ECP centre in Australia" },
  { date: "Oct 2022", event: "Established Vencare Medical APAC Limited in Hong Kong" },
  { date: "Dec 2022", event: "Signed distribution contract with BioRegen Biomedical" },
  { date: "May 2023", event: "Signed contract with AcuVu Inc." },
];

const PARTNERS = [
  {
    num: "I",
    name: "PIT Medical Systems GmbH",
    products: ["UVA PIT ECP System", "UVA PIT KIT for ECP Treatment"],
    desc: "Medical technology partner for UVA PIT ECP solutions supporting extracorporeal photopheresis therapy.",
    url: "https://pitsystem.eu/",
    images: [{ src: "/uva-pit-ecp-system.jpg", alt: "UVA PIT ECP System" }],
  },
  {
    num: "II",
    name: "BioRegen Biomedical",
    products: ["HyaRegen®", "MateRegen®"],
    desc: "Functional healing material and adhesion barrier for OB/GYN applications.",
    url: "https://en.bioregenmed.com/",
    images: [
      { src: "/hyaregen-gel.png", alt: "HyaRegen® Gel 10ml with Cannula" },
      { src: "/materegen-gel.png", alt: "MateRegen® Gel 5ml with Cannula" },
    ],
  },
  {
    num: "III",
    name: "AcuVu Inc.",
    products: ["Disposable Hysteroscope"],
    desc: "Provider of affordable disposable hysteroscope technology for modern clinical use.",
    url: "https://www.acuvuinc.com/about",
    images: [{ src: "/acuvu-hysteroscope.png", alt: "AcuVu Disposable Hysteroscope" }],
  },
];

const WHY = [
  { icon: Globe, title: "APAC Healthcare Focus", desc: "Dedicated to supporting healthcare partners across the APAC region." },
  { icon: Lightbulb, title: "Innovative Products", desc: "Represents advanced medical technologies from trusted international principals." },
  { icon: HeartHandshake, title: "Training & Support", desc: "Provides continuous training, assistance, and aftersales support." },
  { icon: Coins, title: "Affordable Solutions", desc: "Focused on making quality medical technologies more accessible." },
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function RevealLine({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ originX: 0 }}
      className="h-px bg-[#5C1A2E]/20" />
  );
}

export default function ConceptC() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1410]">

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm" : "bg-[#FAF8F5]"}`}>
        <div className="border-b border-[#5C1A2E]/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
            <Image src="/logo.jpg" alt="Vencare" width={140} height={44} className="object-contain" priority />

            <nav className="hidden md:flex items-center gap-10">
              {["About", "Partners", "Timeline", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`}
                  className="font-raleway text-sm text-[#8C7B6E] hover:text-[#5C1A2E] transition-colors tracking-wider">{l}</a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="#contact"
                className="hidden md:inline-flex items-center gap-2 border border-[#5C1A2E] text-[#5C1A2E] text-sm font-medium px-5 py-2.5 hover:bg-[#5C1A2E] hover:text-white transition-all duration-300">
                Contact Vencare
              </a>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[#5C1A2E]">
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#FAF8F5] border-b border-[#5C1A2E]/10 px-6 py-4">
            {["About", "Partners", "Timeline", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-[#8C7B6E] hover:text-[#5C1A2E] border-b border-[#5C1A2E]/8 last:border-0">{l}</a>
            ))}
            <a href="#contact" className="mt-4 block text-center border border-[#5C1A2E] text-[#5C1A2E] text-sm font-medium px-5 py-3">
              Contact Vencare
            </a>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen pt-20 flex items-center overflow-hidden noise-bg">
        {/* Oversized decorative letter */}
        <motion.div style={{ y: heroY }} className="absolute left-[-4%] top-[-5%] select-none pointer-events-none">
          <p className="oversized-letter">V</p>
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-24">
          <div className="max-w-4xl">
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="section-tag mb-10">Since 2016 — Singapore</motion.p>

            <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant text-[clamp(48px,8vw,88px)] font-light leading-[1.05] tracking-[-0.02em] text-[#1C1410] mb-8">
              Trusted Medical Technology Partnerships{" "}
              <em className="text-[#5C1A2E] font-light">for the APAC Region</em>
            </motion.h1>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.0 }}
              style={{ originX: 0 }}
              className="h-px w-24 bg-[#C8102E] mb-8" />

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1 }}
              className="font-raleway text-lg font-light text-[#8C7B6E] leading-relaxed max-w-xl mb-14">
              Since 2016, Vencare has worked with international principals to bring innovative and affordable medical solutions to healthcare communities across the region.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="flex flex-wrap gap-5">
              <a href="#partners"
                className="inline-flex items-center gap-3 bg-[#5C1A2E] text-white font-raleway font-medium px-8 py-4 hover:bg-[#4a1525] transition-all duration-300 group">
                Explore Solutions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-3 text-[#5C1A2E] font-raleway font-medium px-8 py-4 border border-[#5C1A2E]/30 hover:border-[#5C1A2E] transition-all duration-300">
                Contact Vencare
              </a>
            </motion.div>
          </div>

          {/* Floating presence tags */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="absolute right-8 lg:right-12 bottom-16 flex flex-col gap-3">
            {[
              { city: "Singapore", label: "Headquarters" },
              { city: "Melbourne", label: "Australia" },
              { city: "Hong Kong", label: "APAC Hub" },
            ].map(({ city, label }) => (
              <div key={city} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-5 py-3 border border-[#5C1A2E]/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                <div>
                  <p className="font-cormorant text-sm font-semibold text-[#1C1410]">{city}</p>
                  <p className="font-raleway text-xs text-[#8C7B6E]">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-raleway text-[10px] text-[#8C7B6E] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#5C1A2E]/40 to-transparent" />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 lg:py-40 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="section-tag mb-8">About Vencare</p>
                <p className="font-cormorant text-[clamp(36px,5vw,52px)] font-light leading-[1.15] text-[#1C1410]">
                  A Trusted Partner in Regional Healthcare
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <RevealLine delay={0.2} />
              <Reveal delay={0.3}>
                <div className="pt-10">
                  <p className="font-raleway text-lg font-light text-[#555] leading-relaxed mb-8">
                    Vencare provides innovative and affordable medical technologies to healthcare partners across the APAC region through trusted distribution partnerships, training, and aftersales support.
                  </p>
                  <p className="font-raleway text-base text-[#8C7B6E] leading-relaxed mb-12">
                    Founded in 2016 by Mr Tonny Shi and Ms Becky Song, Vencare has grown from a Singapore-based distributor to a regional healthcare partner with affiliated companies in Australia and Hong Kong.
                  </p>

                  <div className="grid grid-cols-3 gap-10 pt-10 border-t border-[#5C1A2E]/10">
                    {[
                      { n: "2016", label: "Year Founded" },
                      { n: "3+", label: "Country Presence" },
                      { n: "3", label: "Principal Partners" },
                    ].map(({ n, label }) => (
                      <div key={label}>
                        <p className="font-cormorant text-[48px] font-light text-[#5C1A2E] leading-none mb-2">{n}</p>
                        <p className="font-raleway text-xs text-[#8C7B6E] tracking-widest uppercase">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-32 bg-[#1C1410] text-white relative overflow-hidden">
        {/* Oversized background letter */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none">
          <p className="font-cormorant font-light" style={{ fontSize: "clamp(160px,28vw,380px)", lineHeight: 0.85, color: "rgba(255,255,255,0.03)" }}>
            VM
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal className="mb-20">
            <p className="font-raleway text-xs font-semibold text-[#C8102E] tracking-[0.25em] uppercase mb-6">Vision & Mission</p>
            <h2 className="font-cormorant text-[clamp(36px,5vw,56px)] font-light text-white leading-[1.15]">
              Our Purpose & Direction
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {[
              { label: "Vision", text: "To be relevant in healthcare industry across the APAC Region" },
              { label: "Mission", text: "To bring state-of-the-art and affordable medical products to our communities" },
            ].map(({ label, text }, i) => (
              <Reveal key={label} delay={i * 0.2}>
                <div className="bg-[#1C1410] p-12 lg:p-16 group hover:bg-[#251a14] transition-colors duration-500">
                  <p className="font-raleway text-xs font-semibold text-[#C8102E] tracking-[0.25em] uppercase mb-8">{label}</p>
                  <p className="font-cormorant text-3xl lg:text-4xl font-light text-white/90 leading-[1.35] italic">&ldquo;{text}&rdquo;</p>
                  <div className="mt-10 h-px w-0 bg-[#C8102E] group-hover:w-16 transition-all duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-32 lg:py-40 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <Reveal>
              <p className="section-tag mb-6">Principal Partners</p>
              <h2 className="font-cormorant text-[clamp(36px,5vw,56px)] font-light leading-[1.15]">
                International Principals<br />We Represent
              </h2>
            </Reveal>
          </div>
          <RevealLine />

          <div className="divide-y divide-[#5C1A2E]/10">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className="group py-12 lg:py-16 grid lg:grid-cols-12 gap-8 items-center hover:bg-[#F2EEE8]/50 -mx-6 px-6 transition-colors duration-300">
                  <div className="lg:col-span-1">
                    <p className="font-cormorant text-4xl font-light text-[#5C1A2E]/30 group-hover:text-[#5C1A2E]/60 transition-colors">{p.num}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-cormorant text-2xl lg:text-3xl font-medium text-[#1C1410] mb-4">{p.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {p.products.map((prod) => (
                        <span key={prod} className="font-raleway text-xs text-[#8C7B6E] border border-[#5C1A2E]/20 px-3 py-1">
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Product images */}
                  <div className={`lg:col-span-4 flex gap-3 ${p.images.length > 1 ? "" : "justify-center"}`}>
                    {p.images.map((img) => (
                      <div key={img.src} className="relative flex-1 aspect-[4/3] bg-[#F2EEE8] overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="lg:col-span-4">
                    <p className="font-raleway text-sm text-[#8C7B6E] leading-relaxed mb-5">{p.desc}</p>
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-raleway text-xs font-semibold text-[#5C1A2E] tracking-wider uppercase hover:gap-3 transition-all group-hover:text-[#C8102E]">
                      Visit Website <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-32 bg-[#F2EEE8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal className="mb-20">
            <p className="section-tag mb-6">Company Timeline</p>
            <h2 className="font-cormorant text-[clamp(36px,5vw,56px)] font-light leading-[1.15]">
              Our Journey Since 2016
            </h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[140px] md:left-[180px] top-0 bottom-0 w-px bg-[#5C1A2E]/15" />
            {TIMELINE.map((item, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="relative flex items-start gap-8 md:gap-14 py-8 border-b border-[#5C1A2E]/8 last:border-0 group cursor-default">
                  <p className="font-raleway text-xs text-[#8C7B6E] tracking-wider uppercase w-32 md:w-40 shrink-0 pt-1">{item.date}</p>
                  <div className="relative shrink-0 mt-1.5">
                    <motion.div className="w-2.5 h-2.5 rounded-full bg-[#C8102E]/40 group-hover:bg-[#C8102E] transition-colors duration-300"
                      whileHover={{ scale: 1.6 }} />
                  </div>
                  <p className="font-raleway text-base text-[#555] group-hover:text-[#1C1410] transition-colors duration-300 leading-relaxed">{item.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-32 lg:py-40 bg-[#1C1410] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal className="mb-20">
            <p className="font-raleway text-xs font-semibold text-[#E87722] tracking-[0.25em] uppercase mb-6">Why Choose Vencare</p>
            <h2 className="font-cormorant text-[clamp(36px,5vw,56px)] font-light leading-[1.15]">
              The Vencare Difference
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {WHY.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="bg-[#1C1410] p-10 h-full group hover:bg-[#251a14] transition-colors duration-400 cursor-default">
                  <div className="w-12 h-12 border border-[#C8102E]/30 flex items-center justify-center mb-8 group-hover:border-[#C8102E] group-hover:bg-[#C8102E]/10 transition-all duration-300">
                    <Icon size={20} className="text-[#C8102E]" />
                  </div>
                  <h3 className="font-cormorant text-xl font-medium text-white mb-4">{title}</h3>
                  <p className="font-raleway text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 bg-[#FAF8F5] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 select-none pointer-events-none">
          <p className="font-cormorant font-light text-right" style={{ fontSize: "clamp(80px,15vw,200px)", lineHeight: 0.85, color: "rgba(92,26,46,0.04)" }}>
            Contact
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <Reveal>
              <p className="section-tag mb-8">Contact</p>
              <h2 className="font-cormorant text-[clamp(36px,5vw,56px)] font-light leading-[1.15] mb-10">
                Get in Touch with Vencare
              </h2>

              <p className="font-raleway text-base text-[#8C7B6E] leading-relaxed mb-12">
                Ready to explore medical technology partnerships for your healthcare organisation across the APAC region?
              </p>

              <div className="space-y-8">
                {[
                  { Icon: Mail, label: "Email", val: "info@vencaremedical.com", href: "mailto:info@vencaremedical.com" },
                  { Icon: MapPin, label: "Address", val: "50 Faber Walk, #01-36\nSingapore 128994" },
                ].map(({ Icon, label, val, href }) => (
                  <div key={label} className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-[#5C1A2E]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#5C1A2E]" />
                    </div>
                    <div>
                      <p className="font-raleway text-xs text-[#8C7B6E] uppercase tracking-[0.2em] mb-2">{label}</p>
                      {href ? (
                        <a href={href} className="font-raleway text-base text-[#1C1410] hover:text-[#5C1A2E] transition-colors">{val}</a>
                      ) : (
                        <p className="font-raleway text-base text-[#555] whitespace-pre">{val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white p-10 lg:p-14 border border-[#5C1A2E]/10">
                <p className="font-cormorant text-2xl font-medium text-[#1C1410] mb-10">Send an Inquiry</p>
                <div className="space-y-6">
                  {[["Your Name", "text"], ["Email Address", "email"], ["Company", "text"]].map(([ph, tp]) => (
                    <div key={ph}>
                      <input type={tp} placeholder={ph}
                        className="w-full border-0 border-b border-[#5C1A2E]/15 bg-transparent py-3.5 font-raleway text-sm text-[#1C1410] placeholder:text-[#bbb] transition-all focus:border-[#5C1A2E]" />
                    </div>
                  ))}
                  <div>
                    <textarea placeholder="Message" rows={4}
                      className="w-full border-0 border-b border-[#5C1A2E]/15 bg-transparent py-3.5 font-raleway text-sm text-[#1C1410] placeholder:text-[#bbb] resize-none transition-all focus:border-[#5C1A2E]" />
                  </div>
                  <button className="w-full bg-[#5C1A2E] text-white font-raleway font-medium py-4 hover:bg-[#4a1525] transition-colors duration-300 flex items-center justify-center gap-3 group mt-4">
                    Submit Inquiry <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C1410] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-10 border-b border-white/8">
            <div>
              <div className="bg-white inline-block px-4 py-2">
                <Image src="/logo.jpg" alt="Vencare" width={130} height={40} className="object-contain" />
              </div>
              <p className="font-raleway text-sm text-white/40 mt-4 tracking-wider">Innovative Medical Solutions</p>
            </div>
            <nav className="flex flex-wrap gap-8">
              {["About", "Partners", "Timeline", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`}
                  className="font-raleway text-sm text-white/40 hover:text-white transition-colors tracking-wider">{l}</a>
              ))}
            </nav>
          </div>
          <div className="pt-10 flex flex-col md:flex-row justify-between gap-4">
            <p className="font-raleway text-xs text-white/25 tracking-wide">
              © 2024 Vencare. All rights reserved. 50 Faber Walk, #01-36, Singapore 128994.
            </p>
            <a href="mailto:info@vencaremedical.com"
              className="font-raleway text-xs text-white/25 hover:text-[#E87722] transition-colors">
              info@vencaremedical.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
