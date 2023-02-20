
import { SideBar } from '../molecules/SideBar/SideBar'
import React from 'react'
import { NavBar } from '../molecules/NavBars/NavBar';
import { useNavigation } from '../hooks/useNavigation';

interface AppLayout extends React.PropsWithChildren{
  Background?:any;
}

 const AppLayout = ({children,Background}:AppLayout) => {
  const {contenedor,structure,position,selected,topStructure}=useNavigation();
  return (
    <>
      <div className='AppCont'>
          <div className='infoCont'>
            <SideBar config={{contenedor,structure,position,selected}}/>
            <div className='content'>
              <NavBar data={topStructure}/>
                {children}
            </div>
          </div>
      </div>
      <style jsx>{`
        .AppCont{
          position:relative;
          background:var(--primary-color);
          overflow:hidden;
          // height:100vh;
        }
        .image{
          position:absolute;
        }
        .infoCont{
          display:grid;
          grid-template-columns: 1fr;
          min-height:100vh;
          width:100%;
          align-items:center;
          position:relative;
        }
        .content{
          overflow-x: hidden;
          // overflow-y: scroll;
          // height:100vh;
        }
        .bg{
          position:absolute;
          top:0;
        }
      `}</style>
    </>
  )
}
export default AppLayout;