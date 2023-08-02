import Image from 'next/image';
import React from 'react'

interface AboutMe{
    title:string;
    content:string;
}

export const AboutMe = ({title,content}:AboutMe) => {
  return (
    <>
        <div className='allCont'>
            <Image style={{
        position:'absolute',
        top:0,
        left:'50%',
        transform:'translateX(-50%)'
    }} src="/About/AboutImage.png" alt="aboutIMG" width={900} height={900} />
            <div className='cont'>
                <p className='title'>{title}</p>
                <p className='content'>{content}</p>
            </div>
        </div>
        <style jsx>{`
            .allCont{
                position:relative;
                height:100vh;
            }
            .cont{
                width:13em;
                position:absolute;
                left:51%;
                top:50%;
                transform:translateY(-50%) translateX(-20%);
            }
            .title{
                font-size:1em;
                font-weight:900;
            }
            .content{
                font-weight:400;
                font-size:.7em;
            }

        `}</style>
    </>
  )
}
