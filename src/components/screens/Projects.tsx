import Image from "next/image";
import Carroussel from "../organisms/Slider/Carrousel";
import { RefObject, useLayoutEffect, useRef,useState } from "react";
import { BrieffcaseItems } from "../molecules/brieffcase/BrieffcaseItems";


function Projects() {
  const contenedor=useRef<HTMLDivElement>(null);
  const [width,setWidth]=useState(0);
  useLayoutEffect(()=>{
    if(contenedor.current){
      setWidth(contenedor.current.clientWidth);
    }
  },[contenedor])
  const experience=[
    {image:"/Trabajos/GradienteLogo.png", title:"Gradiente",linkDeploy:'https://gradiente.ai',linkRepo:""},
    {image:"/Trabajos/JacidiLogo.png", title:"Jacidi",linkDeploy:'https://www.jacidi.com',linkRepo:""},
    {image:"/Trabajos/FonaxLogo.png", title:"Fonax",linkDeploy:'http://www.fonax.com/web/',linkRepo:""},
  ]
  let cards = [
    {image:"/Trabajos/excel-microsoft.gif", title:"React CSV to JSON",linkDeploy:"https://react-test-np5ub7ect-gustavitory.vercel.app",linkRepo:"https://github.com/Gustavitory/ReactTestApp", description:'Este proyecto lo realice como desafio técnico, el reto consiste en desarrollar un servidor que consumiria una api externa, la cual me enviaria informacion en formato CSV la cual debia ser seteada a formato JSON y posteriormente ser enviada. El cliente fue desarrollado con react, redux y css.'},
    {image:"/Trabajos/harry-potter-ron-weasley.gif",title:"Harry Potter App",linkDeploy:'https://hp-app.vercel.app/',linkRepo:"https://github.com/Gustavitory/hp-app",description:''},
    {image:"/Trabajos/squirtle-pikachu.gif", title:"Pokemon App",linkDeploy:'https://sad-bardeen-717db3.netlify.app/',linkRepo:"https://github.com/Gustavitory/PokemonChallenge",description:''},
    {image:"/Trabajos/toDo.gif", title:"To Do App",linkDeploy:'#',linkRepo:"https://github.com/Gustavitory/gr-brieffcase",description:''},
    {image:"/Trabajos/this.gif", title:"Portafolios",linkDeploy:'#',linkRepo:"https://github.com/Gustavitory/gr-brieffcase",description:''},
  ];
  return (
    <>
        <div className="cont" id="Projects" ref={contenedor}>
          <h2>Proyectos</h2>
          <div className="gallery">
            {
              cards.map((el,ind)=>(
                <BrieffcaseItems imagen={el.image} key={ind} title={el.title} description={el.description} repo={el.linkRepo} deploy={el.linkDeploy}/>
              ))
            }
          </div>
        <h2>Experiencia</h2>
        <div className="gallery">
            {
              experience.map((el,ind)=>(
                <BrieffcaseItems imagen={el.image} key={ind} title={el.title} description="asdasdasdasdas"/>
              ))
            }
        </div>
        <Image src="/Trabajos/Background.png" alt="bg" width={width} height={900}
          style={{
            position:'absolute',
            opacity:.4
          }}
        />
        </div>
        <style jsx>{`
            .cont{
                display: flex;
                flex-direction:column;
                justify-content: center;
                align-items: center;
                height: max-content;
                position:relative;
                gap:2em;
                width:100%;
            }
            img{
              position:absolute;
              opacity:0.4;
              width:100%;
              top:50%;
              transform:translateY(-50%);
              z-index:1;
            }
            .gallery{
              display:grid;
              grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
              gap:2em;
              width:80%;
            }
        `}</style>
    </>
  );
}
export default Projects;