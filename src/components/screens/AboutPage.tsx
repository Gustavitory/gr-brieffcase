import { AboutMe } from '../molecules/About/AboutMe'
import React from 'react'

const AboutPage = () => {
  const monolog="Mi nombre es Gustavo Riera y soy desarrollador web con mas de un año de experiencia, a pesar de que siento gran afinidad por el frontent tambien poseo todas las habilidades necesarias para desenvolverme como backend developer, mi principal meta es mejorar cada dia en todos los aspectos que sea posible, soy estudiante de los ultimos semestres de ingenieria en sistemas y quiero hacer un postgrado en desarrollo de software.";
  return (
    <div id='About'>
        <AboutMe title='Conozcámonos!!' content={monolog}/>
    </div>
  )
}
export default AboutPage;
