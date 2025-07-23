import "./globals.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import ClientLayout from "./ClientLayout"; // 👈 wrap with provider here

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
        <ClientLayout>
          <Header />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
