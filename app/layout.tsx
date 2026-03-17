import "./globals.css";

export const metadata = {
  title: "nle sensi",
  description: "painel de sensibilidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
