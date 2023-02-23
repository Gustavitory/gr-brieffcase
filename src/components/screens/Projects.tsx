import Carroussel from "../organisms/Slider/Carrousel";


function Projects() {
  let cards = [
        {image:"/Trabajos/excel-microsoft.gif", title:"React CSV to JSON",linkDeploy:"https://react-test-np5ub7ect-gustavitory.vercel.app",linkRepo:"https://github.com/Gustavitory/ReactTestApp"},
        {image:"/Trabajos/harry-potter-ron-weasley.gif",title:"Harry Potter App",linkDeploy:'https://hp-app.vercel.app/',linkRepo:"https://github.com/Gustavitory/hp-app"},
        {image:"/Trabajos/squirtle-pikachu.gif", title:"Pokemon App",linkDeploy:'https://sad-bardeen-717db3.netlify.app/',linkRepo:"https://github.com/Gustavitory/PokemonChallenge"},
        {image:"/Trabajos/GradienteLogo.png", title:"Gradiente",linkDeploy:'https://gradiente.ai',linkRepo:""},
        {image:"/Trabajos/JacidiLogo.png", title:"Jacidi",linkDeploy:'https://www.jacidi.com',linkRepo:""},
        {image:"/Trabajos/FonaxLogo.png", title:"Fonax",linkDeploy:'http://www.fonax.com/web/',linkRepo:""},
        {image:"/Trabajos/this.gif", title:"This",linkDeploy:'#',linkRepo:"https://github.com/Gustavitory/gr-brieffcase"}
  ];
  return (
    <>
        <div className="cont" id="Projects">
          <h2>Projects</h2>
        <Carroussel
            pcards={cards}
            pheight="17em"
            pmargin="0 0"
        />
        <img src="/Trabajos/Background.png" alt="bg" />
        </div>
        <style jsx>{`
            .cont{
                display: flex;
                flex-direction:column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                position:relative;
                gap:2em;
            }
            img{
              position:absolute;
              opacity:0.4;
              width:100%;
              top:50%;
              transform:translateY(-50%);
              z-index:1;
            }
        `}</style>
    </>
  );
}
export default Projects;