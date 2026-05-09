export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-10 text-white">
      <div className="container-page grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-xl font-black">LaGiustaSoluzione Multiservizi</div>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Ecosistema digitale di servizi per la casa nella Piana di Sant’Eufemia.
          </p>
        </div>
        <div>
          <div className="mb-3 font-bold">Servizi</div>
          <p className="text-sm leading-7 text-slate-300">
            Bagno, porte interne, parquet galleggiante, box doccia, lucernai, tinteggiatura e pavimenti.
          </p>
        </div>
        <div>
          <div className="mb-3 font-bold">Contatti</div>
          <p className="text-sm leading-7 text-slate-300">
            Tel. 333 123 4567<br />
            WhatsApp sempre disponibile<br />
            Lamezia Terme e provincia
          </p>
        </div>
      </div>
    </footer>
  );
}
