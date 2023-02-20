import React from 'react'

interface AboutMe{
    title:string;
    content:string;
}

export const AboutMe = ({title,content}:AboutMe) => {
  return (
    <>
        <div className='allCont'>
            <img src="/About/AboutImage.png" alt="aboutIMG" />
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
            img{
                width:45em;
                position:absolute;
                top:0;
                left:50%;
                transform:translateX(-50%);
            }
            .cont{
                width:11em;
                position:absolute;
                left:50%;
                top:50%;
                transform:translateY(-50%) translateX(-20%);
            }
            .title{
                font-size:.8em;
            }
            .content{
                font-weight:400;
                font-size:.6em;
            }

        `}</style>
    </>
  )
}
