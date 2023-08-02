import React,{useEffect,useState,useRef} from 'react'
import gsap from 'gsap';

const useLoading = () => {
    const p='LoadingCont';
    const refLoader=useRef(null);
    const refText=useRef(null);
    const [Loaded,setAllLoaded]=useState(false);
    const [progress,setProgress]=useState(0);


    //Este useEffect controla el progreso de carga de imagenes
    useEffect(()=>{
        const images=Array.from(document.images);
        const len=images.length;
        let counter=0;

        if(len===0){
            setProgress(100);
            setAllLoaded(true)
        }else{
            const loadImage=(image:any)=>{
                return new Promise<void>((resolve,reject)=>{
                    const loadImg=new Image()
                    loadImg.src=image.src;
                    loadImg.onload=()=>{
                        counter++;
                        const currentProgress=Math.round((counter/len)*100);
                        setProgress(currentProgress)
                        resolve();
                    }
                    loadImg.onerror=err=>reject(err);
                })
            }
            Promise.all(images.map(image=>loadImage(image)))
            .then(()=>{
                setProgress(100);
                setAllLoaded(true);
            })
            .catch((err)=>{
                setAllLoaded(true);
                console.log('Failed to load images:',err)
            })
        }
    },[])

    //este controla la animacion de salida
    useEffect(()=>{
        if(Loaded){
            const tl=gsap.timeline();
            const theLoader=refLoader.current;
            const theText=refText.current;
            tl
                .to(theText,{
                    yPercent: -105,
                    duration:0.6,
                    delay:0.3,
                    ease:'power3.inOut'
                })
                .to(theLoader,{
                    autoAlpha:0,
                    duration:0.6,
                    ease:"power1.in"
                })
        }
    },[Loaded])
    
  return {p,refLoader,refText,progress}
}

export default useLoading