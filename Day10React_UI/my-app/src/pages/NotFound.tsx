import React , { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_PATHNAME } from '../router';

const NotFound: FC = () => {

    const nav = useNavigate();

    return (
          <div 
          style={{
            width:'100%',
            margin:'100px auto',
            textAlign:'center'
          }}
          >
          <p>Sorry, the page you visited does not exist</p>
          <button onClick={()=> nav(HOME_PATHNAME)}>Back Home</button>
          </div>
        
        
         
          
        
    )
}

export default NotFound