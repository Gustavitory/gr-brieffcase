import { NavFooter } from '../../molecules/Footer/NavFooter'
import { SocialFooter } from '../../molecules/Footer/SocialFooter'
import React, { useLayoutEffect, useState } from 'react'
import Image from 'next/image';
import { useWindowWidth } from '@/components/hooks/useWindowWidth';

const Footer = () => {
    const {width}=useWindowWidth()
  return (
    <>
        <div>
            <NavFooter/>
            <SocialFooter/>
            <hr />
            <p>Términos de política - Privacidad del servicio</p>
            <Image className='planet' src='/Footer/Illustration.png' alt='planet' width={width<1000?150:300} height={width<1000?150:300}
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
            @media (max-width:1000px){
                .planet{
                    width:10px;
                }
            }
        `}</style>
    </>
  )
}
export default Footer;