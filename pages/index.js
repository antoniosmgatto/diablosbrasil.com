import Head from 'next/head'

export default function Home() {
  return (
    <div>
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
      </Head>

      <main>
        <h1>Diablos MC Brasil</h1>
      </main>
    </div>
  );
}
