import 'swiper/css';
import 'swiper/css/autoplay';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/styles.scss';
import { Merriweather } from '@next/font/google';
import { Inter } from '@next/font/google';
import Header from 'src/components/layout/Header';
import gsap from 'gsap';
import useSmoothScroll from 'src/hooks/useSmoothScroll';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from 'src/components/common/Loader';
import { isDev } from 'src/utils/env';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const merriweather = Merriweather({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  style: 'italic',
});

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const scroller = useSmoothScroll();

  /* useEffect(() => {
    const onRouteStart = () => {
      let tl = gsap.timeline();
      tl.to('#viewport', { opacity: 0, duration: 0.2 });
      tl.fromTo('#loader', { yPercent: 100 }, { yPercent: 0, duration: 0.4 });
      tl.fromTo('#white', { yPercent: 100 }, { yPercent: 0, delay: 3, onComplete: () => gsap.to('#viewport', { opacity: 1, duration: 0.1 }) });
      tl.fromTo('#loader', { yPercent: 0 }, { yPercent: -100, duration: 0.4 });
    }

    router.events.on('routeChangeStart', onRouteStart);

    return () => {
      router.events.off('routeChangeStart', onRouteStart);
    }
  }, []); */

  /* useEffect(() => {
    function handleLinkClick(e) {
      e.preventDefault();
      let id = e.currentTarget.href.split('#').at(-1);
      let scrollPosition = document.getElementById(id).offsetTop;
      scrollTo(0, scrollPosition);
    }

    let links = Array.from(document.querySelectorAll('a'));
    let anchors = links.filter(link => link.href.includes('/#'));

    anchors.forEach(anchor => anchor.addEventListener('click', handleLinkClick));

    return () => anchors.forEach(anchor => anchor.removeEventListener('click', handleLinkClick));
  }, []); */

  /*** Push sucess page when any form finishes submitting ***/
  useEffect(() => {
    function onSubmitted() {
      router.push('/success');
    }
    window.addEventListener('submitted', onSubmitted);
    return () => window.removeEventListener('submitted', onSubmitted);
  }, []);

  /*** Close any open menu when a route changes ***/
  useEffect(() => {
    function closeMenu() {
      document.querySelector('[data-menu]').classList.remove('active');
      document.querySelector('#viewport').classList.remove('active');
      document.documentElement.classList.remove('no-scroll');
    }

    router.events.on('routeChangeStart', closeMenu);
    router.events.on('hashChangeStart', closeMenu);

    return () => {
      router.events.off('routeChangeStart', closeMenu);
      router.events.off('hashChangeStart', closeMenu);
    }
  }, []);

  useEffect(() => {
    if (!isDev) return;
    window.dispatchEvent(new Event('loadFinish'));
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach(el => {
        gsap.from(el, {
          autoAlpha: 0,
          yPercent: 25,
          stagger: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 60%',
          },
        });
      });

      gsap.utils.toArray('[data-reveal-parent]').forEach(el => {
        let target = el;
        if (el.children.length <= 1) target = el.firstChild;
        gsap.from(target.children, {
          autoAlpha: 0,
          yPercent: 25,
          duration: 0.75,
          ease: 'power2.out',
          stagger: el.dataset.revealParent,
          scrollTrigger: {
            trigger: target,
            start: 'top 60%',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          --merriweather: ${merriweather.style.fontFamily};
          --inter: ${inter.style.fontFamily};
        }
      `}
      </style>

      <Header floating={Component.floatingHeader} scroll={Component.scrollHeader} links={Component.links} />

      {isDev ? null : <Loader />}

      <div id="viewport">
        <div id="content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
