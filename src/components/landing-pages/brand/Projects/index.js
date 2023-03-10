import React, { useEffect } from 'react';
import styles from './Projects.module.scss';
import Pin from 'public/images/icons/Pin.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/Arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from 'src/components/common/ProjectCard';

export default function Projects({ content }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();
    mm.add('(min-width: 992px)', () => {
      gsap.to('.horizontal', {
        x: (index, target) => -(target.scrollWidth - innerWidth + 250),
        ease: 'none',
        scrollTrigger: {
          trigger: '.horizontal',
          start: '-22% top',
          end: self => `top ${-(self.trigger.scrollWidth - innerWidth + 250)}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  const data = [
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
      cover: 'Maptrack.jpg',
      hover: 'Maptrack.jpg',
      slug: 'maptrack',
    },
    {
      client: 'Bronzo',
      segment: 'Restaurante Italiano',
      services: 'Website\nIdentidade Visual',
      local: "Londres | Inglaterra",
      cover: 'Bronzo.png',
      hover: 'Bronzo.jpg',
      slug: 'bronzo',
    },
    {
      client: 'Abarca',
      segment: 'Escritório de Relações Públicas',
      services: 'Identidade Visual',
      local: "Campo Bom | Brasil",
      cover: 'Abarca.png',
      hover: 'Abarca.png',
      slug: 'abarca',
    },
    {
      client: 'Casulo',
      segment: 'Centro Canino',
      services: 'Website\nIdentidade Visual',
      local: "Araricá | Brasil",
      cover: 'Casulo.jpg',
      hover: 'Casulo.jpg',
      slug: 'casulo',
    },
  ]

  return (
    <div className={styles.section}>
      <div className="col-12">
        <header>
          <p className="overline">
            <Pin className="d-none d-lg-block" />
            <span className="d-none d-lg-inline">Projetos em Todo o Mundo</span>
            <span className="d-inline d-lg-none">Nossos Projetos</span>
          </p>
          <h2>Conheça <span className="h-serif">o que criamos</span> por aqui</h2>
        </header>
      </div>
      <div className="container">
        <div className="row gy-4 gy-lg-0 flex-lg-nowrap gy-4 horizontal">

          {
            data.map((project, index) => (
              <div className="col-12 col-lg-8" key={index}>
                <ProjectCard {...project} />
              </div>
            ))
          }

          <div className={`col-12 col-lg-8 ${styles.cta}`}>
            <div className={styles.project}>
              <h3 className="sans-before d-none d-lg-block">
                <span className="h-sans">Veja como podemos </span>
                <span>transformar sua marca</span>
              </h3>
              <Button href="#contact" id="projects-contact" RightIcon={Arrow}>Solicite uma Proposta</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
