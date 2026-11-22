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
      <div className="w-full">
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
                <img src="/images/n8n.png" alt="n8n" className="object-fill" />
              </div>
              <h2>{t.showcase.p2Title}</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB] p-0">
                <img
                  src="/images/Sommelier.png"
                  alt="Sommelier"
                  className="object-cover"
                />
              </div>
              <h2>{t.showcase.p3Title}</h2>
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
              <h2>{t.showcase.p5Title}</h2>
              <p className="text-white-50 md:text-lg mt-2">
                {t.showcase.p5Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;