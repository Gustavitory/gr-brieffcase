import { ContactFormCamps } from '../../molecules/Forms/ContactForm';
import React from 'react'
import { ContactMonolog } from '../../molecules/Monologs/ContactMonolog';

export const ContactForm = () => {
  return (
    <>
        <div>
            <ContactMonolog title='Ponerse en contacto' 
            content="Me gustaria hablar contigo! sientete libre de contactarme via whatsapp o email, tambien puedes contactarme mediante las redes sociales o simplemente rellenando este formulario con tu informacion de contacto y en la brevedad me comunicare contigo."
            cell='+58 424 3467694'
            email='ggrieraya@gmail.com'
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
