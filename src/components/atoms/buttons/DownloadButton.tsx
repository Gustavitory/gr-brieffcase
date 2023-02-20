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

export const DownloadButton = ({color1,color2,action,content,compact=false}:GradientButtonsProps) => {
  return (
    <>
        <a className={compact?'comp':''} href='/CV/CVGustavoRiera.pdf' download={'CV Gustavo Riera.pdf'}  >{content}</a>
        <style jsx>{`
            a{
                background: linear-gradient(107.21deg, var(${color1}) 24.43%, var(${color2}) 68.95%);
                padding:1em 1.5em;
                border:none;
                border-radius:30px;
                box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
                backdrop-filter: blur(11.5757px);
                cursor:pointer;
                transition:.2s;
                font-size:.7em;
                animation: 3s linear infinite llamativo;
            }
            a.comp{
                padding:.5em 1.5em;
                border-radius:.4em;
                width:max-content;
                font-size:.8em;
            }
            a:hover{
                filter:brightness(1.2);
            }

            @keyframes llamativo{
                0%{
                    filter: drop-shadow(0 0 5px var(--pink)) drop-shadow(0 0 10px var(--pink)) drop-shadow(0 0 15px var(--pink));
                    transform:scale(1.1);
                }
                50%{
                    -webkit-filter: drop-shadow(0 0 1px var(--pink)) drop-shadow(0 0 2px var(--pink)) drop-shadow(0 0 3px var(--pink));
                    transform:scale(1.0);
                }
                100%{
                    filter: drop-shadow(0 0 5px var(--pink)) drop-shadow(0 0 10px var(--pink)) drop-shadow(0 0 15px var(--pink));
                    transform:scale(1.1);
                }
            }
        `}</style>
    </>
  )
}
