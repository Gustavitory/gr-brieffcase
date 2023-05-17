import React from 'react'
import {IoMdCall,IoMdMail} from 'react-icons/io';
import Image from 'next/image';
import { SocialFooter } from '../Footer/SocialFooter';

interface contacMonologProps{
  title:string;
  content:string;
  cell:string;
  email:string;
}

export const ContactMonolog = ({title,content,cell,email}:contacMonologProps) => {
  return (
    <>
        <div className='cont'>
            <Image src="/Contact/explaining.png" alt="personaje" 
              style={{
                position:'absolute',
                top:0,
                left:0,
                transform:'translateY(-70%) translateX(-55%)'
              }}
            width={250} height={400}/>
            <h3 className='title'>{title}</h3>
            <p className='cont'>{content}</p>
            <div className='iconCont'>
              <div className='icon'>
                <IoMdCall/>
              </div>
              <p>{cell}</p>
            </div>
            <div className='iconCont'>
              <div className='icon'>
                <IoMdMail/>
              </div>
              <p>{email}</p>
            </div>
            <SocialFooter/>
        </div>
        <style jsx>{`
          .cont{
            color:white;
            position:relative;
            display:flex;
            flex-direction:column;
            gap:1em;
            z-index:10;
          }
          #personaje{
            position:absolute;
            background:blue;
          }
          .icon{
            font-size:1.5em;
            background:#ffffff33;
            border-radius:3em;
            width:max-content;  
            padding:.3em;
            display:flex;
            align-items:center;
            justify-content:center;

          }
          .iconCont{
            display:flex;
            align-items:center;
            gap:1em;
          }
        `}</style>
    </>
  )
}
