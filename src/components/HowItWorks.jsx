import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% buttom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Chip A17 Pro.
            <br />
            La bestia del gaming.
          </h2>
          <p className="hiw-subtitle">
            La mayor innovación en la historia de los GPU de Apple ya está aquí.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14 ">
          <div className="relative h-full flex-center ">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray-400 font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              El chip A17 Pro cambia las reglas del juego y dispara el
              rendimiento gráfico a niveles nunca vistos en un iPhone. Una
              victoria épica.
            </p>

            <p className="hiw-text g_fadeIn">
              Prepárate para{" "}
              <span className="text-white">
                sumergirte de lleno en la acción {""}
              </span>
              con escenarios llenos de detalles y personajes mucho más
              realistas. Y como el chip A17 Pro te da una velocidad y eficiencia
              líderes en la industria, todo va más rápido que un rayo.
            </p>
          </div>
          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Nuevo</p>
            <p className="hiw-bigtext">GPU nivel pro</p>
            <p className="hiw-text">con 6 núcleos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
