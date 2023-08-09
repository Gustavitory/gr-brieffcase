import { GradientColorButton } from '../../atoms/buttons/GradientColorButton';
import React from 'react'
import { useContactForm } from '../../hooks/useContactForm';
import { GenericInput } from '../Inputs/GenericInput';
import { TextTarea } from '../Inputs/TextTarea';

export const ContactFormCamps = () => {
    const{change,errors,submit}=useContactForm();
  return (
    <>
        <form onSubmit={(e:React.FormEvent)=>submit(e)} >
            <h3>Envíeme un mensaje</h3>
            <GenericInput placeHolder='Nombre' name='name' change={change} error={errors.name} title='' />
            <GenericInput placeHolder='Correo Electronico' name='email' change={change} error={errors.email} title='' />
            <GenericInput placeHolder='Tema' name='tema' change={change} error={errors.tema} title='' />
            <TextTarea placeHolder='Tu mensaje' name='mensaje' change={change} error={errors.mensaje} height={10}  title='' />
            <GradientColorButton content='Enviar mensaje' color1='--pink' color2='--navy' compact={true} />
        </form>
        <style jsx>{`
            form{
                width:100%;
                display:flex;
                flex-direction:column;
                gap:.4em;
                z-index:10;
            }
        `}</style>
    </>
  )
}
