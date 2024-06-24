/* eslint-disable react/react-in-jsx-scope */
"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex min-h-screen font-outfit flex-col items-center justify-between bg-slate-25">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="hidden lg:flex lg:min-w-full justify-between max-h-screen">
        <div className="lg:w-full h-screen overflow-y-auto no-scrollbar">
          <div className="overflow-hidden">
            <article
              id="inicio"
              className="flex flex-col lg:ml-4 lg:mr-0 mx-4 mb-10 mt-6 h-[100vh] rounded-[20px] max-h-full box-border overflow-hidden"
              style={{
                backgroundImage: "url(/family.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col lg:ml-6 lg:my-auto lg:mr-auto lg:mx-auto mx-6 mt-6 max-w-[700px]">
                <div className="bg-H-purple-white-gradient rounded-t-3xl text-textblue py-16 pl-10 pr-4 font-semibold lg:text-[52px] text-[24px] leading-6 lg:leading-[58px] w-full">
                  Estás a punto de iniciar un viaje hacia el universo
                  <div className="mt-2">
                    de la{" "}
                    <span className="bg-textblue text-white">
                      educación digital
                    </span>
                  </div>
                </div>
                <div className="rounded-b-3xl hidden lg:block bg-white w-full">
                  <Image
                    className="mx-auto mt-24 mb-12"
                    src="/LogoGE.png"
                    alt="genuine Logo"
                    width={382}
                    height={104}
                    priority
                  />
                </div>
                <div className="rounded-b-3xl lg:hidden bg-white w-full">
                  <Image
                    className="mx-auto mt-24 mb-12"
                    src="/LogoGE.png"
                    alt="genuine Logo"
                    width={180}
                    height={50}
                    priority
                  />
                </div>
              </div>
              <div className="mx-auto font-semibold text-4xl my-9 text-white">
                studyatgenuine.com
              </div>
            </article>
            <article
              id="quienes-somos"
              className="flex bg-gradient-to-b from-[#D5E6F7] via-white via-30% to-white flex-col ml-4 mb-10 mt-6 h-[100vh] rounded-[20px] max-h-full box-border overflow-hidden"
            >
              <div className="flex flex-1 flex-col mx-auto">
                <div className=" text-textblue font-semibold text-[52px] w-full">
                  <Image
                    src="/jet-pack.png"
                    alt="genuine Logo"
                    className="m-auto"
                    width={838}
                    height={341}
                    priority
                  />
                  <h3 className="mx-36 text-center leading-[62px]">
                    Nuestra misión en el mundo y lo que soñamos para tus hijos
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 mb-72 mx-32 justify-around gap-5 font-semibold text-4xl my-9 text-white">
                <div className="w-full flex-1 h-full text-textblue rounded-[20px] border-textblue border-[3px] px-8 ">
                  <Image
                    src="/rocket.svg"
                    alt="genuine Logo"
                    className="my-1"
                    width={100}
                    height={85}
                    priority
                  />
                  <h3 className="mt-4">Nuestra misión</h3>
                  <p className="text-[22px] mt-4 mb-12 font-normal leading-6">
                    Educar, empoderar y conectar a nuestros estudiantes mediante
                    experiencias de aprendizaje remoto que trasciendan las
                    fronteras geográficas e idiomáticas.
                  </p>
                </div>
                <div className="w-full flex-1 text-textblue rounded-[20px] h-full border-textblue border-[3px] px-8 ">
                  <Image
                    src="/eyeGenu.svg"
                    alt="genuine Logo"
                    className="my-2"
                    width={100}
                    height={85}
                    priority
                  />
                  <h3 className="mt-4">Nuestra visión</h3>
                  <p className="text-[22px] mt-4 mb-12 font-normal leading-6">
                    Visualizamos un mundo donde miles de jóvenes y niños usen
                    sus habilidades para transformar sus comunidades y regiones
                    por medio del emprendimiento, la tecnología y la innovación.
                  </p>
                </div>
              </div>
            </article>
            <article
              id="somos-estadounidenses"
              className="grid grid-cols-2 bg-white ml-4 mb-10 mt-6 h-[45vh] rounded-[20px] box-border overflow-hidden"
            >
              <div className="text-textblue flex flex-col gap-8 p-14 font-semibold text-[52px]">
                <h3 className="text-left text-5xl font-semibold leading-[47px]">
                  De Estados Unidos para el mundo
                </h3>
                <p className="text-left text-[25px] font-normal leading-[27px]">
                  Nuestro colegio digital privado está constituido y registrado
                  en Estados Unidos ante el
                  <strong>
                    &nbsp;Florida Department of Education con el código 8822.
                  </strong>
                </p>
                <div className="flex">
                  <h4 className="text-left text-[22px] font-semibold leading-[23px] py-5 pr-[30px]">
                    Conoce el nuestro aquí
                  </h4>
                  <a className="text-left text-[20px] font-semibold bg-textblue text-white rounded-[10px] py-5 px-[30px]">
                    Registro legal
                  </a>
                </div>
              </div>
              <div className="w-full h-full overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url(/students.jfif)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: "scale(1.1)",
                  }}
                ></div>
              </div>
            </article>
            <article
              id="unete-a-genuine"
              className="grid grid-cols-4 py-10 bg-white ml-4 mb-10 mt-6 h-[70vh] z-[-2] rounded-[20px] max-h-full box-border overflow-hidden"
            >
              <div className="col-span-1 min-w-[310px] flex flex-col bg-white ml-16">
                <h1 className="text-6xl mb-6 text-textblue font-semibold">
                  Somos del mundo
                </h1>
                <p className="py-5 px-6 text-white bg-[#FF4E07] text-[18px] font-medium leadin-[18px]">
                  Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile,
                  Argentina, Estados Unidos, Emiratos Árabes, Brasil, República
                  Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
                </p>
                <p className="py-5 px-6 text-textblue bg-[#D5ADFB] text-[18px] leadin-[18px] font-medium">
                  Estados Unidos, Colombia, Perú, Brasil, Chile, México,
                  Venezuela.
                </p>
                <p className="py-5 px-6 text-white bg-[#602680] text-[18px] font-medium leadin-[18px]">
                  Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.
                </p>
              </div>
              <div className="col-span-3 h-full">
                <div className="flex gap-11 justify-center align-middle">
                  <div className="text-3xl text-[#FF4E07] border-[#FF4E07] py-[10px] px-10 border-[3px] rounded-[10px] font-bold">
                    <span className="text-[40px]">+ 400&nbsp;</span>
                    Estudiantes
                  </div>
                  <div className="text-3xl text-[#D5ADFB] border-[#D5ADFB] py-[10px] px-10 border-[3px] rounded-[10px] font-bold">
                    <span className="text-[40px]">28&nbsp;</span>
                    Staff
                  </div>
                  <div className="text-3xl text-[#602680] border-[#602680] py-[10px] px-10 border-[3px] rounded-[10px] font-bold">
                    <span className="text-[40px]">44&nbsp;</span>
                    Profesores
                  </div>
                </div>
                <Image
                  className="mx-auto mb-12"
                  src="/mapa.png"
                  alt="genuine Logo"
                  width={920}
                  height={490}
                  priority
                />
              </div>
            </article>
          </div>
        </div>
        <aside className=" lg:flex hidden bg-custom-gradient flex-col min-h-screen max-h-screen">
          <div className="m-5 bg-white px-8 py-6 w-[360px] rounded-3xl">
            <div className="flex space">
              <Image
                src="/Close.svg"
                alt="genuine Logo"
                width={15}
                height={15}
                priority
              />
              <Image
                src="/IsoGE.png"
                alt="genuine Logo"
                className="ml-auto"
                width={70}
                height={45}
                priority
              />
            </div>
            <ol className="mt-12 gap-2 text-textblue text-base font-semibold">
              <li
                className="h-9 cursor-pointer"
                onClick={() => scrollToSection("inicio")}
              >
                Inicio
              </li>
              <li
                className="h-9 cursor-pointer"
                onClick={() => scrollToSection("quienes-somos")}
              >
                ¿Quiénes somos?
              </li>
              <li
                className="h-9 cursor-pointer"
                onClick={() => scrollToSection("somos-estadounidenses")}
              >
                Somos Estadounidenses
              </li>
              <li
                className="h-9 cursor-pointer"
                onClick={() => scrollToSection("unete-a-genuine")}
              >
                Únete a Genuine
              </li>
            </ol>
          </div>
          <div className="h-10 flex justify-around rounded-full w-32 ml-auto mr-5 mb-3 items-center mt-auto bg-bgpurple">
            <Image
              src="/angle.svg"
              alt="genuine Logo"
              width={11}
              height={20}
              className="mask-angle"
            />
            <div>
              <Image
                src="/lineV.svg"
                alt="genuine Logo"
                width={3}
                height={18}
                className="text-white my-auto"
              />
            </div>
            <Image
              src="/angle.svg"
              alt="genuine Logo"
              width={11}
              height={20}
              className="transform rotate-180"
            />
          </div>
        </aside>
      </div>
      <div className="flex lg:hidden justify-between max-h-screen">
        <div className="h-screen overflow-y-auto no-scrollbar">
          <div className="overflow-hidden">
            <article
              id="inicio"
              className="flex flex-col m-[15px] max-w-screen-sm min-h-[500px] rounded-[20px] overflow-hidden"
              style={{
                backgroundImage: "url(/family_mobile.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col mx-6 mt-6 ">
                <div className="bg-H-purple-white-gradient rounded-t-3xl text-textblue text-2xl py-7 px-5 font-semibold leading-6 lg:leading-[58px]">
                  Estás a punto de entrar al universo
                  <div className="mt-1 -mr-3">
                    de la{" "}
                    <span className="bg-textblue text-white">
                      educación digital
                    </span>
                  </div>
                </div>
                <div className="rounded-b-3xl bg-white">
                  <Image
                    className="mx-auto mt-10 mb-6"
                    src="/LogoGE.png"
                    alt="genuine Logo"
                    width={180}
                    height={150}
                    priority
                  />
                </div>
              </div>
              <div className="mx-auto font-semibold text-base mt-auto mb-3 text-white">
                studyatgenuine.com
              </div>
            </article>
            <article
              id="inicio"
              className=" bg-gradient-to-b from-[#D5E6F7] via-white via-30% to-white flex flex-col m-[15px] max-w-screen-sm min-h-[500px] rounded-[20px] p-[15px] overflow-hidden"
            >
              <h3 className="mx-auto text-2xl font-semibold text-left text-textblue leading-[27px]">
                Nuestra misión en el mundo y lo que soñamos para tus hijos
              </h3>
              <iframe
                className="my-4"
                width="312"
                height="170"
                src="https://www.youtube.com/embed/0IlUVfWThdo?si=iVpC0UJNuUyzV2nB"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="w-full flex-1 h-full text-textblue rounded-[20px] mt-3 border-textblue border-[3px] px-4 ">
                <Image
                  src="/eyeGenu.svg"
                  alt="genuine Logo"
                  className="my-2"
                  width={100}
                  height={85}
                  priority
                />
                <h3 className="mt-4 text-2xl font-bold">Nuestra visión</h3>

                <p className="text-[16px] mt-4 mb-4 font-normal leading-4">
                  Queremos educar a miles de niños y jóvenes con los más altos
                  estándares de calidad y pertinencia para que{" "}
                  <strong>descubran su felicidad</strong> y que a partir de sus
                  competencias, sean agentes de cambio en sus regiones por medio
                  de{" "}
                  <strong>
                    la tecnología, la innovación y el emprendimiento.
                  </strong>
                </p>
              </div>
              <div className="w-full flex-1 text-textblue rounded-[20px] h-full mt-3 border-textblue border-[3px] px-4 ">
                <Image
                  src="/rocket.svg"
                  alt="genuine Logo"
                  className="my-1"
                  width={100}
                  height={85}
                  priority
                />
                <h3 className="mt-4 text-2xl font-bold">Nuestra misión</h3>
                <p className="text-[16px] mt-4 mb-4 font-normal leading-4">
                  <strong>Educar, empoderar y conectar</strong> a nuestros
                  estudiantes mediante experiencias de aprendizaje remoto que
                  trasciendan las fronteras geográficas e idiomáticas, para
                  inspirarlos a transformar el mundo a través de{" "}
                  <strong>
                    la tecnología, la innovación y el emprendimiento.
                  </strong>
                </p>
              </div>
              <div className="w-full -mb-[15px]">
                <Image
                  src="/jet-pack.png"
                  alt="genuine Logo"
                  className="m-auto"
                  width={330}
                  height={130}
                  priority
                />
              </div>
            </article>
            <article
              id="inicio"
              className="bg-white flex flex-col m-[15px] max-w-screen-sm min-h-[500px] rounded-[20px] p-[15px] overflow-hidden"
            >
              <h3 className="text-2xl font-semibold text-left text-textblue leading-[27px]">
                ¿Quiénes somos?
              </h3>
              <div className="w-full text-textblue mt-3 ">
                <p className="text-[16px] mt-1 mb-1 font-normal leading-4">
                  Somos un colegio virtual privado estadounidense constituido y
                  registrado en el estado de{" "}
                  <strong>La Florida con el código 8822.</strong>
                </p>
              </div>
              <div className="my-8">
                <h3 className="mx-auto text-textblue text-lg font-semibold text-center">
                  Consulta el registro legal aquí
                </h3>
                <a className="text-white block mx-auto font-semibold text-xl py-5 px-7 bg-textblue rounded-[10px] w-fit my-2">
                  Registro legal
                </a>
              </div>
              <div className="mb-8 bg-bgpurple rounded-[10px] py-[10px] px-5">
                <h3 className="mx-auto text-textblue text-lg font-semibold text-center">
                  Mira como encontrar el registro legal de Genuine
                </h3>
                <Image
                  src="/play.svg"
                  alt="genuine Logo"
                  className="mx-auto mt-2"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div
                className=" -mx-[15px] -mb-[15px] min-h-[200px]"
                style={{
                  backgroundImage: "url(/students.jfif)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </article>
            <article
              id="inicio"
              className="bg-white flex flex-col m-[15px] max-w-screen-sm min-h-[500px] rounded-[20px] p-[15px] overflow-hidden"
            >
              <h3 className="text-2xl mx-12 mb-4 w-44 font-semibold text-left text-textblue leading-[27px]">
                Somos del mundo
              </h3>
              <div className="border-[#F90052] mb-4 mx-12 border-[3px] rounded-[10px] py-4 px-10">
                <h2 className="text-[#F90052] text-center mx-auto text-3xl font-bold">
                  +350
                </h2>
                <h3 className="text-[#F90052] text-center mx-auto text-xl font-bold">
                  Estudiantes
                </h3>
              </div>
              <div className="border-[#D5ADFB] mb-4 mx-12 border-[3px] rounded-[10px] py-4 px-10">
                <h2 className="text-[#D5ADFB] text-center mx-auto text-3xl font-bold">
                  28
                </h2>
                <h3 className="text-[#D5ADFB] text-center mx-auto text-xl font-bold">
                  Staff
                </h3>
              </div>
              <div className="border-[#133072] mb-4 mx-12 border-[3px] rounded-[10px] py-4 px-10">
                <h2 className="text-[#133072] text-center mx-auto text-3xl font-bold">
                  44
                </h2>
                <h3 className="text-[#133072] text-center mx-auto text-xl font-bold">
                  Profesores
                </h3>
              </div>
              <div
                className=" -mx-[15px] min-h-[200px]"
                style={{
                  backgroundImage: "url(/mapa.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="-mx-[15px] text-base font-medium py-5 px-6 text-white bg-[#F90052]">
                Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile,
                Argentina, Estados Unidos, Emiratos Árabes, Brasil, República
                Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
              </div>
              <div className="-mx-[15px] text-base font-medium py-5 px-6 text-white bg-[#D5ADFB]">
                Estados Unidos, Colombia, Perú, Brasil, Chile, México,
                Venezuela.
              </div>
              <div className="-mx-[15px] -mb-[15px] text-base font-medium py-5 px-6 text-white bg-[#133072]">
                Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
