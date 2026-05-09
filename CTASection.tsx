import { Phone, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container-page flex items-center justify-between px-5 py-4">
        <div>
          <div className="text-xl font-black tracking-tight md:text-2xl">
            LaGiustaSoluzione
          </div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Multiservizi casa
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+393331234567"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 font-bold text-slate-900"
          >
            <Phone size={18} />
            333 123 4567
          </a>
          <a
            href="https://wa.me/393331234567"
            className="inline-flex items-center gap-2 rounded-md bg-brand-green px-4 py-2 font-bold text-white"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <a
          href="https://wa.me/393331234567"
          className="inline-flex items-center gap-2 rounded-md bg-brand-green px-4 py-2 text-sm font-bold text-white md:hidden"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
