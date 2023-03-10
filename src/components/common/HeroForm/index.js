import React from 'react';
import { useForm } from 'react-hook-form';
import submitForm from 'src/utils/submitForm';
import styles from './HeroForm.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from '../Button';
import Spinner from '../Spinner';

export default function HeroForm({ content }) {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
  const errorMessage = 'Este campo é obrigatório.';

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className={`floating${!errors.entry_443452100 ? '' : ' ' + 'error'} light`}>
          <input id="name_cover" placeholder="Como podemos lhe chamar?" type="text" {...register('entry_443452100', { required: errorMessage })} />
          <label htmlFor="name_cover">Insira seu Nome</label>
          <span>{errors.entry_443452100 && errorMessage}</span>
        </div>

        <div className={`floating${!errors.entry_1354793341 ? '' : ' ' + 'error'} light`}>
          <input id="phone_cover" placeholder="+55 51 98983.6186" type="tel" {...register('entry_1354793341', { required: errorMessage })} />
          <label htmlFor="phone_cover">Telefone para Contato</label>
          <span>{errors.entry_1354793341 && errorMessage}</span>
        </div>

        <div className={`floating${!errors.entry_1921266371 ? '' : ' ' + 'error'} light`}>
          <select defaultValue="" id="service" {...register('entry_1921266371', { required: errorMessage })}>
            <option hidden />
            <option value="Marca">Marca</option>
            <option value="Estratégia">Estratégia</option>
            <option value="Naming">Naming</option>
            <option value="Website">Website</option>
            <option value="Landing Page">Landing Page</option>
            <option value="E-commerce">E-commerce</option>
          </select>
          <label htmlFor="service">Serviços Necessários</label>
          <span>{errors.entry_1921266371 && errorMessage}</span>
        </div>

        <div className={`floating${!errors.entry_589211067 ? '' : ' ' + 'error'} light`}>
          <select defaultValue="" id="investment" {...register('entry_589211067', { required: errorMessage })}>
            <option value="" hidden />
            <option value="Menos de R$2.000">Menos de R$2.000</option>
            <option value="R$2.000 - R$5.000">R$2.000 - R$5.000</option>
            <option value="R$5.000 - R$10.000">R$5.000 - R$10.000</option>
            <option value="R$10.000 - R$15.000">R$10.000 - R$15.000</option>
            <option value="R$15.000 - R$20.000">R$15.000 - R$20.000</option>
            <option value="Mais de R$20.000">Mais de R$20.000</option>
          </select>
          <label htmlFor="investment">Estimativa de Investimento</label>
          <span>{errors.entry_589211067 && errorMessage}</span>
        </div>

        <Button id="form-submit_cover" btnElement type="submit" className="lg form-submit" RightIcon={Arrow}>
          Enviar Solicitação
        </Button>
        <Spinner style={{ display: isSubmitting ? 'block' : 'none' }} />
        <span style={{ opacity: isSubmitSuccessful ? '1' : '0' }}>✓ Enviada com sucesso!</span>
      </form>
    </div>
  )
}
