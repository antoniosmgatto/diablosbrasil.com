import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'

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

        <nav>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="#about">História</a>
            </li>
            <li>
              <a href="#photos">Fotos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </Head>

      <main>
        <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
          <img
            src="/diablos_logo.jpeg"
            alt="Diablos logo"
            className="z-10 h-3/4"
          />
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

        <section
          id="photos"
          className="relative w-full text-3xl font-medium flex justify-center items-center"
        >
          <div className="max-w-4xl">
            <h2 className="text-center uppercase mb-10">Fotos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <img
                  className=""
                  src="/photos/diablos-1.jpeg"
                  alt="Foto Diablos na Estrada"
                />
              </div>
              <div className="relative">
                <img
                  className=""
                  src="/photos/diablos-1.jpeg"
                  alt="Foto Diablos na Estrada"
                />
              </div>
              <div className="relative">
                <img
                  className=""
                  src="/photos/diablos-1.jpeg"
                  alt="Foto Diablos na Estrada"
                />
              </div>
              <div className="relative">
                <img
                  className=""
                  src="/photos/diablos-1.jpeg"
                  alt="Foto Diablos na Estrada"
                />
              </div>
              <div className="relative">
                <img
                  className=""
                  src="/photos/diablos-1.jpeg"
                  alt="Foto Diablos na Estrada"
                />
              </div>
              <div className="relative">
                <img
                  className=""
                  src="/photos/diablos-1.jpeg"
                  alt="Foto Diablos na Estrada"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="w-full h-auto">
        <div className="container mx-auto h-full py-14 flex">
          <div className="flex-1 flex items-end">
            <address>
              <p>Rua Capitão Tomas Carvalho de Camargo, 448</p>
              <p>Cidade Jardim, São José dos Pinhais - PR, 83035-440</p>
            </address>
          </div>
          <div className="flex flex-col justify-around">
            <div className="text-right">
              <a
                href="https://www.facebook.com/diablosmcbrasil"
                target="blank"
                rel="nofollow"
              >
                <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />
              </a>

              <a
                href="https://www.instagram.com/diablosmcbrasil"
                target="blank"
                rel="nofollow"
                className="ml-4"
              >
                <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCLtesRXmcG3QM2u4jIuUw0w"
                target="blank"
                rel="nofollow"
                className="ml-4"
              >
                <FontAwesomeIcon icon={faYoutube} color="white" size="2x" />
              </a>
            </div>

            <div className="text-right pt-2">
              &copy; {currentYear} Diablos MC Brasil. Todos os
              direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
