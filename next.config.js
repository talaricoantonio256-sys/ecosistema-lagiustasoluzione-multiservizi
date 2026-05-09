import { Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contatti" className="bg-brand-blue px-5 py-16 text-white">
      <div className="container-page text-center">
        <h2 className="mb-4 text-4xl font-black">
          Vuoi migliorare la tua casa?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-blue-100">
          Contattaci per un sopralluogo o per capire quale servizio è più adatto alla tua esigenza.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="tel:+393331234567"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-lg font-black text-brand-blue"
          >
            <Phone size={20} />
            Chiama ora
          </a>
          <a
            href="https://wa.me/393331234567"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-7 py-4 text-lg font-black text-white"
          >
            <MessageCircle size={20} />
            Scrivi su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
