'use client'

import Button from '@/components/Button'
import { CheckCircle, ClipboardList, Hammer, Home, Zap } from 'lucide-react'
import Link from 'next/link'

export default function CompletePage() {
  const process = [
    {
      icon: <ClipboardList size={32} className="text-primary-600" />,
      title: 'Sopralluogo e analisi',
      desc: 'Veniamo a casa tua per valutare lo stato attuale, capire le tue esigenze e identificare eventuali criticità strutturali',
    },
    {
      icon: <Hammer size={32} className="text-primary-600" />,
      title: 'Progettazione',
      desc: 'Realizziamo il progetto personalizzato con render, specifiche tecniche e timeline dettagliata',
    },
    {
      icon: <Zap size={32} className="text-primary-600" />,
      title: 'Pianificazione lavori',
      desc: 'Organizziamo sequenza lavori, coordinamento artigiani, approvvigionamento materiali e cronoprogramma',
    },
    {
      icon: <Home size={32} className="text-primary-600" />,
      title: 'Esecuzione coordinata',
      desc: 'Supervisionamo ogni fase: demolizioni, impianti, finiture. Controllo qualità giornaliero',
    },
    {
      icon: <CheckCircle size={32} className="text-primary-600" />,
      title: 'Collaudo e consegna',
      desc: 'Verifica finale, test impianti, pulizia e handover completo. La tua casa è pronta',
    },
  ]

  const services = [
    'Demolizioni e smaltimento',
    'Impianti idraulici completi',
    'Impianti elettrici',
    'Impianti riscaldamento/raffreddamento',
    'Strutture e murature',
    'Isolamento termico',
    'Pavimenti e rivestimenti',
    'Porte e infissi',
    'Impianti gas',
    'Finiture pareti',
    'Illuminazione design',
    'Arredi su misura',
  ]

  const benefits = [
    {
      title: 'Un referente unico',
      desc: 'Una sola persona che coordina tutto. Non devi gestire multiple imprese.',
    },
    {
      title: 'Qualità garantita',
      desc: 'Standard alti e controlli costanti. Garanzia sui lavori completati.',
    },
    {
      title: 'Tempi rispettati',
      desc: 'Cronoprogramma realistico e aderenza scrupolosa ai tempi concordati.',
    },
    {
      title: 'Prezzi trasparenti',
      desc: 'Preventivo dettagliato senza sorprese. Ogni modifica è autorizzata per iscritto.',
    },
    {
      title: 'Organizzazione professionale',
      desc: 'Pianificazione accurata, coordinamento artigiani, logistica materiali.',
    },
    {
      title: 'Zero stress',
      desc: 'Noi gestiamo tutto. Tu rimani aggiornato e informato su ogni aspetto.',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Ristrutturazioni complete su misura
          </h1>
          <p className="text-xl text-secondary-600 mb-6">
            Dall'analisi progettuale alla consegna finale
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border-l-4 border-primary-600">
            <h2 className="font-display font-bold text-2xl text-secondary-900 mb-4">
              Un servizio guidato, non un acquisto online
            </h2>
            <p className="text-lg text-secondary-600 mb-4">
              Per gli interventi completi analizziamo con cura ogni aspetto tecnico, economico e organizzativo. La ristrutturazione completa non è un prodotto acquistabile con un click, ma un percorso guidato che parte da sopralluogo, analisi, progettazione e pianificazione.
            </p>
            <p className="text-secondary-600">
              Vogliamo che tu sappia esattamente cosa aspettarti: tempi, costi, sequenza lavori e qualità attesa. Trasparenza totale dal primo giorno fino alla consegna.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-12 text-center">
            I 5 step del processo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white border border-secondary-200 rounded-lg p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                    Step {idx + 1}
                  </h3>
                  <h4 className="font-bold text-primary-600 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-secondary-600">
                    {step.desc}
                  </p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-center text-2xl text-primary-600">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Covered */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-8 text-center">
            Servizi inclusi nella ristrutturazione completa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-secondary-200">
                <CheckCircle size={20} className="text-primary-600 flex-shrink-0" />
                <span className="text-secondary-900">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Vantaggi */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-12 text-center">
            6 vantaggi della ristrutturazione completa coordinata
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  ✓
                </div>
                <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tempi indicativi */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-8 text-center">
            Tempi indicativi
          </h2>
          <div className="bg-white rounded-lg p-8 border border-secondary-200">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-secondary-200">
                <span className="font-semibold text-secondary-900">Sopralluogo e consultazione</span>
                <span className="text-primary-600 font-semibold">1-2 giorni</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-secondary-200">
                <span className="font-semibold text-secondary-900">Progettazione e preventivo</span>
                <span className="text-primary-600 font-semibold">3-5 giorni</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-secondary-200">
                <span className="font-semibold text-secondary-900">Pianificazione e preparazione</span>
                <span className="text-primary-600 font-semibold">2-3 giorni</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-secondary-200">
                <span className="font-semibold text-secondary-900">Esecuzione lavori</span>
                <span className="text-primary-600 font-semibold">Variabile (10-60 giorni)</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="font-semibold text-secondary-900">Collaudo e consegna</span>
                <span className="text-primary-600 font-semibold">1-2 giorni</span>
              </div>
            </div>
            <p className="text-sm text-secondary-600 mt-6 text-center">
              I tempi variano in base alla complessità dell'intervento e dimensioni della superficie
            </p>
          </div>
        </div>
      </section>

      {/* Fasi dettagliate */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-8 text-center">
            Fase per fase: cosa succede
          </h2>
          <div className="space-y-6">
            {[
              {
                phase: 'FASE 1: Sopralluogo',
                items: [
                  'Visita approfondita della tua casa',
                  'Rilievo fotografico e misurazioni',
                  'Identificazione problematiche strutturali',
                  'Analisi impianti esistenti',
                  'Raccolta preferenze estetiche e funzionali',
                ],
              },
              {
                phase: 'FASE 2: Analisi',
                items: [
                  'Valutazione tecnica interventi necessari',
                  'Analisi costi e tempistiche',
                  'Identificazione criticità e soluzioni',
                  'Coordinamento con fornitori materiali',
                  'Proposta di soluzioni alternative',
                ],
              },
              {
                phase: 'FASE 3: Progettazione',
                items: [
                  'Creazione render 3D degli spazi',
                  'Scelta materiali e finiture con te',
                  'Redazione progetto tecnico dettagliato',
                  'Stima realistica dei tempi',
                  'Preventivo itemizzato senza sorprese',
                ],
              },
              {
                phase: 'FASE 4: Pianificazione',
                items: [
                  'Organizzazione sequenza lavori',
                  'Selezione e coordinamento artigiani',
                  'Approvvigionamento materiali',
                  'Pianificazione logistica cantiere',
                  'Definizione comunicazioni giornaliere',
                ],
              },
              {
                phase: 'FASE 5: Esecuzione',
                items: [
                  'Inizio lavori secondo cronoprogramma',
                  'Controlli qualità giornalieri',
                  'Comunicazioni settimanali a te',
                  'Risoluzione rapida di criticità',
                  'Adeguamenti autorizzati per iscritto',
                ],
              },
              {
                phase: 'FASE 6: Collaudo',
                items: [
                  'Verifica finale completa di ogni intervento',
                  'Test funzionamento impianti',
                  'Pulizia accurata della casa',
                  'Consegna chiavi e documentazione',
                  'Spiegazione uso impianti e garanzie',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white border border-secondary-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-primary-600 mb-4">
                  {section.phase}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-0.5">•</span>
                      <span className="text-secondary-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impegni */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-8 text-center">
            I nostri impegni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              '✓ Preventivo trasparente e dettagliato',
              '✓ Cronoprogramma realistico e rispettato',
              '✓ Comunicazioni settimanali sullo stato lavori',
              '✓ Artigiani coordinati e supervisionati',
              '✓ Garanzia 12 mesi su tutti i lavori',
              '✓ Zero sorprese in corso d\'opera',
              '✓ Pulizia giornaliera della zona lavori',
              '✓ Rispetto della privacy e dei tempi tuoi',
            ].map((commitment, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-secondary-200">
                <p className="font-semibold text-secondary-900">
                  {commitment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-6">
            Pronto a trasformare la tua casa?
          </h2>
          <p className="text-xl text-secondary-600 mb-8">
            Contattaci per richiedere un sopralluogo gratuito. Non è un impegno, è il primo passo verso la casa che desideri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti?service=ristrutturazioni-complete">
              <Button variant="primary" size="lg">
                Richiedi sopralluogo
              </Button>
            </Link>
            <a href="https://wa.me/393201234567" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 bg-accent-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                💬 Parla con un consulente
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
