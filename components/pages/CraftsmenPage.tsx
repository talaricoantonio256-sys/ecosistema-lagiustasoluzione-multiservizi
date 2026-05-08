'use client'

import Button from '@/components/Button'
import { CheckCircle, Users, Award, Zap } from 'lucide-react'
import Link from 'next/link'

export default function CraftsmenPage() {
  const craftsmen = [
    {
      title: 'Idraulici',
      desc: 'Impianti idrici, scarichi, riscaldamento',
      icon: '🔧',
    },
    {
      title: 'Piastrellisti',
      desc: 'Pavimenti, rivestimenti, mosaici',
      icon: '🧱',
    },
    {
      title: 'Falegnami',
      desc: 'Porte, infissi, arredo personalizzato',
      icon: '🪵',
    },
    {
      title: 'Montatori',
      desc: 'Montaggio infissi, mobili, strutture',
      icon: '🔨',
    },
    {
      title: 'Imbianchini',
      desc: 'Tinteggiatura, trattamenti pareti',
      icon: '🎨',
    },
    {
      title: 'Elettricisti',
      desc: 'Impianti elettrici, illuminazione',
      icon: '⚡',
    },
    {
      title: 'Cartongessisti',
      desc: 'Pareti, controsoffitti, isolamento',
      icon: '🏗️',
    },
    {
      title: 'Coperturisti',
      desc: 'Tetti, grondaie, impermeabilizzazioni',
      icon: '🏘️',
    },
  ]

  const trustReasons = [
    {
      icon: <Award size={32} className="text-primary-600" />,
      title: 'Selezione rigorosa',
      desc: 'Ogni artigiano è scelto per competenza, serietà e affidabilità. Verifichiamo le qualifiche e i riferimenti.',
    },
    {
      icon: <Users size={32} className="text-primary-600" />,
      title: 'Noi organizziamo',
      desc: 'Noi coordinamo e controlliamo tutto. Gli artigiani eseguono i lavori secondo standard definiti da noi.',
    },
    {
      icon: <CheckCircle size={32} className="text-primary-600" />,
      title: 'Controlli costanti',
      desc: 'Verifiche giornaliere sulla qualità, rispetto dei tempi e sicurezza. Zero sorprese.',
    },
    {
      icon: <Zap size={32} className="text-primary-600" />,
      title: 'Garanzia assicurata',
      desc: 'Garanzia su tutti i lavori. Se emerge un difetto, interveniamo senza costi aggiuntivi.',
    },
  ]

  const steps = [
    {
      num: '1',
      title: 'Valutazione esigenza',
      desc: 'Analizza il tipo di lavoro e le competenze necessarie',
    },
    {
      num: '2',
      title: 'Selezione artigiano',
      desc: 'Sceglie l\'artigiano più idoneo dalla rete certificata',
    },
    {
      num: '3',
      title: 'Briefing e standard',
      desc: 'Comunica i dettagli del lavoro e gli standard di qualità richiesti',
    },
    {
      num: '4',
      title: 'Supervisione',
      desc: 'Verifica quotidiana dello stato avanzamento e qualità',
    },
    {
      num: '5',
      title: 'Collaudo',
      desc: 'Rilievo finale e correzione di eventuali piccole anomalie',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            La nostra rete di artigiani
          </h1>
          <p className="text-xl text-secondary-600 mb-6">
            Professionisti selezionati, coordinati e controllati
          </p>
          <p className="text-lg text-secondary-700">
            Non semplici fornitori, ma veri partner di qualità che garantiscono il miglior risultato per la tua casa.
          </p>
        </div>
      </section>

      {/* Modello operativo */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-8 text-center">
            Il nostro modello operativo
          </h2>
          <div className="bg-white rounded-lg p-8 border-2 border-primary-600">
            <p className="text-center text-lg font-semibold text-secondary-900 mb-8">
              Noi organizziamo, coordiniamo e controlliamo.<br />
              Gli artigiani eseguono le lavorazioni secondo standard definiti.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">📋</div>
                <h3 className="font-semibold text-secondary-900 mb-2">Selezione rigida</h3>
                <p className="text-secondary-600 text-sm">
                  Ogni artigiano passa una selezione per competenze, affidabilità e standard qualitativi
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">🎯</div>
                <h3 className="font-semibold text-secondary-900 mb-2">Coordinamento</h3>
                <p className="text-secondary-600 text-sm">
                  Pianifichiamo sequenza lavori, tempi e risorse. Ogni artigiano sa esattamente cosa fare
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">✓</div>
                <h3 className="font-semibold text-secondary-900 mb-2">Controllo qualità</h3>
                <p className="text-secondary-600 text-sm">
                  Verifiche giornaliere e collaudo finale. Garantiamo il rispetto degli standard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorie professionali */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-12 text-center">
            Professionalità coperte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftsmen.map((craft, idx) => (
              <div key={idx} className="bg-white border border-secondary-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{craft.icon}</div>
                <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                  {craft.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {craft.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perché fidarsi */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-12 text-center">
            6 motivi per fidarti della nostra rete
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustReasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-secondary-200">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-secondary-600">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 step collaborazione */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-12 text-center">
            Come collaboriamo con gli artigiani
          </h2>
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-stretch">
                <div className="flex-shrink-0 w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.num}
                </div>
                <div className="flex-grow bg-white border border-secondary-200 rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificazioni e standard */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-8 text-center">
            Standard e certificazioni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                ✓ Qualifiche verificate
              </h3>
              <p className="text-secondary-600 text-sm">
                Certificazioni professionali, patentini e iscrizioni all'Albo controllate regolarmente
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                ✓ Formazione continua
              </h3>
              <p className="text-secondary-600 text-sm">
                Aggiornamenti su nuove tecnologie, materiali e normative di sicurezza
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                ✓ Assicurazioni
              </h3>
              <p className="text-secondary-600 text-sm">
                Responsabilità civile e infortuni. Garanzie su tutti i lavori completati
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia lavoro */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-8 text-center">
            La nostra metodologia
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                Trasparenza totale
              </h3>
              <p className="text-secondary-600">
                Prezzi fissi concordati, niente sorprese. Ogni modifica è comunicata per iscritto.
              </p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                Monitoraggio costante
              </h3>
              <p className="text-secondary-600">
                Rapporti settimanali sullo stato dei lavori. Tu sei sempre informato dei progressi.
              </p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                Problema? Si risolve subito
              </h3>
              <p className="text-secondary-600">
                Se emerge una criticità, interveniamo immediatamente. La qualità è prioritaria.
              </p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                Garanzia post-lavori
              </h3>
              <p className="text-secondary-600">
                Garanzia di 12 mesi su tutti i lavori. Puoi contattarci per eventuali correzioni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-6">
            Affida i tuoi lavori a professionisti coordinati
          </h2>
          <p className="text-xl text-secondary-600 mb-8">
            Contattaci per discutere del tuo progetto. La consulenza è gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti">
              <Button variant="primary" size="lg">
                Richiedi preventivo
              </Button>
            </Link>
            <Link href="/catalogo">
              <Button variant="secondary" size="lg">
                Scopri i servizi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
