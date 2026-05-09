import { CheckCircle, Clock, Home, MapPin, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

const services = [
  {
    title: "Bagno chiavi in mano",
    description: "Bagno completo fino a 6 mq con demolizione, impianto, posa, sanitari, doccia e collaudo finale.",
    price: "Da 6.999€"
  },
  {
    title: "Porte interne",
    description: "Fornitura, montaggio, smontaggio e smaltimento delle vecchie porte con servizi aggiuntivi.",
    price: "Prezzo da definire"
  },
  {
    title: "Parquet galleggiante",
    description: "Rinnova il pavimento senza demolizioni invasive con posa rapida e finiture moderne.",
    price: "Da €/mq"
  },
  {
    title: "Box doccia",
    description: "Sostituzione o installazione box doccia con smontaggio, montaggio e finiture.",
    price: "Da definire"
  },
  {
    title: "Lucernai",
    description: "Fornitura e installazione lucernai per migliorare luce, comfort e valore degli ambienti.",
    price: "Da definire"
  },
  {
    title: "Tinteggiatura",
    description: "Pittura interna, rasature e finiture per rinnovare casa con interventi rapidi e ordinati.",
    price: "Da definire"
  },
];

export default function HomePage() {
  return (
    <main>
      <Header />

      <section className="bg-slate-100">
        <div className="container-page grid gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              <MapPin size={16} />
              Piana di Sant’Eufemia
            </div>
            <h1 className="mb-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Servizi per la casa nella Piana di Sant’Eufemia
            </h1>
            <p className="mb-8 max-w-2xl text-xl leading-8 text-slate-700">
              Scegli il servizio, configura l’intervento e migliora la tua casa progressivamente.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#servizi"
                className="inline-flex items-center justify-center rounded-md bg-brand-orange px-7 py-4 text-lg font-black text-white shadow-lg"
              >
                Scopri i servizi
              </a>
              <a
                href="https://wa.me/393331234567"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-7 py-4 text-lg font-black text-white shadow-lg"
              >
                <MessageCircle size={20} />
                Scrivi su WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-xl">
            <div className="relative h-[430px] overflow-hidden rounded-lg bg-gradient-to-br from-stone-200 via-slate-200 to-sky-100">
              <div className="absolute inset-x-8 bottom-0 h-[330px] rounded-t-3xl bg-white/70 shadow-2xl">
                <div className="absolute left-8 top-8 h-36 w-36 rounded-lg border-8 border-brand-blue bg-slate-50" />
                <div className="absolute right-8 top-8 h-56 w-28 rounded-lg border-4 border-slate-500 bg-white/70" />
                <div className="absolute bottom-10 left-8 h-20 w-44 rounded-lg bg-stone-400" />
                <div className="absolute bottom-10 right-10 flex gap-5">
                  <div className="h-20 w-20 rounded-full border-8 border-white bg-slate-200 shadow" />
                  <div className="h-20 w-20 rounded-full border-8 border-white bg-slate-200 shadow" />
                </div>
              </div>
              <div className="absolute left-5 top-5 rounded-lg bg-white px-5 py-4 shadow-lg">
                <div className="text-sm font-bold text-slate-500">Servizi modulari</div>
                <div className="text-3xl font-black text-brand-blue">Casa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page px-5 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Semplice", "Servizi chiari, acquistabili e comprensibili."],
            ["Locale", "Operiamo a Lamezia Terme e nel territorio vicino."],
            ["Organizzato", "Rete artigiani, logistica e controllo qualità."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="mb-3 text-brand-orange" size={30} />
              <h3 className="mb-2 text-xl font-black">{title}</h3>
              <p className="leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="servizi" className="bg-slate-50 px-5 py-14">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-3 text-4xl font-black">Catalogo servizi</h2>
            <p className="text-lg leading-8 text-slate-600">
              Parti da un piccolo intervento e migliora casa nel tempo. Ogni servizio è pensato per essere chiaro, modulare e facile da richiedere.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page px-5 py-14">
        <h2 className="mb-8 text-4xl font-black">Come funziona</h2>
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["1", "Scegli servizio", "Parti dal servizio più adatto alla tua esigenza."],
            ["2", "Invia richiesta", "Contattaci via WhatsApp o tramite form."],
            ["3", "Valutiamo", "Verifichiamo misure, foto e condizioni."],
            ["4", "Realizziamo", "Organizziamo artigiani, materiali e tempi."],
          ].map(([n, title, text]) => (
            <div key={n} className="rounded-lg border p-5 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-xl font-black text-white">{n}</div>
              <h3 className="mb-2 text-xl font-black">{title}</h3>
              <p className="leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark px-5 py-14 text-white">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-black">Ristrutturazioni complete su misura</h2>
            <p className="mb-6 text-lg leading-8 text-slate-300">
              La ristrutturazione completa non si compra online. Si avvia online e si gestisce con sopralluogo, analisi tecnica, progettazione e pianificazione.
            </p>
            <a href="#contatti" className="inline-flex rounded-md bg-brand-orange px-6 py-4 font-black text-white">
              Richiedi sopralluogo
            </a>
          </div>
          <div className="grid gap-4">
            {[
              ["Sopralluogo", Home],
              ["Pianificazione", Clock],
              ["Rete artigiani", ShieldCheck],
              ["Logistica", Truck],
            ].map(([label, Icon]) => (
              <div key={String(label)} className="flex items-center gap-4 rounded-lg bg-white/10 p-5">
                {/* @ts-expect-error dynamic icon */}
                <Icon className="text-brand-orange" size={26} />
                <span className="text-lg font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
