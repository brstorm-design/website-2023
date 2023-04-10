import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './Mobile.module.scss';
import iphone from 'public/images/iphone.png';
import submitForm from 'src/utils/submitForm';
import { useForm } from 'react-hook-form';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/Arrow.svg';
import Spinner from 'src/components/common/Spinner';

export default function Mobile({ content }) {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
  const errorMessage = 'Este campo é obrigatório.';

  useEffect(() => {
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > 0.8) {
            entry.target.classList.add(styles.active);
            entry.target.querySelectorAll('.floating').forEach(el => el.classList.add('light'));
          }
        } else {
          if (entry.intersectionRatio < 0.3) {
            entry.target.classList.remove(styles.active);
            entry.target.querySelectorAll('.floating').forEach(el => el.classList.remove('light'));
          }
        }
      });
    }

    const target = document.querySelector(`.${styles.section}`);
    const observer = new IntersectionObserver(callback, { threshold: [0.25, 0.85] });
    observer.observe(target);

    return () => observer.unobserve(target);
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.outer}>
          <div className={styles.inner}>
            <Image src={iphone} alt="" width="519" height="665" />
            <div className={styles.textContent}>
              <h2><span className="h-sans">Design que</span> cabe no bolso!</h2>
              <p>{'Por que esperar para ter um site incrível, vamos começar a criar seu \nsite hoje mesmo? Preencha o formulário abaixo e entre em contato agora!'}</p>
              <form onSubmit={handleSubmit(submitForm)}>
                <div className={`floating${!errors.entry_443452100 ? '' : ' ' + 'error'}`}>
                  <input id="name" placeholder="Como podemos lhe chamar?" type="text" {...register('entry_443452100', { required: errorMessage })} />
                  <label htmlFor="name">Nome</label>
                  <span>{errors.entry_443452100 && errorMessage}</span>
                </div>

                <div className={`floating${!errors.entry_2104795631 ? '' : ' ' + 'error'}`}>
                  <input id="business" placeholder="Qual o nome do seu negócio" type="text" {...register('entry_2104795631', { required: errorMessage })} />
                  <label htmlFor="business">Empresa</label>
                  <span>{errors.entry_2104795631 && errorMessage}</span>
                </div>

                <div className={`floating${!errors.entry_1354793341 ? '' : ' ' + 'error'} prefixed`}>
                  <input id="phone" placeholder="(51) 98983.6186" type="tel" {...register('entry_1354793341', { required: errorMessage, minLength: 14, onChange: e => onChange(e, setValue) })} />
                  <label htmlFor="phone">Telefone</label>
                  <span className="prefix">+55</span>
                  <span>{errors.entry_1354793341 && errorMessage}</span>
                </div>

                <div className={`floating${!errors.entry_1305055579 ? '' : ' ' + 'error'}`}>
                  <input id="email" placeholder="contato@brstorm.design" type="email" {...register('entry_1305055579', { required: errorMessage })} />
                  <label htmlFor="email">E-mail</label>
                  <span>{errors.entry_1305055579 && errorMessage}</span>
                </div>

                <Button id="form-submit" btnElement type="submit" className="lg form-submit" RightIcon={Arrow}>Enviar Solicitação</Button>
                <Spinner style={{ display: isSubmitting ? 'block' : 'none' }} />
                <span style={{ opacity: isSubmitSuccessful ? '1' : '0' }}>✓ Enviada com sucesso!</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}