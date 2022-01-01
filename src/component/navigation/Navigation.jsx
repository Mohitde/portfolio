import React, { useState } from 'react';
import './navigation.scss';
import { NavLink } from 'react-router-dom';
const Navigation=()=>{
    const [mouseClick,setMouseClick]=useState(false)
return(
    <>
    <div className={'toggle ' + (mouseClick && 'active')} onClick={()=>{setMouseClick(!mouseClick)}}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className={'overlay ' + (mouseClick && 'active')}>
        <ul className='menu'>
            <li><NavLink to='/'> Intro</NavLink></li>
            <li><NavLink to='/about'> About Me</NavLink></li>
            <li><NavLink to='/projects'> Projects</NavLink></li>
            <li><NavLink to='/contact'> Contact</NavLink></li>
        </ul>
    </div>
    </>
)
}
export default Navigation;