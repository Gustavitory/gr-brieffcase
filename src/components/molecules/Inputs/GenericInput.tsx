
interface StandardInputProps{
    title:string,
    change:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    name:string,
    error:string,
    placeHolder:string,
    readOnly?:boolean,
}

export const GenericInput = ({title,change,name,error,placeHolder,readOnly=false}:StandardInputProps) => {
  return (
    <>
        <div className='PasswordInputCont'>
            <p className='title'>{title}</p>
            <input readOnly={readOnly} className={`${error?' errorInput':''}`} type="text" name={name} onChange={(e)=>change(e)} placeholder={placeHolder} />
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
            input{
                border:none;
                background:#ffffff33;
                padding:.5em 1em;
                border-radius:.5em;
                outline:none;
                width:100%;
                font-size:1em;
            }
            .errorText{
                font-size:.6em;
                font-weight:400;
                color:red;
                position:absolute;
                width:max-content;
                bottom:-1.5em;
                left:0;

            }
        `}</style>
    </>
  )
}