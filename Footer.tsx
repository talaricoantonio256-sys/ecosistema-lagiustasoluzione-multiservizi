import { MessageCircle, ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
};

export default function ServiceCard({ title, description, price }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-orange">
        {price}
      </div>
      <h3 className="mb-3 text-2xl font-black">{title}</h3>
      <p className="mb-6 leading-7 text-slate-600">{description}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#contatti"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-4 py-3 font-bold text-white"
        >
          Scopri servizio <ArrowRight size={18} />
        </a>
        <a
          href="https://wa.me/393331234567"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-green px-4 py-3 font-bold text-brand-green"
        >
          WhatsApp <MessageCircle size={18} />
        </a>
      </div>
    </div>
  );
}
