import React, {FC, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {HOME_PATHNAME} from '../../router';
// component: a js function, and return markup

// function AppDemo(){
//     const name:string = "rui liu";
//     return <div>{name}</div>; //JSX
// }

const DemoNoteOne:FC = () =>{
    const nav = useNavigate();

    const name = <h1>Rui Liu</h1>;
    return (
        <div>
            <button 
            style={{
                margin:'30px auto',
                display:'block',
                padding:'10px',
                cursor:'pointer',
                backgroundColor:'pink'
            }}
            onClick={()=> nav(HOME_PATHNAME)}>To My HomeWork Page</button>
            {name}
            {name}
            {name}
            
        </div>
    )
}




export default DemoNoteOne;