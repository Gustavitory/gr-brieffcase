
interface StandardInputProps{
    title:string,
    change:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    name:string,
    error:string,
    placeHolder:string,
    readOnly?:boolean,
    height?:number
}

export const TextTarea = ({title,change,name,error,placeHolder,readOnly=false,height}:StandardInputProps) => {
  return (
    <>
        <div className='PasswordInputCont'>
            <p className='title'>{title}</p>
            <textarea readOnly={readOnly} className={`${error?' errorInput':''}`}   name={name} onChange={(e:any)=>change(e)} placeholder={placeHolder} />
            {error?<span className='errorText'>{error}</span>:null}
        </div>
        <style jsx>{`
            .PasswordInputCont{
                position:relative;
                margin-bottom:.5em;
            }
            .title{
                display:none;
            }
            textarea{
                border:none;
                background:#ffffff33;
                padding:.5em 1em;
                border-radius:.5em;
                outline:none;
                width:100%;
                height:${height}em;
                resize:none;
                font-size:1em;
            }
            .errorText{
                font-size:.6em;
                font-weight:400;
                color:red;
                posiion:absolute;
            }
        `}</style>
    </>
  )
}