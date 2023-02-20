import { NavFooter } from '../../molecules/Footer/NavFooter'
import { SocialFooter } from '../../molecules/Footer/SocialFooter'
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
        <div>
            <NavFooter/>
            <SocialFooter/>
            <hr />
            <p>Términos de política - Privacidad del servicio</p>
            <Image src='/Footer/Illustration.png' alt='planet' width={300} height={300}
                style={{
                    position:'absolute',
                    top:0,
                    left:0,
                    transform:'translateY(-50%) translateX(40%)'
                }}
            />
        </div>
        <style jsx>{`
            div{
                diplay:flex;
                flex-direction:column;
                position:relative;
                padding:3em;
                background:var(--transparent-blue-color);
                margin-top:7em;
                height:30%;
            }
            p{
                font-size:.6em;
                text-align:end;
                color:#ffffff70;
                margin:2em 0;
            }
            hr{
                boder:1px solid #ffffff50;
                border-bottom:none;
                margin-top:1em;
            }
        `}</style>
    </>
  )
}
export default Footer;