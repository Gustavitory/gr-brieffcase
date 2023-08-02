import { useState, useEffect } from 'react';
import { CardSlider, CardSliderProps } from './CardSlider';

interface CarrouselProps{
    pcards:CardSliderProps[];
    pheight:string;
    pmargin:string;
}

export default function Carroussel({pcards,pheight,pmargin}:CarrouselProps) {
  const table = pcards;
  const [goToSlide, setGoToSlide] = useState<number>(0);//ojo
  const positionRelative=(index:number)=>{
    if(index===goToSlide) return 'actual';
    if(index===table.length-1 && goToSlide===0) return'before';
    if(goToSlide===table.length-1 && index===0)return 'next';
    if(index>goToSlide){
      return index-goToSlide===1?'next':'nextnext'
    }
    else{
      return goToSlide-index===1?'before':'beforebefore'
    }
  }

  return (
    <>
      <ul
        style={{height: pheight, margin: pmargin,zIndex:10 }} 
      >
        {
          table.map((el,ind)=>{
            const {image,title,linkDeploy,linkRepo}=el;
            return (
              <li key={ind} onClick={()=>{setGoToSlide(ind)}} className={`card ${positionRelative(ind)}`}>
                <CardSlider image={image} title={title} linkDeploy={linkDeploy} linkRepo={linkRepo} />
              </li>
            )
          })
        }
      </ul>
      <style jsx>{`
        ul{
          position:relative;
          width:100%;
          list-style:none;
        }
        .card{
          position:absolute;
          max-width:25em;
          overflow:hidden;
          left:50%;
          transition:1s;
          transform:scale(.85);
          z-index:5;
          opacity:0;
        }

        .card.actual{
          transform:translateX(-50%) scale(1);
          z-index:15;
          opacity:1;
        }

        .card.before{
          transform:translateX(-100%) scale(.85);
          opacity:1;
          cursor:pointer;
        }
        .card.next{
          opacity:1;
          cursor:pointer;
          z-index:10;
        }
        .card.nextnext{
          z-index:-1;
        }
      `}</style>
    </>
  );
}