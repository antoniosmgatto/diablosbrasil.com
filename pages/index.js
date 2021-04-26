import Head from 'next/head'

export default function Home() {

  const structuredData = {
    "@context": "http://www.schema.org",
    "@type": "BarOrPub",
    name: "Diablos MC Brasil",
    url: "https://diablosbrasil.com",
    logo: "https://i.imgur.com/pWrHvIA.jpg",
    image: "https://i.imgur.com/pWrHvIA.jpg",
    description:
      "Associação de motociclistas que buscam os verdadeiros ideais de liberdade e expressão, pelas longas estradas desse inferno.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Capitão Tomas Carvalho de Camargo, 448",
      addressLocality: "São José dos Pinhais",
      addressRegion: "Paraná",
      postalCode: "83035-440",
      addressCountry: "Brazil",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-25.5247791",
      longitude: "-49.2133169",
    },
    hasMap:
      "https://www.google.com/maps/place/DIABLOS+M.C/@-25.5247791,-49.2133169,17z/data=!3m1!4b1!4m5!3m4!1s0x94dcfb41bc769b9d:0x93a2d18892d0bbc7!8m2!3d-25.524784!4d-49.2111282",
    openingHours: "Fr 19:00-01:00",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "general",
    },
  };

  return (
    <div className="bg-black">
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        <video className="fixed -z-10 w-screen h-auto" autoPlay muted loop>
          <source src="/diablos_intro.mp4" type="video/mp4" />
        </video>

        <address>
          Rua Capitão Tomas Carvalho de Camargo, 448 - Cidade Jardim, São José
          dos Pinhais, Paraná, 83035-440
        </address>
      </main>

      <footer className="fixed left-0 bottom-0 w-screen h-2 flex justify-center p-4 text-white">
        <span>
          &copy; {new Date().getFullYear()} Diablos MC Brasil, Todos os direitos
          reservados
        </span>
      </footer>
    </div>
  );
}
