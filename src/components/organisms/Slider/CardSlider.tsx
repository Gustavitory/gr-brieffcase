import {FaGithubSquare,FaRocket} from 'react-icons/fa';
import { createRef, useState,useEffect } from 'react';

export interface CardSliderProps{
    image:string;
    title:string;
    linkDeploy?:string;
    linkRepo?:string;
}

export const CardSlider = ({image,title,linkDeploy,linkRepo}:CardSliderProps) => {
    const imagen=createRef<HTMLDivElement>();
    const [imageWidth,setImageWidth]=useState(100);
    useEffect(()=>{
        imagen.current?
            setImageWidth(imagen.current.clientWidth)
            :
            null
        console.log(imagen);
    },[imagen])
  return (
    <>
        <div className='cont' ref={imagen}>
            <img src={image} alt={title}/>
            <div className='info'>
                <p>{title}</p>
                {
                    linkRepo && linkDeploy?
                        <div className='Links'>
                            <a href={linkRepo} target={'_blank'} rel="noreferrer"><FaGithubSquare/></a>
                            <a href={linkDeploy} target={'_blank'} rel="noreferrer"><FaRocket/></a>
                        </div>:
                        linkRepo?
                        <div className='Links'>
                            <a href={linkRepo} target={'_blank'} rel="noreferrer"><FaGithubSquare/></a>
                        </div>:
                        null
                }
            </div>
        </div>
        <style jsx>{`
            img{
                width:100%;
            }
            .cont{
                position:relative;
                width:100%;
                height:100%;
                max-width:23em;
            }
            .cont .info{
                position:absolute; 
                bottom:0;
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                // justify-content:center;
                background:#00000030;
                padding:.5em 0;
                border-radius:0 0 1em 1em;
            }
            .cont .info .Links{
                display:flex;
                gap:2em;
            }
        `}</style>
    </>
  )
}
