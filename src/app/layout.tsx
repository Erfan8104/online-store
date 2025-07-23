import { CartProvider } from "./../app/context/CartContext";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Online Store",
  description: "An online store built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
