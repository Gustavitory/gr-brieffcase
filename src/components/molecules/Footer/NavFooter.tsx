import { NavFooterItem } from '../../atoms/Footer/NavFooterItem';
import React from 'react'
import { useNavigation } from '../../hooks/useNavigation';



export const NavFooter = () => {
    const {structure}=useNavigation();
    structure.pop();
  return (
    <>
        <ul>
            {
                structure.map((el,ind)=>{
                    return(
                        <li key={ind}>
                            <NavFooterItem title={el.name} Icon={el.Icon} action={()=>el.action()} />
                        </li>
                    )
                })
            }
        </ul>
        <style jsx>{`
            ul{
                display:flex;
                position:relative;
                list-style:none;
                gap:3em;
                justify-content:center;
                z-index:10;
            }
            @media (max-width:1000px){
                ul{
                    gap:1em;
                    font-size:.8em;
                }
            }
        `}</style>
    </>
  )
}
