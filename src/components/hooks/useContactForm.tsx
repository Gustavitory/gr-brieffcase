import React from 'react'
import { useState, createRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

interface ContactFormReq{
    name:string,
    email:string,
    tema:string,
    mensaje:string
}

export const useContactForm = () => {
    const [contactForm,setContactForm]=useState<ContactFormReq>({
        email:'',
        name:'',
        tema:'',
        mensaje:''
    })
    const [errors,setErrors]=useState<ContactFormReq>(contactForm)

    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setContactForm({...contactForm,
        [e.target.name]:e.target.value})
    }

    const checkForm= ():boolean=>{
        const {email,name,mensaje,tema}=contactForm;
        let validations={email:'',name:'',mensaje:'',tema:''};
        let isValid=true;
        let emailRegex:RegExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(!email){
                validations.email='Este campo es requerido.';
                isValid=false;
            }
        else if(!emailRegex.test(email)){
             validations.email='Debes escribir un email válido.';
             isValid=false;
            }
        if(!name){
            validations.name='Este campo es requerido.';
            isValid=false;
        }
        if(!mensaje){
            validations.mensaje='Este campo es requerido.';
            isValid=false;
        }
        else if(mensaje.length<8){
            validations.mensaje='El mensaje debe tener una longitud minima de 10 caracteres.';
            isValid=false;
        }
        if(!tema){
            validations.tema='Este campo es requerido.'
            isValid=false;
        }
        setErrors({...validations});
        return isValid;
    }

    const submit=async (e:React.FormEvent)=>{
        e.preventDefault();
        let isValid=checkForm();
        console.log(checkForm())
        if(isValid){
           return emailjs.send('service_166g6do','template_2t969ib',{
            from_name:contactForm.name,
            asunto:contactForm.tema,
            message:contactForm.mensaje,
            email:contactForm.email
           },'-YmTL4ydaq2cVvbIv')
           .then(()=>{
                Swal.fire(
                    '!Tu mensaje ha sido enviado!',
                    'Me pondré en contacto contigo en la brevedad posible.',
                    'success'
                )
           });
        }
    }

  return {change,errors,submit}
  
}
