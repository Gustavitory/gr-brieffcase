import { GradientColorButton } from '../../atoms/buttons/GradientColorButton'
import React from 'react'
import { DownloadButton } from '@/components/atoms/buttons/DownloadButton'

interface PresentationFrameProps{
    content:string,
    download:()=>void,
    contact:()=>void
}

export const PresentationFrame = ({contact,download,content}:PresentationFrameProps) => {
  return (
    <>
        <div className='content'>
            <p>{content}</p>
            <div className='buttons'>
                <GradientColorButton color1='--gray' color2='--gray' content='Contacto' action={contact}/>
                <DownloadButton color1='--pink' color2='--navy' content='Descargar CV' action={download}/>
            </div>
        </div>
        <style jsx>{`
            .content{
                transform:translateX(-20%);
                width:35em;
                z-index:5;
            }
            p{
                font-weight: 700;
                font-size: 60px;
            }
            .buttons{
                display:flex;
                align-items:center;
                justify-content:center;
                gap:2em;
            }
        `}</style>
    </>
  )
}
