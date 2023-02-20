import { SocialFooterItem } from '../../atoms/Footer/SocialFooterItem';
import React from 'react';
import {AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa';

export const SocialFooter = () => {
    const data=[
        {color:'--instagram-color',link:'',Icon:AiOutlineInstagram},
        {color:'--twitter-color',link:'',Icon:AiOutlineTwitter},
        {color:'--linkedin-color',link:'',Icon:FaLinkedinIn},
        {color:'--facebook-color',link:'',Icon:FaFacebookF}
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
                margin-top:3em;
            }
        `}</style>
    </>
  )
}
