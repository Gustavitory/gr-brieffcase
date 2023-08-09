import React from 'react'

export interface DefaultButtonsProps{
    action?:()=>void;
    content:string;
}

interface GradientButtonsProps extends DefaultButtonsProps{
    color1:string;
    color2:string;
    compact?:boolean
}

export const GradientColorButton = ({color1,color2,action,content,compact=false}:GradientButtonsProps) => {
  return (
    <>
        <button className={compact?'comp':''} type={action?undefined:'submit'} onClick={action?()=>action():undefined}>{content}</button>
        <style jsx>{`
            button{
                background: linear-gradient(107.21deg, var(${color1}) 24.43%, var(${color2}) 68.95%);
                padding:1em 1.5em;
                border:none;
                border-radius:30px;
                box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
                backdrop-filter: blur(11.5757px);
                cursor:pointer;
                transition:.2s;
            }
            button.comp{
                padding:.5em 1.5em;
                border-radius:.4em;
                width:max-content;
                font-size:.8em;
            }
            button:hover{
                filter:brightness(1.2);
            }
        `}</style>
    </>
  )
}
