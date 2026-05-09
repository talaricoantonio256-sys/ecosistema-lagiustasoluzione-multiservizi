import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecosistema LaGiustaSoluzione Multiservizi",
  description: "Servizi per la casa nella Piana di Sant’Eufemia: bagno, porte, parquet, box doccia, lucernai e ristrutturazioni su misura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
