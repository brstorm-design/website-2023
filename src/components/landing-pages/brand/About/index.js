import React from 'react';
import Button from 'src/components/common/Button';
import styles from './About.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';

export default function About({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 offset-lg-1">
            <div className={styles.intro}>
              <h2 className="sans-before">Sua marca muito além do visual</h2>
              <Button href="" className="outline lg" RightIcon={Arrow}>Comece seu Projeto Agora</Button>
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.aboutUs}>
              <p>A <span>Br.Storm</span> é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais.</p>
              <p>Criamos marcas fortes e memoráveis que refletem a essência da sua empresa. Elaboramos desde a ideia até as mais diversas aplicações do seu projeto.</p>
            </div>
          </div>
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className={styles.details}>
              <article>
                <h3>{'Feito Sob Medida \npara o seu Negócio'}</h3>
                <p>{'Design exclusivo, criado \nespecialmente para o seu negócio.'}</p>
              </article>
              <article>
                <h3>{'Equipe experiente \ne Especializada'}</h3>
                <p>{'Garantia de qualidade e eficácia \nna entrega do seu projeto.'}</p>
              </article>
              <article>
                <h3>{'Abordagem Estratégica \npara Soluções Assertivas'}</h3>
                <p>{'Mapeamos a essência do seu \nnegócio para criar algo singular.'}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}