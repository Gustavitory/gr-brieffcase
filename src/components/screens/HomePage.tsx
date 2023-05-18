import React from 'react'
import { PresentationFrame } from '../molecules/Home/PresentationFrame';
import { scroller } from 'react-scroll';

const HomePage = () => {
    const configScroll={
        duration: 500,
        delay: 50,
        smooth: 'easeOutCubic', // linear “easeInQuint” “easeOutCubic” 
        offset: -200
     }
  return (
    <>
        <div className='fractionPage' id='Home'>
            <PresentationFrame content='Full-Stack Web Developer Gustavo Riera'  contact={()=>scroller.scrollTo('Contact',configScroll)} download={()=>null}/>
            <img className='top' src="/Home/top.svg" alt="top" />
            <img className='bot' src="/Home/bot.svg" alt="bot" />   
        </div>
        <style jsx>{`
            .fractionPage{
                width:100%;
                height:100vh;
                background-size:100% 135% ;
                position:relative;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            img{
                position:absolute;
                z-index:1;
            }
            img.bot{
                right:0;
                top:0;
            }
            img.top{
                top:0;
                left:0;
            }
            @media(max-width:1000px){
                img{
                    width:350px;
                }
                img.bot{
                    top:100%;
                    transform: translateY(-100%);
                }
            }
        `}</style>
    </>
  )
}
export default HomePage;