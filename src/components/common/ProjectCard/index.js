import Image from 'next/image';
import Link from 'next/link';
import Pin from 'public/images/icons/Pin.svg';
import React from 'react';
import styles from './ProjectCard.module.scss';

export default function ProjectCard({ client, segment, services, local, cover, hover, slug, ...rest }) {
  return (
    <div className={styles.project} {...rest}>
      <Link href={`/portfolio/${slug}`} scroll>
        <Image loading="eager" sizes="100vw" src={`/images/portfolio/hover/${hover}`} width="200" height="200" alt="" />
        <Image loading="eager" sizes="100vw" src={`/images/portfolio/${cover}`} width="200" height="200" alt="" />
      </Link>
      <div className={styles.infos}>
        <div>
          <h3>{client}</h3>
          <p>{segment}</p>
        </div>
        <p>{services}</p>
      </div>
      <div className={styles.localTag}>
        <div><span>{local}</span></div>
        <Pin />
      </div>
    </div>
  )
}
