import React from 'react'
import {IconType} from 'react-icons'

export interface SideBarItemProps{
  selected:string;
  Icon:IconType;
  action:()=>void;
  name:string;
}
export const SideBarItem = ({selected,Icon,action,name}:SideBarItemProps) => {
  return (
    <>
        <Icon className={`sideBarItem`} onClick={()=>action()}/>
        <style jsx>{`
          .sideBarItem{
            font-size:26px;
            color: var(--primary-color);
            cursor:pointer;
            transition:.2s;
          }
          .sideBarItem.selected{
            color:white;
          }
          .sideBarItem:hover{
            color:white;
        }
        `}</style>
    </>
  )
}
