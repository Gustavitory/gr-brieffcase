import  { createRef,useState,useEffect } from 'react'
import {IoMdBriefcase,IoMdHome,IoMdPerson,IoMdCall,IoMdSearch} from 'react-icons/io';
import { scroller } from 'react-scroll';

export const useNavigation = () => {
    const[selected,setSelected]=useState('');
    const [position,setPos]=useState(0);
    const contenedor=createRef<HTMLUListElement>();
    
    const select=(name:string)=>{
        let index=structure.map((el)=>el.name).indexOf(name);
        if (contenedor.current){
            let spaceForItem=(contenedor.current.clientHeight/(contenedor.current.childElementCount));//restamos uno por el div
            setPos((spaceForItem*index)-((13*index)));
        }
        scroller.scrollTo(name,{
            duration: 500,
            delay: 50,
            smooth: 'easeOutCubic', // linear “easeInQuint” “easeOutCubic” 
            offset: name==='Contact'?-200:-10,
         })
        setTimeout(()=>{
            setSelected(name)
        },500)
    }
    useEffect(()=>{
        select('Home');
    },[])
    
    const structure=[
        {Icon:IoMdHome,name:'Home',action:()=>select('Home'),scroll:'Home'},
        {Icon:IoMdPerson,name:'About',action:()=>select('About'),scroll:'About'},
        {Icon:IoMdBriefcase,name:'Projects',action:()=>select('Projects'),scroll:'Projects'},
        {Icon:IoMdCall,name:'Contact',action:()=>select('Contact'),scroll:'Contact'},
        {Icon:IoMdSearch,name:'Search',action:()=>select('Search'),scroll:'Search'},
    ]

    const topStructure=[
        {title:'Home', action:()=>select('Home'),scroll:'Home'},
        {title:'Acerca de mi',action:()=>select('About'),scroll:'About'},
        {title:'logo',action:()=>select('Home'),scroll:'Home'},
        {title:'Trabajos',action:()=>select('Projects'),scroll:'Projects'},
        {title:'Contacto',action:()=>select('Contact'),scroll:'Contact'}
    ]

    return {contenedor,structure,selected,position,topStructure}
}
