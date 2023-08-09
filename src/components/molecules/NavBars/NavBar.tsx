import React from 'react'

interface NavBarProps{
    data:{
        title:string,
        action:()=>void
    }[]
}

export const NavBar = ({data}:NavBarProps) => {
  return (
    <>
        <ul>
            {
                data.map((el,ind)=>{
                    if (el.title==='logo'){
                        return(
                            <img key={ind} src="/Logo.svg" alt="logo" onClick={()=>el.action()} />
                        )
                    }else{
                        return(
                            <li key={ind} onClick={()=>el.action()}>{el.title}</li>
                        )
                    }
                })
            }
        </ul>
        <style jsx>{`
            ul{
                position:fixed;
                top:0;
                overflow:visible;
                z-index:100;
                display:flex;
                list-style:none;
                width:max-content;
                gap:2em;
                justify-content:center;
                align-items:center;
                left:50%;
                transform:translateX(-50%);
                backdrop-filter:blur(10px);
                padding: 0 3em;
                border-radius:0 0 2em 2em;
            }
            li{
                cursor:pointer;
                transition:.2s
            }
            li:hover{
                filter:brightness(0.8);
            }
            img{
                cursor:pointer;
            }
            @media (max-width:1000px){
                ul{
                    gap:1em;
                    width:100%;
                    padding:0 1em;
                    font-size:.7em;
                }
                ul img{
                    width:70px;
                }
            }
        `}</style>
    </>
  )
}
