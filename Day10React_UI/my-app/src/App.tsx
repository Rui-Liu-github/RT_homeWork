import React, { useState } from 'react';
// import './App.css';
import './styles/hw.css';

function App() {
  const [disabled, setDisabled] = useState(false);

    function handerHover():void {
      setDisabled(true);
    }

    function handleLeave():void {
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

    </div>
  );
}

function ShowOrHideCon() {
  const [hidded, setHided] = useState(false);

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
export default App;
