import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'
import { Header } from '../components';

import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const currentYear = new Date().getFullYear();

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

      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        poster
      >
        <source src="./background_video.mp4" type="video/mp4" />
      </video>

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

        <section
          id="about"
          className="relative w-full text-3xl font-medium flex justify-center items-center"
        >
          <div className="max-w-4xl leading-relaxed text-justify">
            <h2 className="text-center uppercase mb-10">História</h2>

            <p>
              <strong>DIABLOS,</strong> termo geralmente utilizado para designar
              a entidade excluída do céu.
            </p>
            <p className="py-10">
              Muitas vezes, também, somos excluídos pela sociedade, por nossos
              comportamentos, nossas idéias, pelo nosso visual e etc, que não
              condizem com a moda atualmente imposta para o ser humano.
            </p>
            <p>
              Este é o DIABLOS M.C., associação de motociclistas que buscam os
              verdadeiros ideais de liberdade e expressão, pelas longas estradas
              desse inferno.
            </p>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="w-full h-screen bg-[url('/photos/diablos_mc_estrada_5.jpg')] bg-top bg-cover bg-no-repeat flex flex-col justify-between text-center p-5 lg:px-20 lg:py-10"
      >
        <div>
          <h4 className="uppercase font-old-stamper text-3xl">Sede</h4>

          <address className="text-xl mt-6">
            <div>Rua Joaquim Nabuco, 18</div>
            <div>Cidade Jardim, São José dos Pinhais - PR</div>
            <div>83040-210</div>
          </address>
        </div>

        <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between">
          <ul className="flex justify-between w-40">
            <li>
              <a
                href="https://www.facebook.com/diablosmcbrasil"
                target="blank"
                rel="nofollow"
              >
                <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/diablosmcbrasil"
                target="blank"
                rel="nofollow"
                className="ml-4"
              >
                <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/channel/UCLtesRXmcG3QM2u4jIuUw0w"
                target="blank"
                rel="nofollow"
                className="ml-4"
              >
                <FontAwesomeIcon icon={faYoutube} color="white" size="2x" />
              </a>
            </li>
          </ul>

          <div className="mt-10 lg:mt-0">
            &copy; {currentYear} Diablos MC Brasil. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
