import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const { t } = useLanguage();

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
    ].filter(Boolean);

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full space-y-12">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/prateleira.png" alt="Prateleira" />
            </div>
            <div className="text-content">
              <h2>{t.showcase.p1Title}</h2>
              <p className="text-white-50 md:text-xl">{t.showcase.p1Desc}</p>
            </div>
          </div>

          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFE7EB] p-0">
                <a
                  href={t.showcase.p2WhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/Robot.png"
                    alt="n8n WhatsApp AI"
                    className="object-fill"
                  />
                </a>
              </div>
              <div className="px-2 sm:px-3 mt-5 space-y-3">
                <h2 className="!mt-0">{t.showcase.p2Title}</h2>
                <p className="text-white-50 md:text-lg">{t.showcase.p2Desc}</p>
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <a
                    href={t.showcase.p2WhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    {t.showcase.p2WhatsappCta}
                  </a>
                  <span className="text-xs text-white/70">
                    {t.showcase.p2WhatsappNumber}
                  </span>
                </div>
              </div>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB] p-0">
                <img
                  src="/images/Sommelier.png"
                  alt="Sommelier"
                  className="object-cover"
                />
              </div>
              <div className="px-2 sm:px-3 mt-5 space-y-3">
                <h2 className="!mt-0">{t.showcase.p3Title}</h2>
                <p className="text-white-50 md:text-lg">{t.showcase.p3Desc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="showcaselayout">
          {/* Left - Zigen */}
          <div className="first-project-wrapper" ref={project4Ref}>
            <div className="image-wrapper p-0">
              <a
                href="https://zigen-landing-page-bxnt.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/Zigen_capa.jpg"
                  alt="Zigen"
                  className="object-fill"
                />
              </a>
            </div>
            <div className="text-content">
              <h2>{t.showcase.p4Title}</h2>
              <p className="text-white-50 md:text-xl">{t.showcase.p4Desc}</p>
            </div>
          </div>

          {/* Right - Escuela Taller */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project5Ref}>
              <div className="image-wrapper bg-white p-0">
                <a
                  href="https://etsmra.github.io/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/EscuelaTaller.png"
                    alt="Escuela Taller Ayuntamiento de San Martín del Rey Aurelio"
                    className="object-cover"
                  />
                </a>
              </div>
              <div className="px-2 sm:px-3 mt-5 space-y-3">
                <h2 className="!mt-0">{t.showcase.p5Title}</h2>
                <p className="text-white-50 md:text-lg">{t.showcase.p5Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;