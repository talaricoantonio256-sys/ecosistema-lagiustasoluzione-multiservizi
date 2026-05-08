'use client'

import Button from '@/components/Button'
import { Check, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function BathroomPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Ristrutturazione bagno chiavi in mano
          </h1>
          <p className="text-xl text-secondary-600 mb-6">
            Bagno completo fino a 6 mq
          </p>
          <p className="text-4xl font-bold text-primary-600">
            da 6.999 €
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-secondary-50 rounded-lg p-8 mb-12">
                <h2 className="font-display font-bold text-2xl text-secondary-900 mb-4">
                  Pacchetto completo
                </h2>
                <p className="text-secondary-600 leading-relaxed mb-6">
                  Il nostro pacchetto bagno chiavi in mano ti permette di avere un bagno completamente nuovo e funzionale a un prezzo fisso e trasparente.
                  Tutti i lavori sono eseguiti da professionisti coordinati, con materiali di qualità e tempi definiti.
                </p>
                <ul className="space-y-3">
                  {[
                    'Bagno fino a 6 mq',
                    'Doccia 70x100 cm',
                    'Vaso e bidet',
                    'Mobile lavabo 100 cm',
                    'Impianto idraulico 4 punti acqua',
                    'Pavimenti e rivestimenti inclusi',
                    'Demolizione e smaltimento',
                    'Circa 8 giorni lavorativi',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary-600">
                      <Check size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mb-12">
                <h2 className="font-display font-bold text-2xl text-secondary-900 mb-6">
                  Specifiche
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-secondary-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                      Dimensioni
                    </h3>
                    <ul className="text-sm text-secondary-600 space-y-2">
                      <li>Superficie: fino a 6 mq</li>
                      <li>Doccia: 70x100 cm</li>
                      <li>Lavabo: 100 cm</li>
                      <li>Altezza rivestimenti: 200 cm</li>
                    </ul>
                  </div>
                  <div className="border border-secondary-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                      Impianti
                    </h3>
                    <ul className="text-sm text-secondary-600 space-y-2">
                      <li>4 punti acqua idraulica</li>
                      <li>Scarico doccia e wc</li>
                      <li>Impianto gas scaldabagno (se richiesto)</li>
                      <li>Collegamento impianto elettrico</li>
                    </ul>
                  </div>
                  <div className="border border-secondary-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                      Finiture
                    </h3>
                    <ul className="text-sm text-secondary-600 space-y-2">
                      <li>Pavimenti ceramica/gres</li>
                      <li>Rivestimenti 200 cm</li>
                      <li>Silicone bianco sanitario</li>
                      <li>Arredo funzionale</li>
                    </ul>
                  </div>
                  <div className="border border-secondary-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                      Tempi
                    </h3>
                    <ul className="text-sm text-secondary-600 space-y-2">
                      <li>Durata media: 8 giorni lavorativi</li>
                      <li>Lavori da lunedì a venerdì</li>
                      <li>Pulizia giornaliera cantiere</li>
                      <li>Orari 8-17</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Color options */}
              <div className="mb-12">
                <h2 className="font-display font-bold text-2xl text-secondary-900 mb-6">
                  Opzioni colore
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: 'Beige', desc: 'Caldo e accogliente' },
                    { name: 'Grigio', desc: 'Moderno e elegante' },
                    { name: 'Azzurrino', desc: 'Fresco e luminoso' },
                  ].map((color) => (
                    <div key={color.name} className="border-2 border-secondary-200 rounded-lg p-6 hover:border-primary-600 transition-colors cursor-pointer">
                      <div className="w-16 h-16 rounded-lg mb-4 border-2 border-secondary-300" style={{
                        backgroundColor: color.name === 'Beige' ? '#E8DCC4' : color.name === 'Grigio' ? '#A9A9A9' : '#ADD8E6'
                      }} />
                      <h3 className="font-semibold text-lg text-secondary-900">
                        {color.name}
                      </h3>
                      <p className="text-secondary-600">{color.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finishes */}
              <div className="mb-12">
                <h2 className="font-display font-bold text-2xl text-secondary-900 mb-6">
                  Finiture accessori
                </h2>
                <div className="space-y-4">
                  <div className="border border-secondary-200 rounded-lg p-4 flex justify-between items-center">
                    <span className="font-medium text-secondary-900">Acciaio cromato</span>
                    <span className="text-primary-600 font-semibold">Incluso</span>
                  </div>
                  <div className="border border-secondary-200 rounded-lg p-4 flex justify-between items-center">
                    <span className="font-medium text-secondary-900">Nero opaco</span>
                    <span className="text-primary-600 font-semibold">+200 €</span>
                  </div>
                </div>
              </div>

              {/* Conditions */}
              <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-12">
                <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                  Condizioni importanti
                </h3>
                <ul className="text-secondary-600 space-y-2">
                  <li>✓ Prezzo valido fino al secondo piano</li>
                  <li>✓ +2% per ogni piano superiore</li>
                  <li>✓ Lavori non inclusi: strutture esterne, asportazione muri, etc.</li>
                  <li>✓ Impianti preesistenti: valutazione con sopralluogo</li>
                </ul>
              </div>
            </div>

            {/* Sidebar - CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-secondary-50 rounded-lg p-6 border border-secondary-200">
                <div className="text-center mb-8">
                  <p className="text-secondary-600 mb-2">Prezzo a partire da</p>
                  <p className="text-4xl font-bold text-primary-600">
                    6.999 €
                  </p>
                  <p className="text-sm text-secondary-600 mt-2">
                    per bagno fino a 6 mq
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <Link href="/contatti?service=bagno-chiavi-in-mano" className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      Richiedi preventivo
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/393201234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-accent-green text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                      💬 WhatsApp
                    </button>
                  </a>
                  <a href="tel:+39 320 123 4567" className="block">
                    <button className="w-full flex items-center justify-center gap-2 border-2 border-secondary-900 text-secondary-900 px-4 py-3 rounded-lg font-semibold hover:bg-secondary-100 transition-colors">
                      📞 Chiama
                    </button>
                  </a>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Vantaggi del pacchetto
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Prezzo fisso e trasparente',
                      'Lavori completi',
                      'Tempi definiti',
                      'Professionisti coordinati',
                      'Garanzia sui lavori',
                    ].map((vantage, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-600">{vantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
