import React from 'react'
import { SideBarItem } from '../../atoms/SideBar/SideBarItem';
import { IconType } from 'react-icons';
interface SideBarProps{
    config:{
        contenedor: React.RefObject<HTMLUListElement>;
        structure: {
            Icon: IconType;
            name: string;
            action: () => void;
        }[];
        selected: string;
        position: number;
    }
}

export const SideBar = ({config}:SideBarProps) => {
    const {contenedor,structure,position,selected}=config;
  return (
    <>
        <ul ref={contenedor}>
            {
                structure.map((el,ind)=>{
                    return(
                        <li key={ind}>
                            <SideBarItem selected={selected} name={el.name} Icon={el.Icon} action={el.action}/>
                        </li>
                    )
                })
            }
        </ul>
        <style jsx>{`
            ul{
                list-style:none;
                padding:0 1em;
                background:var(--light-white-color);
                display:flex;
                flex-direction:column;
                width:max-content;
                justify-content:space-evenly;
                border-radius: 0 2.5em 2.5em 0;
                overflow:hidden;
                position:relative;
                min-height:35em;
                position:fixed;
                z-index:100;
                align-self:center;
                top:50%;
                transform:translateY(-50%);
            }
        `}</style>
    </>
  )
}
