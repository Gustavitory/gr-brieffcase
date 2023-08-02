import { SocialFooterItem } from '../../atoms/Footer/SocialFooterItem';
import React from 'react';
import {AiOutlineWhatsApp,AiOutlineGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

export const SocialFooter = () => {
    const data=[
        {color:'--whatsapp-color',link:'https://wa.me/584243467694',Icon:AiOutlineWhatsApp},
        {color:'--linkedin-color',link:'https://www.linkedin.com/in/gustavo-riera-fullstackdev/',Icon:FaLinkedinIn},
        {color:'--github-color',link:'https://github.com/Gustavitory',Icon:AiOutlineGithub}
    ]
  return (
    <>
        <ul>
            {
                data.map((el,ind)=>{
                    const {color,link,Icon}=el;
                    return(
                        <li key={ind}>
                            <SocialFooterItem color={color} link={link} Icon={Icon}/>
                        </li>
                    )
                })
            }
        </ul>
        <style jsx>{`
            ul{
                display:flex;
                justify-content:center;
                align-items:center;
                list-style:none;
                gap:3em;
                position:relative;
                z-index:10;
                margin-top:1em;
            }
        `}</style>
    </>
  )
}
