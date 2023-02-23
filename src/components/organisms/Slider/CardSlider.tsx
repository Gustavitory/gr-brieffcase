import {FaGithubSquare,FaRocket} from 'react-icons/fa';
import { createRef} from 'react';
import Image from 'next/image';

export interface CardSliderProps{
    image:string;
    title:string;
    linkDeploy?:string;
    linkRepo?:string;
}

export const CardSlider = ({image,title,linkDeploy,linkRepo}:CardSliderProps) => {
    const imagen=createRef<HTMLDivElement>();
  return (
    <>
        <div className='cont' ref={imagen}>
            <Image width={350} height={250} src={image} alt={title}/>
            <div className='info'>
                <p>{title}</p>
                <div className='links'>
                    <a href={linkRepo} target='_blank' rel="noreferrer"><FaGithubSquare/></a>
                    <a href={linkDeploy} target='_blank' rel="noreferrer"><FaRocket/></a>
                </div>
            </div>
        </div>
        <style jsx>{`
            img{
                width:100%;
            }
            .cont{
                position:relative;
                width:100%;
                height:fit-content;;
                max-width:23em;
                border-radius:2em;
                overflow:hidden;
            }
            .cont .info{
                position:absolute; 
                bottom:7px;
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                // justify-content:center;
                background:#00000050;
                padding:.5em 0;
                border-radius:0 0 1em 1em;
            }
            .cont .info .links{
                display:flex;
                gap:2em;
                font-size:1em;
                z-index:10000;
            }
            .cont .info .links a{
                cursor:pointer;
                transition:.25s;
                background:var(--primary-color);
                display:flex;
                align-items:center;
                justify-content:center;
                padding:.5em;
                border-radius:.5em;
            }
            .cont .info .links a:hover{
                transform:scale(1.1) translateY(-2px);
            }
        `}</style>
    </>
  )
}
