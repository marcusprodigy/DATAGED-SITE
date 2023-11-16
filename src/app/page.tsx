"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const sliderElement = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const moveSlide = () => {
      if (sliderElement.current !== null) {
        const currentTransform = window.getComputedStyle(
          sliderElement.current
        ).transform;
        const currentTranslateX = parseInt(currentTransform.split(",")[4]) || 0;

        // Defina o limite para inverter a direção
        const limit = -100;

        // Verifique se atingiu o limite
        const newTranslateX =
          currentTranslateX <= limit ? 0 : currentTranslateX - 100;

        sliderElement.current.style.transform = `translateX(${newTranslateX}%)`;
      }
    };

    // Executar a função a cada segundo
    const intervalId = setInterval(moveSlide, 5000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <body className="w-screen h-screen bg-white">
      <header className="z-20 w-screen h-16 px-10 fixed flex items-center justify-between bg-white shadow-md shadow-slate-600">
        <img
          src="https://static.wixstatic.com/media/ed2f55_6dfd5ceccc1d4331877ab0defcf7b1ec~mv2.png/v1/fill/w_252,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1-Logo-Dataged.png"
          alt="LogoDataged"
          className="w-auto h-2/4"
        />
        <nav className="flex h-full items-center">
          <ul className="flex h-full items-center justify-end gap-8 text-gray-600 text-md font-thin">
            <li>
              <input
                type="button"
                value="Dataged"
                className=" cursor-pointer"
              />
            </li>
            <li>
              <input type="button" value="Sistema" />
            </li>
            <li>
              <input type="button" value="Serviços" />
            </li>
            <li>
              <input type="button" value="Nossos Clientes" />
            </li>
            <li>
              <input type="button" value="Login Dataged" />
            </li>
          </ul>
          <button className="ml-8 flex items-center justify-center h-2/3 w-32  bg-lime-500 hover:bg-cyan-700 transition-colors duration-300 rounded-md">
            <p className=" text-white text-md font-bold ">Contato</p>
          </button>
        </nav>
      </header>
      <main className="w-full h-screen overscroll-y-auto text-white pt-16">
        <header className="w-full  flex  overflow-hidden">
          <img
            ref={sliderElement}
            src="https://static.wixstatic.com/media/ed2f55_9d03e50461094dfe86e2402e3d48d271~mv2.png/v1/fill/w_1310,h_328,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ed2f55_9d03e50461094dfe86e2402e3d48d271~mv2.png"
            alt=""
            id="style"
            className=" transition-all duration-700 ease-in-out w-full h-auto"
          />
          <img
            ref={sliderElement}
            src="https://static.wixstatic.com/media/ed2f55_90aaedb99554475e9919666c3d827baf~mv2.png/v1/fill/w_1310,h_328,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ed2f55_90aaedb99554475e9919666c3d827baf~mv2.png"
            alt=""
            id="style"
            className=" transition-all duration-700 ease-in-out  w-full h-auto"
          />
        </header>
        <article className="w-full h-auto flex flex-col items-center bg-white">
          <section className="flex w-5/6 h-96  items-center justify-around">
            <div>
              <h1 className=" text-6xl font-light text-gray-800 mb-10">
                Data<b className="font-bold text-lime-500">ged,</b>
              </h1>
              <h2 className=" text-2xl font-medium text-gray-800">
                transformando o mundo,
              </h2>
              <h2 className=" text-3xl font-medium text-lime-500 mb-5">
                um <b>DOCUMENTO</b> por vez.
              </h2>
              <p className=" text-sm  text-black ">
                Envio e recebimento de documentos com poucos cliques, muita
                <br />
                agilidade, segurança e economia.
              </p>
              <div className="flex gap-4 mt-10">
                <button className=" bg-green-700 w-40 h-10 rounded-md hover:bg-green-800 active:shadow-inner active:shadow-black">
                  Entre em contato
                </button>
                <button className=" bg-cyan-700 w-40 h-10 rounded-md hover:bg-cyan-800 active:shadow-inner active:shadow-black">
                  Nossos Serviços
                </button>
              </div>
            </div>
            <img
              src="https://static.wixstatic.com/media/ed2f55_f081e97fa61e46ebb72fd4faa5ab2cec~mv2.png/v1/fill/w_652,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sistema030822.png"
              alt=""
              className="h-full"
            />
          </section>
          <section className="flex w-full h-80 bg-lime-500  items-center justify-around shadow-inner shadow-gray-800 ">
            <section className=" w-5/6 h-3/4 bg-lime-600 items-center flex relative overflow-hidden">
              <div className="group relative h-full w-1/3 border-r-2 bg-lime-500 border-slate-100 flex transition-all duration-700 items-center justify-center hover:z-10 hover:w-3/4 hover:bg-lime-600">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/ed2f55_1f0515268c9343929f198beba46b74c9~mv2.png/v1/fill/w_85,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/workflow.png"
                  className=" h-30 z-0 w-auto transition-all duration-700 ease-in-out group-hover:-translate-x-40 group-hover:absolute"
                />
                <div className="absolute w-2/4 right-10  transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className=" text-xl font-extrabold">
                    Workflow integrado
                  </h3>
                  <br />
                  <p className=" text-md font-light">
                    Mapeamento de processos de cada tarefa para gestão
                    estruturada do fluxo.
                  </p>
                </div>
              </div>
              <div className=" group relative h-full w-1/3 border-r-2 bg-lime-500 border-slate-100 flex items-center justify-center transition-all duration-700  hover:w-full hover:z-10  hover:bg-lime-600">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/ed2f55_84ab779ed47e494cb89e6a53af267105~mv2.png/v1/fill/w_76,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ed2f55_84ab779ed47e494cb89e6a53af267105~mv2.png"
                  className="h-30 w-auto transition-all duration-700 group-hover:-translate-x-40 group-hover:absolute "
                />
                <div className="absolute w-2/4 right-10  transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className=" text-xl font-extrabold">
                    Assinatura digital{" "}
                  </h3>
                  <br />
                  <p className=" text-md font-light">
                    Assinatura digital ICP Brasil integrada, com envio de
                    documentos por SMS, e-mail e whatsapp.
                  </p>
                </div>
              </div>
              <div className=" group relative h-full w-1/3  bg-lime-500 flex items-center justify-center transition-all duration-700  hover:w-full hover:z-10  hover:bg-lime-600">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/ed2f55_b61352171c6e4944bcc3ca8d12b22fe7~mv2.png/v1/fill/w_67,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ed2f55_b61352171c6e4944bcc3ca8d12b22fe7~mv2.png"
                  className="h-30 w-auto transition-all duration-700 group-hover:-translate-x-40 group-hover:absolute  "
                />
                <div className="absolute w-2/4 right-10  transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className=" text-xl font-extrabold">
                    Gestão documental{" "}
                  </h3>
                  <br />
                  <p className=" text-md font-light">
                    Gestão completa de documentos, da digitalização e indexação
                    à criação de documentos pelo editor do sistema.
                  </p>
                </div>
              </div>
            </section>
          </section>
        </article>
        <footer className="w-full h-56 bg-slate-500 flex items-center justify-center">
          <article className="w-4/6 h-4/5 flex ">
            <section className="w-1/2 h-full flex flex-col pt-5">
              <a
                className="mb-6"
                href="https://www.google.com/maps/place/Dataged/@-3.7564496,-38.5181882,15z
              /data=!4m6!3m5!1s0x7c748db0f66fe09:0x37ed7fc3e20d0426!8m2!3d-3.7564496!4d-
              38.5181882!16s%2Fg%2F12qgwqcwn?entry=ttu"
              >
                Rua Monsenhor Salazar, 183 - São João do Tauape,
              </a>
              <a className="mb-6" href="https://wa.me/5585992229046">
                {"(85)9.92229046"}
              </a>
              <a className="mb-6" href="mailto:contato@dataged.com">
                contato@dataged.com
              </a>
            </section>
            <section className="w-1/2 h-full flex flex-col items-center pt-5 ">
              <div className="mb-6 flex gap-6">
                <a className="mb-6" href="https://www.instagram.com/dataged/">
                  <img
                    src="https://static.wixstatic.com/media/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png/v1/fill/w_35,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png"
                    alt=""
                    className=" w-10 h-10"
                  />
                </a>
                <a
                  className="mb-6"
                  href="https://www.facebook.com/dataged.oficial"
                >
                  <img
                    src="https://static.wixstatic.com/media/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png/v1/fill/w_35,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png"
                    alt=""
                    className=" w-10 h-10"
                  />
                </a>
                <a
                  className="mb-6"
                  href="https://www.linkedin.com/company/dataged/"
                >
                  <img
                    src="https://static.wixstatic.com/media/11062b_7dcffe5daf2944b7be0a46ac6d472634~mv2.png/v1/fill/w_35,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7dcffe5daf2944b7be0a46ac6d472634~mv2.png"
                    alt=""
                    className=" w-10 h-10"
                  />
                </a>
              </div>
              <p className=" text-xl font-semibold">Dataged Informática Ltda</p>
            </section>
          </article>
        </footer>
      </main>
    </body>
  );
}
