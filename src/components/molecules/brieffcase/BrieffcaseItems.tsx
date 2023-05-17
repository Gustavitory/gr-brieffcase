import React, { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image';
import {FaGithubSquare,FaRocket} from 'react-icons/fa';

type brieffcaseProps={
    imagen:string,
    title:string,
    description:string,
    deploy?:string,
    repo?:string
}

export const BrieffcaseItems = ({imagen,title,description,deploy,repo}:brieffcaseProps) => {
    const [width,setWidth]=useState(0);
    const cont=useRef<HTMLDivElement>(null);
    useLayoutEffect(()=>{
        if (cont.current){
            setWidth(cont.current.offsetWidth)
        }
    },[])
  return (
    <>
        <section className='cont' ref={cont}>
            <Image src={imagen} alt={title} width={width} height={width*.70} />
            <section className='info'>
                <h3>{title}</h3>
                <hr />
                <p>{description}</p>
                <section className='links'>
                    {deploy&&<a href={deploy} target='__blank' ><FaRocket/></a>}
                    {repo&&<a href={repo} target='__blank' ><FaGithubSquare/></a>}
                </section>
            </section>
        </section>
        <style jsx>{`
            .cont{
                display:flex;
                flex-direction:column;
                overflow:hidden;
                border-radius:1em;
                background: var(--white-transparent-color);
                position:relative;
                z-index:5;
            }
            .info{
                padding:1em 2em;
            }
            p{
                font-size:.8em;
            }
            .links{
                display:flex;
                gap:2em;
                justify-content:flex-end;
            }
            hr{
                border: 1px solid white;
                border-radius:1em;
            }
        `}</style>
    </>
  )
}
