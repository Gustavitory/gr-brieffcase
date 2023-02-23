import { ContactFormCamps } from '../../molecules/Forms/ContactForm';
import React from 'react'
import { ContactMonolog } from '../../molecules/Monologs/ContactMonolog';

export const ContactForm = () => {
  return (
    <>
        <div>
            <ContactMonolog title='Ponerse en contacto' 
            content="I'ld like to talk with you! Feel free to call, email me. 
            Follow me on social networks or simply fill out the contact form."
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
