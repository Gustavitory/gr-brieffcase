import Carroussel from "../organisms/Slider/Carrousel";


function Projects() {
  let cards = [
        {image:"/Trabajos/Card.png", title:"Páginas Web"},
        {image:"/Trabajos/cards.png",title:"Diseño de Apps"},
        {image:"/Trabajos/DiseñoGrafico.png", title:"Diseño Gráfico"}
  ];
  return (
    <>
        <div className="cont" id="Projects">
          <h2>Mis trabajos recientes</h2>
        <Carroussel
            pcards={cards}
            pheight="17em"
            pwidth="45%"
            pmargin="0 0"
            poffset={2}
            pshowArrows={false}
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