import React, { FC, useState } from 'react';
import '../styles/hw.css';

import { useNavigate } from 'react-router-dom';
import { HW_NOTE } from '../router';


const HwOne: FC = () => {
  const nav = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(false);

     const handerHover = ():void=>{
      setDisabled(true);
    }

    const handleLeave = ():void=> {
      setDisabled(false);
    }
  return (
    <div className="App">
      <button className='UnClickBtn' onMouseEnter={handerHover} onMouseLeave={handleLeave}
              style={{
                cursor: disabled ? 'not-allowed':'pointer',
                backgroundColor: disabled ? 'gray' : '#fff',
                padding:'6px',
                marginBottom:'20px',
                display:'block'
              }}>
        {disabled ? 'disabled': 'hover me'}
      </button>

      <ShowOrHideCon />
      <button 
      style={{
        margin:'20px auto',
        display:'block',
        padding:'10px',
        cursor:'pointer',
        backgroundColor:'pink'

      }}
      onClick={()=> nav(HW_NOTE)}>To My Note Page</button>

    </div>
  );
}

const ShowOrHideCon:FC = ()=> {
  const [hidded, setHided] = useState<boolean>(false);

  function handleClick():void{
    setHided(!hidded);
  }

  return (
    <div>
    <button onClick={handleClick}
    style={{
      padding:'10px',
      display:'block',
      margin:'auto'
    }}
    >{hidded ? 'hide now' : 'show now'}</button>
    {hidded ? <p></p> : <p>this is a paragraph, just test the button. When click the Button, the content show be hided</p> }
    </div>
  )

}
export default HwOne;
