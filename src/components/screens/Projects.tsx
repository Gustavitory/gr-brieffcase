import Image from "next/image";
import { useLayoutEffect, useRef,useState } from "react";
import { BrieffcaseItems } from "../molecules/brieffcase/BrieffcaseItems";
import { Tech } from "@/casses/techClass";
import { TechItem } from "../molecules/brieffcase/TechItem";


function Projects() {
  const contenedor=useRef<HTMLDivElement>(null);
  const [width,setWidth]=useState(0);
  useLayoutEffect(()=>{
    if(contenedor.current){
      setWidth(contenedor.current.clientWidth);    }
  },[contenedor])
  const tech=[
    new Tech('/tech/JavaScript-logo.png','JavaScript'),
    new Tech('/tech/ts.png','TipeScript'),
    new Tech('/tech/dart1.png','Dart'),
    new Tech('/tech/html1.png','HTML'),
    new Tech('/tech/css1.png','CSS'),
    new Tech('/tech/git.png','Git'),
    new Tech('/tech/flutter.svg','Flutter'),
    new Tech('/tech/react.png','React'),
    new Tech('/tech/redux.png','Redux'),
    new Tech('/tech/angular.png','Angular'),
    new Tech('/tech/nextjs-icon.svg','Next'),
    new Tech('/tech/graphql.png','Graphql'),
    new Tech('/tech/sass1.png','Sass'),
    new Tech('/tech/node.png',''),
    new Tech('/tech/nestJS.svg.png','Nest'),
    new Tech('/tech/express1.png','Express'),
    new Tech('/tech/mysql.svg',''),
    new Tech('/tech/mongo.png',''),
    new Tech('/tech/sequelize.svg','Sequelize'),
  ]
  const experience=[
    {image:"/Trabajos/GradienteLogo.png", title:"Gradiente",linkDeploy:'https://gradiente.ai',description:'FREELANCE - Tuve la oportunidad de trabajar con gradiente durante 10 meses, una startup colombiana que ofrece soluciones legislativas a los interesados, en donde desarrolle el cliente de la aplicación, las tecnologias utilizadas fueron nextjs, Redux y graphql '},
    {image:"/Trabajos/JacidiLogo.png", title:"Jacidi",linkDeploy:'https://www.jacidi.com',description:'FREELANCE - Trabaje con Jacidi, una empresa establecida venezolana de desarrollo que ofrece soluciones de software a empresas del area turistica durante un periodo de un mes desarrollando algunas funcionalidades en el framework angular.'},
    {image:"/Trabajos/FonaxLogo.png", title:"Fonax",linkDeploy:'http://www.fonax.com/web/',description:'CONTRATADO - Trabaje con Fonax, una empresa venezolana establecida en donde cumplí labores como fullstack web developer, llevando labores del lado del servidor y del cliente, las tecnologias usadas fueron Reactjs, Redux, Node, Express, Typescript, Javascript y SQL'},
    {image:"/Trabajos/EE.png", title:"Español con E",description:'FREELANCE - Español con E es una startup que ofrece capacitacion en idioma Español a los interesados, tuve el gusto de trabajar como desarrollador frontend y de guiar a desarrolladores trainee a hacer el mejor trabajo posible, fue una experiencia que disfrute mucho en la que utilice las tecnologias nextjs, Redux toolkit, Sass y graphQL'},
  ]
  let cards = [
    {image:"/Trabajos/excel-microsoft.gif", title:"React CSV to JSON",linkDeploy:"https://react-test-np5ub7ect-gustavitory.vercel.app",linkRepo:"https://github.com/Gustavitory/ReactTestApp", description:'Este proyecto lo realice como desafio técnico, el reto consiste en desarrollar un servidor que consumiria una api externa, la cual me enviaria informacion en formato CSV la cual debia ser seteada a formato JSON y posteriormente ser enviada. El cliente fue desarrollado con react, redux y css.'},
    {image:"/Trabajos/harry-potter-ron-weasley.gif",title:"Harry Potter App",linkDeploy:'https://hp-app.vercel.app/',linkRepo:"https://github.com/Gustavitory/hp-app",description:'Harry potter app consume la API publica de harry potter, en esta ocacion utilice musica para dar una experiencia inmersiva en la aplicacion, las tecnologias usadas fueron Javascript, Reactjs, Redux y CSS'},
    {image:"/Trabajos/squirtle-pikachu.gif", title:"Pokemon App",linkDeploy:'https://sad-bardeen-717db3.netlify.app/',linkRepo:"https://github.com/Gustavitory/PokemonChallenge",description:'Esta App fue desarrollada como uno de mis primeros proyectos, consume la api publica de Pokemon y utilice Javascript, Reactjs, Redux y CSS '},
    {image:"/Trabajos/toDo.gif", title:"To Do App",linkDeploy:'https://todo-app-one-tau-77.vercel.app',linkRepo:"https://github.com/Gustavitory/todo-app",description:'To Do app es un proyecto reciente en donde use mucho del conocimiento y experiencia que habia adquirido hasta el momento, todos los componentes son reutilizables y escalables, el backend usa autenticacion por JWT y validaciones en todo momento mediante middlewares, el front esta diseñado en Reactjs con TypeScript, Redux y CSS'},
    {image:"/Trabajos/this.gif", title:"Portafolios",linkRepo:"https://github.com/Gustavitory/gr-brieffcase",description:'Este portafolios que he realizado con mucho cariño, realizado en Nextjs con typescript.'},
  ];
  return (
    <>
        <div className="cont" id="Projects" ref={contenedor}>
          <h2>Tecnologías</h2>
          <div className="gallery model-two">
            {
              tech.map((el,ind)=>(
                <TechItem imagen={el.imagen} key={ind} name={el.name} />
              ))
            }
          </div>
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
                <BrieffcaseItems imagen={el.image} key={ind} title={el.title} description={el.description} deploy={el.linkDeploy}/>
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
            .gallery.model-two{
              grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
            }
        `}</style>
    </>
  );
}
export default Projects;