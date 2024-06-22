/* eslint-disable react/react-in-jsx-scope */
'use client';
import React from "react";
import Image from "next/image";

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-25">
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
          <div className="h-10 flex justify-around rounded-full w-32 ml-auto mr-5 mb-3 mt-auto bg-bgpurple">
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
                className="text-white"
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
      <div className="flex lg:hidden lg:min-w-full justify-between max-h-screen">
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
      </div>
    </main>
  );
}
