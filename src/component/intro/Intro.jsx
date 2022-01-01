import React, { useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped'
import Socialicons from '../socialicons/Socialicons';
const Intro=()=>{
    const bio='Mohit Yadav - I am a Frontend Developer ';
    const typeRef=useRef();
    useEffect(()=>{
        init(typeRef.current, { showCursor: false, strings: ['am a Frontend Developer', 'design & build User Interfaces' ] })
    },[])
    return(
        <>
        <Socialicons/>
            <div className='row '>
                <div className='col-sm-6 intro-right-column'>
                   <div className='circle'>
                       <div className='logo'></div>
                       <div className='text'>
                         <p>{bio.split("").map((char,i)=>{
                             return  <span style={{transform:"rotate(" + i*9 +"deg)"}}>{char}</span>;
                         })}</p>
                       </div>
                   </div>
                </div>
                <div className='col-sm-6 right-column'>
                <div className='right-text'>
                    <h1>Hi!</h1>
                    <h1>I am Mohit Yadav</h1>
                    <h2 className='mt-4' >I <span ref={typeRef}></span> </h2>
                   
                    <a href="#" className='mt-4'><span>Download cv</span></a>	
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
}

export default Intro;