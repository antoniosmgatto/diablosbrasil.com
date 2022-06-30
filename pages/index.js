import Head from 'next/head'
import { About, BackgroundVideo, Footer, Header } from '../components';

export default function Home() {

  return (
    <div className="bg-black text-white font-mono">
      <Head>
        <title>Diablos MC Brasil</title>
        <meta property="og:title" content="Diablos MC Brasil" />
        <meta property="og:url" content="https://diablosbrasil.com" />
        <meta
          name="og:description"
          content="Associação de motociclistas que buscam os verdadeiros ideais de liberdade e expressão, pelas longas estradas desse inferno."
        />
        <meta
          name="description"
          content="Associação de motociclistas que buscam os verdadeiros ideais de liberdade e expressão, pelas longas estradas desse inferno."
        />
        <meta name="keywords" content="Diablos, Diablos MC, Motociclismo" />
        <meta name="author" content="Antonio Gatto" />

        <link rel="canonical" href="https://diablosbrasil.com" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link href="./fonts/old-stamper.regular-webfont.css" rel="stylesheet" />
      </Head>

      <Header />

      <BackgroundVideo />

      <main>
        <div className="relative w-full h-screen flex flex-col justify-around text-center font-old-stamper">
          <div className="flex flex-col items-center">
            <img
              src="./diablos_logo.png"
              className="object-cover h-72 lg:h-96"
              alt="Diablos MC Brasil Logo"
            />

            <h1 className="text-5xl lg:text-6xl mt-10">Diablos MC Brasil</h1>
          </div>

          <div>
            <h3 className="text-2xl">Sanjo Originals</h3>
            <h5 className="text-lg lg:mt-4">4.13.3</h5>
          </div>
        </div>

        <About />
      </main>

      <Footer />
    </div>
  );
}
