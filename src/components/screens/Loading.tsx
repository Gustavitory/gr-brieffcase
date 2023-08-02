import React from 'react';
import useLoading from '../hooks/useLoading';
import Image from 'next/image';

export const Loading = () => {
    const {p,refLoader,refText,progress}=useLoading()
  return (
    <>
        <div className={p} ref={refLoader}>
            <div className='content'>
                <div ref={refText} className={'text'}>
                <Image src='/Logo-JM.png' alt='logo' width={100} height={100}/>
                    <div className='number'>{progress}</div>%
                </div>
            </div>
        </div>
        <style jsx>{`
            .LoadingCont{
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100vh;
                z-index:22000;
                background:var(--primary-color);
            }
            .LoadingCont .content{
                position:absolute;
                top:50%;
                left:50%;
                transform:translateX(-50%) translateY(-50%);
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                gap:2em;
                overflow:hidden;
            }
            .LoadingCont .content .text{
                color:white;
                font-size:3em;
                font-weigth:600;
                display:flex;
                align-items:center;
            }
            .LoadingCont .content .text .number{
                min-width:3ch;
                display:inline-block;
                text-align:right;
            }
        `}</style>
    </>
  )
}
