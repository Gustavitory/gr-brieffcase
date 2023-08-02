import React from 'react'
import { IconType } from 'react-icons';

interface NavFooterItemProps{
    title:string;
    action:()=>void;
    Icon:IconType;
}

export const NavFooterItem = ({title,action,Icon}:NavFooterItemProps) => {
  return (
    <>
        <div onClick={()=>action()}>
            <Icon/>
            <p>{title}</p>
        </div>
        <style jsx>{`
            div{
                display:flex;
                align-items:center;
                justify-content:center;
                width:max-content;
                color:white;
                gap:.5em;
                cursor:pointer;
                transition:.25s;
                z-index:1000;
            }
            div:hover{
                filter:brightness(0.8)
            }
        `}</style>
    </>
  )
}
