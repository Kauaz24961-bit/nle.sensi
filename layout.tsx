import "./globals.css";

export const metadata = {
  title: "nle sensi",
  description: "Painel de sensibilidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
