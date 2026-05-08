'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import Button from '@/components/Button'
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import Link from 'next/link'

interface FormData {
  name: string
  phone: string
  comune: string
  service: string
  description: string
  photo?: File
  contactPreference: 'whatsapp' | 'phone' | 'email'
}

export default function ContactsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    comune: '',
    service: 'ristrutturazione-bagno',
    description: '',
    contactPreference: 'whatsapp',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement
      setFormData({
        ...formData,
        [name]: fileInput.files?.[0],
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simula l'invio del form
    console.log('Form data:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const services = [
    'Ristrutturazione bagno chiavi in mano',
    'Porte interne',
    'Parquet galleggiante',
    'Box doccia',
    'Mobile bagno',
    'Sanitari',
    'Tinteggiatura',
    'Pavimenti',
    'Lucernai',
    'Ristrutturazioni complete',
  ]

  const comuni = [
    'Lamezia Terme',
    'Sant\'Eufemia d\'Aspromonte',
    'San Vito',
    'Gizzeria',
    'Pianopoli',
    'Decollatura',
    'Platania',
    'Serrastretta',
    'Zagarise',
    'Curinga',
    'Acconia',
    'Marcellinara',
    'Maida',
    'Montepaone',
    'Montauro',
    'Petrizzi',
    'Piccioni',
    'Santa Caterina dello Ionio',
    'Santo Stéfano di Gioiosa Ionica',
    'Taverna',
    'Altro',
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Contattaci
          </h1>
          <p className="text-xl text-secondary-600">
            Siamo a tua disposizione per rispondere a tutte le tue domande e fornire un preventivo personalizzato
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-secondary-900 mb-8 text-center">
            Come contattarci
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <a
              href="tel:+39-320-1234567"
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center border border-secondary-200"
            >
              <Phone size={32} className="text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                Chiama
              </h3>
              <p className="text-secondary-600 mb-4">
                Risposta immediata durante gli orari di ufficio
              </p>
              <p className="text-primary-600 font-semibold">
                320 123 4567
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/393201234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center border border-secondary-200"
            >
              <MessageCircle size={32} className="text-accent-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                WhatsApp
              </h3>
              <p className="text-secondary-600 mb-4">
                Messaggio veloce disponibile 24/7
              </p>
              <p className="text-accent-green font-semibold">
                Invia messaggio
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@lagiustasoluzione.it"
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center border border-secondary-200"
            >
              <Mail size={32} className="text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                Email
              </h3>
              <p className="text-secondary-600 mb-4">
                Risposta entro 24 ore lavorative
              </p>
              <p className="text-primary-600 font-semibold text-sm">
                info@lagiustasoluzione.it
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-secondary-200 p-8">
                <h2 className="font-display font-bold text-2xl text-secondary-900 mb-6">
                  Richiesta preventivo
                </h2>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-green-900 mb-1">
                      ✓ Richiesta ricevuta!
                    </h3>
                    <p className="text-green-800 text-sm">
                      Grazie per la tua richiesta. Ti ricontatteremo al più presto per valutare il servizio richiesto.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-900 mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                      placeholder="Es. Mario Rossi"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-900 mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                      placeholder="320 123 4567"
                    />
                  </div>

                  {/* Comune */}
                  <div>
                    <label htmlFor="comune" className="block text-sm font-medium text-secondary-900 mb-2">
                      Comune *
                    </label>
                    <select
                      id="comune"
                      name="comune"
                      value={formData.comune}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                    >
                      <option value="">Seleziona un comune...</option>
                      {comuni.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Servizio */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-secondary-900 mb-2">
                      Servizio richiesto *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                    >
                      {services.map((s) => (
                        <option key={s} value={s.toLowerCase().replace(/\s+/g, '-')}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-secondary-900 mb-2">
                      Descrizione intervento *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 resize-none"
                      placeholder="Descrivi dettagli dell'intervento che desideri, stato attuale, esigenze specifiche..."
                    />
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-secondary-900 mb-2">
                      Allega foto (opzionale)
                    </label>
                    <input
                      type="file"
                      id="photo"
                      name="photo"
                      onChange={handleChange}
                      accept="image/*"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                    />
                    <p className="text-xs text-secondary-500 mt-1">
                      Formati supportati: JPG, PNG. Massimo 5MB
                    </p>
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-3">
                      Come preferisci essere contattato? *
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'whatsapp', label: 'WhatsApp' },
                        { value: 'phone', label: 'Telefono' },
                        { value: 'email', label: 'Email' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="contactPreference"
                            value={option.value}
                            checked={formData.contactPreference === option.value}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary-600"
                          />
                          <span className="text-secondary-900">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Invia richiesta
                    </Button>
                  </div>

                  <p className="text-xs text-secondary-500 text-center">
                    I tuoi dati verranno utilizzati solo per contattarti riguardo la tua richiesta
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Info Box */}
              <div className="bg-blue-50 border-l-4 border-primary-600 rounded-r-lg p-6">
                <h3 className="font-semibold text-lg text-secondary-900 mb-4">
                  Informazioni utili
                </h3>
                <ul className="space-y-3 text-secondary-700 text-sm">
                  <li className="flex gap-2">
                    <span>📍</span>
                    <span><strong>Territorio servito:</strong> Piana di Sant'Eufemia e comuni limitrofi</span>
                  </li>
                  <li className="flex gap-2">
                    <span>⏰</span>
                    <span><strong>Orari:</strong> Lunedì-Venerdì 8-17. Sabato su richiesta</span>
                  </li>
                  <li className="flex gap-2">
                    <span>📋</span>
                    <span><strong>Risposte:</strong> Entro 24 ore dal contatto</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span><strong>Sopralluogo:</strong> Gratuito per valutare l'intervento</span>
                  </li>
                </ul>
              </div>

              {/* Quick contact */}
              <div className="bg-secondary-900 text-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">
                  Contatto diretto
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-secondary-300 text-sm mb-1">Telefono</p>
                    <a href="tel:+39-320-1234567" className="font-semibold text-white hover:text-primary-300 transition-colors">
                      320 123 4567
                    </a>
                  </div>
                  <div>
                    <p className="text-secondary-300 text-sm mb-1">Email</p>
                    <a href="mailto:info@lagiustasoluzione.it" className="font-semibold text-white hover:text-primary-300 transition-colors break-all">
                      info@lagiustasoluzione.it
                    </a>
                  </div>
                  <div>
                    <p className="text-secondary-300 text-sm mb-2">WhatsApp</p>
                    <a
                      href="https://wa.me/393201234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-semibold text-white hover:text-primary-300 transition-colors"
                    >
                      💬 Apri chat
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="bg-white border border-secondary-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-secondary-900 mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-primary-600" />
                  Sede operativa
                </h3>
                <p className="text-secondary-600 text-sm mb-3">
                  Piana di Sant'Eufemia<br />
                  Lamezia Terme (CZ)
                </p>
                <p className="text-xs text-secondary-500">
                  Orari: Lunedì-Venerdì 8-17
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-secondary-900 mb-8 text-center">
            Domande frequenti
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Quanto tempo impiegate a rispondere?',
                a: 'Rispondiamo entro 24 ore dalla ricezione della richiesta. Se urgente, contattaci direttamente al telefono.',
              },
              {
                q: 'Il sopralluogo è gratuito?',
                a: 'Sì, il sopralluogo è completamente gratuito. Durante la visita valutiamo l\'intervento e forniamo un preventivo senza impegno.',
              },
              {
                q: 'Quali comuni servite?',
                a: 'Serviamo la Piana di Sant\'Eufemia, Lamezia Terme e i comuni limitrofi nelle province di Catanzaro, Vibo Valentia e Cosenza.',
              },
              {
                q: 'Potete fornire garanzia sui lavori?',
                a: 'Sì, tutti i nostri lavori includono garanzia. I dettagli sono specificati nel contratto di lavoro.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white border border-secondary-200 rounded-lg">
                <summary className="cursor-pointer font-semibold text-secondary-900 p-4 hover:bg-secondary-50 transition-colors">
                  {faq.q}
                </summary>
                <div className="px-4 pb-4 text-secondary-600 border-t border-secondary-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
