import React,{CSSProperties,useLayoutEffect,useState,useRef} from 'react'
import { FaAccessibleIcon,FaAddressBook,FaAdjust,FaAirFreshener } from 'react-icons/fa'

interface IndividualSpecialProp extends CSSProperties{
    '--i':number
}

const lab = () => {
    const [open,setOpen]=useState(false);
    const [width,setWidth]=useState(0);
    const data=[
        {Icon:FaAccessibleIcon,action:()=>null},
        {Icon:FaAddressBook,action:()=>null},
        {Icon:FaAdjust,action:()=>null},
        {Icon:FaAirFreshener,action:()=>null},
    ]
    const father=useRef<HTMLDivElement>(null);
    useLayoutEffect(()=>{
        father.current?setWidth(father.current.offsetWidth):null;
    },[father])
  return (
    <div className='contcont'>
        <div className={`cont${open?' open':''}`} ref={father}>
            <div className='burguer'>Burguer</div>
            {
                data.map((el,ind)=>{
                    const {Icon,action}=el
                    return(
                        <li className='item' key={ind} style={{'--i':ind+1} as IndividualSpecialProp } onClick={()=>action()}>
                            <Icon/>
                        </li>
                    )
                })
            }
        </div>
        <style jsx>{`
            .contcont{
                height:100vh;
                width:100%;
                background:white;
                color:black;
            }
            .cont{
                position:absolute;
                width:20em;
                height:20em;
                top:50%;
                left:50%;
                transform:translateX(-50%) translateY(-50%);
                display:flex;
                align-items:center;
                justify-content:center;
                background:red;
                border-radius:100em;
                
            }
            .item{
                position:absolute;
                top:0;
                transform-origin:center calc(${width}px / 2);
                transform: rotate(-65deg)  rotate(calc(calc(180deg / ${data.length}) * calc(var(--i) - 1)));
            }
        `}</style>
    </div>
  )
}

export default lab