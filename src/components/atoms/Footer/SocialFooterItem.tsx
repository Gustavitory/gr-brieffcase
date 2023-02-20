import React from 'react'
import { IconType } from 'react-icons';

interface NavFooterItemProps{
    color:string;
    Icon:IconType;
    link:string;
}

export const SocialFooterItem = ({color,Icon,link}:NavFooterItemProps) => {
  return (
    <>
        <a href={link} target={'_blank'} rel="noreferrer">
            <Icon/>
        </a>
        <style jsx>{`
            a{
                display:flex;
                justify-content:center;
                align-items:center;
                background:var(${color});
                width:max-content;
                border-radius:3em;
                padding:.5em;
                transition:.25s;
            }
            a:hover{
                filter:brightness(1.3)
            }
        `}</style>
    </>
  )
}