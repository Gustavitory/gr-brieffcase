import { ContactFormCamps } from '../../molecules/Forms/ContactForm';
import React from 'react'
import { ContactMonolog } from '../../molecules/Monologs/ContactMonolog';

export const ContactForm = () => {
  return (
    <>
        <div>
            <ContactMonolog title='Ponerse en contacto' 
            content='Soy muy accesible y me encantaría hablar contigo. No dude en llamar, enviarme un correo electrónico. 
            Sígueme en las redes sociales o simplemente completa el formulario de consulta.'
            cell='+58 412 892-4895'
            email='jmoropeza1997@gmail.com'
             />
             <ContactFormCamps/>
        </div>
        <style jsx>{`
            div{
                display:grid;
                grid-template-columns:repeat(auto-fill, minmax(45%,20em));
                gap:1em;
                width:60%;
                background:var(--transparent-blue-color);
                padding:2em;
                border-radius:1em;
                justify-content:center;
                backdrop-filter:blur(7px);
                z-index:10;
            }
        `}</style>
    </>
  )
}
