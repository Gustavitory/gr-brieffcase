import React from 'react'
import { ContactForm } from '../organisms/Contact/ContactForm'
import Image from 'next/image';
import { useWindowWidth } from '../hooks/useWindowWidth';

const ContactPage = () => {
  const {width}=useWindowWidth()
  return (
    <>
        <div id='Contact'>
            <ContactForm/>
            <Image src="/Contact/FormaInf.png" alt="Form" width={width<1000?425:750} height={width<1000?500:800}
              style={{
                position:'absolute',
                bottom:0,
                right:0,
                transform:'translateY(40%) translateX(-12%)',
                zIndex:1
              }}
            />
        </div>
        <style jsx>{`
          div{
            margin:15em 0 5em;
            display:flex;
            justify-content:center;
            position:relative;
          }
        `}</style>
    </>
  )
}
export default ContactPage;