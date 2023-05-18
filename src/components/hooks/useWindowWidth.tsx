import {useState,useLayoutEffect} from 'react'

export const useWindowWidth = () => {
    const [width,setWidth]=useState(0);
    useLayoutEffect(()=>{
        setWidth(window.innerWidth);
    },[])
  return {
    width
  }
}
