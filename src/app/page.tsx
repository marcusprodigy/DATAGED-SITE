"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="w-screen h-auto over bg-white">
      <header className="z-20 w-screen h-16 px-10 fixed flex items-center justify-between bg-white shadow-md shadow-slate-600">
        <img
          src="https://static.wixstatic.com/media/ed2f55_6dfd5ceccc1d4331877ab0defcf7b1ec~mv2.png/v1/fill/w_252,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1-Logo-Dataged.png"
          alt="LogoDataged"
          className="w-auto h-2/4"
        />
        <nav className="flex h-full items-center">
          <ul className="flex h-full items-center justify-end  gap-10 text-black text-md font-thin">
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
      <Slider {...settings}>
        <img
          src="https://static.wixstatic.com/media/ed2f55_9d03e50461094dfe86e2402e3d48d271~mv2.png/v1/fill/w_1310,h_328,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ed2f55_9d03e50461094dfe86e2402e3d48d271~mv2.png"
          alt=""
          className="w-full h-auto   transition-all duration-700 ease-in-out"
        />
        <img
          src="https://static.wixstatic.com/media/ed2f55_90aaedb99554475e9919666c3d827baf~mv2.png/v1/fill/w_1310,h_328,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ed2f55_90aaedb99554475e9919666c3d827baf~mv2.png"
          alt=""
          className="w-full h-auto transition-all duration-700 ease-in-out  "
        />
      </Slider>
      <main className="w-full overscroll-y-auto flex flex-col items-center text-white pt-16">
        <article className="w-full h-auto flex flex-col items-center bg-white">
          <section className="flex w-5/6 items-center justify-around">
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
                  <h3 className=" text-xl font-e  xtrabold">
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
          <section className="flex w-5/6 items-center justify-around">
            <img
              src="https://static.wixstatic.com/media/ed2f55_f79de309ef1b481f958ddcd15e86e6e0~mv2.png/v1/fill/w_745,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ICity.png"
              alt=""
              className="h-full"
            />
            <div>
              <h1 className="mt-10 text-6xl font-light text-gray-800 mb-10">
                Ponte entre governo
                <br /> e cidadãos
              </h1>
              <h2 className=" text-2xl mb-3 font-medium text-gray-800">
                Conta única
              </h2>
              <h2 className=" text-2xl mb-3 font-medium text-gray-800">
                Agendamento de serviços{" "}
              </h2>
              <h2 className=" text-2xl mb-3 font-medium text-gray-800">
                Teleatendimento{" "}
              </h2>
              <h2 className=" text-2xl mb-3 font-medium text-gray-800">
                Chatbot inteligente para atendimento virtual{" "}
              </h2>
              <h2 className=" text-2xl mb-3 font-medium text-gray-800">
                Central de serviços
              </h2>

              <div className="flex gap-4 mt-10 mb-10">
                <button className=" bg-cyan-700 w-64 h-16  rounded-md hover:bg-green-800 active:shadow-inner active:shadow-black">
                  Saiba Mais sobre ICities
                </button>
                <button className="  bg-green-700 w-64  h-16 rounded-md hover:bg-cyan-800 active:shadow-inner active:shadow-black">
                  Entre em contato
                </button>
              </div>
            </div>
          </section>
          <section className="flex w-screen h-72 bg-gray-300 items-center justify-around">
            <section className=" w-5/6 h-3/4 bg-gray-300 items-center flex relative overflow-hidden">
              <div className="group relative h-full w-1/6  bg-gray-300 border-r-2 border-black  flex transition-all duration-700 items-center justify-center hover:z-10 hover:w-3/4">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/ed2f55_03488bbaf13744fd90cafb9f97625905~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/computador.png"
                  className=" h-14 z-0 w-auto transition-all duration-700 ease-in-out group-hover:-translate-x-40 group-hover:absolute"
                />
                <div className="absolute w-2/4 right-10  transition-all text-black duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className=" text-xl font-extrabold">Sistema Dataged </h3>
                  <br />
                  <p className=" text-md font-light">
                    Moderno e completo de gestão de informações com workflow e
                    assinador digital integrados
                  </p>
                </div>
              </div>
              <div className="border-r-2 text-black border-black  group relative h-full w-1/6 border-r-2bg-gray-300 border-slate-100 flex items-center justify-center transition-all duration-700  hover:w-full hover:z-10 ">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/ed2f55_d7feeed9d9da47f3af68794aee4cada1~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/compartilhamento-de-nuvem.png"
                  className="h-14 w-auto transition-all duration-700 group-hover:-translate-x-40 group-hover:absolute "
                />
                <div className="absolute w-2/4 right-10  transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className=" text-xl font-extrabold">Nuvem Azure </h3>
                  <br />
                  <p className=" text-md font-light">
                    Hospedagem de dados em uma das nuvens mais poderosas e
                    seguras do mundo
                  </p>
                </div>
              </div>
              <div className="border-r-2 text-black border-black  group relative h-full w-1/6  bg-gray-300 flex items-center justify-center transition-all duration-700  hover:w-full hover:z-10 ">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/ed2f55_819b91ef2f514e0881b784750e649806~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/documento-assinado.png"
                  className="h-14 w-auto transition-all duration-700 group-hover:-translate-x-40 group-hover:absolute  "
                />
                <div className="absolute w-2/4 right-10  transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className=" text-xl font-extrabold">
                    Assinatura eletrônica{" "}
                  </h3>
                  <br />
                  <p className=" text-md font-light">
                    Certificação digital ICP Brasil e emissão de documentos via
                    e-mail, SMS e Whatsapp
                  </p>
                </div>
              </div>
              <div className="border-r-2 text-black border-black  group relative h-full w-1/6  bg-gray-300 flex items-center justify-center transition-all duration-700  hover:w-full hover:z-10 ">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/ed2f55_d708cfd7b51b4150aeb61dfbaeef4ee9~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caixa-de-entrada.png"
                  className="h-14 w-auto transition-all duration-700 group-hover:-translate-x-40 group-hover:absolute  "
                />
                <div className="absolute w-2/4 right-10  transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className=" text-xl font-extrabold">Digitalização </h3>
                  <br />
                  <p className=" text-md font-light">
                    Digitalização de documentos com equipamento moderno e equipe
                    especializada
                  </p>
                </div>
              </div>
              <div className="border-r-2 text-black border-black  group relative h-full w-1/6 bg-gray-300 flex items-center justify-center transition-all duration-700  hover:w-full hover:z-10 ">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/ed2f55_0253b65547fb4628b5de1328bdb354d9~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/lista.png"
                  className="h-14 w-auto transition-all duration-700 group-hover:-translate-x-40 group-hover:absolute  "
                />
                <div className="absolute w-2/4 right-10  transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className=" text-xl font-extrabold">Indexação</h3>
                  <br />
                  <p className=" text-md font-light">
                    Acesse os documentos digitalizados com mais facilidade e
                    rapidez com a indexação Dataged
                  </p>
                </div>
              </div>
              <div className=" group relative  text-black h-full w-1/6  bg-gray-300 flex items-center justify-center transition-all duration-700  hover:w-full hover:z-10 ">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/ed2f55_bd66bf82111a4512a87495c6ad83f3a4~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caixa.png"
                  className=" h-14 w-auto transition-all duration-700 group-hover:-translate-x-40 group-hover:absolute  "
                />
                <div className="absolute w-2/4 right-10  transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className=" text-xl font-extrabold">
                  Tratamento arquivístico                  </h3>
                  <br />
                  <p className=" text-md font-light">
                  Consultoria completa para gestão física de documentos com software de gerenciamento
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
    </main>
  );
}
