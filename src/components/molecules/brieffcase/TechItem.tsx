import React from 'react'
import Image from 'next/image';

type TechItemProps={
    imagen:string;
    name?:string;
}

export const TechItem = ({imagen,name}:TechItemProps) => {
  return (
    <>
        <section className='tech'>
            <Image src={imagen} alt={imagen} width={100} height={100} />
            <p>{name}</p>
        </section>
        <style jsx>{`
            .tech{
                display:flex;
                flex-direction:column;
                align-items:center;
                gap:1em;
                transition:.25s;
            }
            .tech:hover{
                filter: drop-shadow(1px 1px 25px white);
            }
        `}</style>
    </>
  )
}
