import React,{FC} from 'react';
import '../styles/hw.css'
import { useNavigate } from 'react-router-dom';
import { HOME_PATHNAME } from '../router';

const LiveCodeOne:FC = () => {
const nav = useNavigate();

return (
        <div>
            <button onClick={()=> nav(HOME_PATHNAME)} className='demoBtn'>To Home Page</button>
          {/* start my code here */}
       
          
        </div>
    )

}






export default LiveCodeOne