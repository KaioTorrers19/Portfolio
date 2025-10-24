import React, { use } from "react";
import {useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);



const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);




    useGSAP(()=>{
        const projects = [project1Ref.current, project2Ref.current,
            project3Ref.current];
        projects.forEach((card,index) =>{
            gsap.fromTo(
                card,
            {
                y:50, opacity:0
            },
            {y:0,
            opacity:1,
            duration:1,
            delay: 0.3 * (index + 1),
            scrollTrigger:{
                trigger: card,
                start: 'top bottom-=100'
            }
            })
         })
    gsap.fromTo(sectionRef.current,
        {opacity: 0},
        {opacity: 1, duration:1.5}
    )
},[])


  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* Left */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/prateleira.png" alt="Prateleira " />
                    </div>
                    <div className="text-content">
                        <h2>Solução Digital para Totem Vertical – Projeto Realizado para a The LED</h2>
                        <p className="text-white-50 md:text-xl">
                        App em React com backend integrado (MySQL + API) e carrinho de compras funcional.
                        </p>
                    </div>
                </div>
                {/* Right */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#FFE7EB]  p-0">
                        <img src="/images/n8n.png" alt="n8n" className="object-fill" />
                        </div>
                        <h2>Fluxos Automatizados com n8n: Otimizando Processos de Marketing</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#FFE7EB] p-0">
                            <img src="/images/Sommelier.png" alt="Sommelier"  className=" object-cover"/> 
                        </div>
                        <h2>Sommelier Digital: Software Interativo para Totem Vertical de Vinhos</h2>
                    </div>
                    
                </div>
            </div>
                        <div className="showcaselayout">
                {/* Left */}
                <div className="first-project-wrapper" ref={project1Ref}>
                      
                    <div className="image-wrapper p-0">
                        <a href = "https://zigen-landing-page-bxnt.vercel.app/">
                        <img src="/images/Zigen_capa.jpg" alt="Zigen " className="object-fill"/>
                        </a>
                    </div>
                    <div className="text-content">
                        <h2>Landing Page Responsiva – Zigen</h2>
                        <p className="text-white-50 md:text-xl">
                            Landing page desenvolvida com Vite e Tailwind, incluindo animações construídas em CSS puro. (Clique na imagem para Visualizar)
                        </p>
                    </div>
                </div>
                {/* Right */}

            </div>
            
        </div>
        
    </section>
  );
}

export default ShowcaseSection;