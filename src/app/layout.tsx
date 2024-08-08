import type { Metadata } from "next";
import "./globals.css";
import WhatsappButton from "@/componentes/helpers/WhatsappBtn";
import ScrollToTopButton from "@/componentes/helpers/ScrollToTopBtn";
import Menu from "@/componentes/menus/Menu";
import Footer from "@/componentes/helpers/Footer";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import ModalFreteGratis from "@/componentes/helpers/ModalPopUp";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Komode Móveis e Decorados",
  description:
    "Encontre tudo que você precisa para a sua casa bem aqui! A melhor loja de móveis do Rio de Janeiro! Fale com os nossos vendedores e confirme!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${montserrat.className} ${roboto.className}`}
    >
      <head>
        <meta property="og:title" content="Komode Móveis" />
        <meta
          property="og:description"
          content="Conheça a Komode Móveis, encontre tudo que precisa para o seu lar bem aqui!"
        />
        <meta property="og:image" content="/assets/mini.png" />
        <meta property="og:url" content="https://komodemoveis.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="icon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '364157642748124');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=364157642748124&ev=PageView&noscript=1"
            alt="pixel fb"
          />
        </noscript>
      </head>

      <body>
        <Menu />
        {children}
        <WhatsappButton />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
