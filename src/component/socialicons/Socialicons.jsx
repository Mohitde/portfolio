import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './socialicons.scss';
const Socialicons=()=>{
    return(
        <>
            <ul className='socialicons'>
                <li><a href="#"><FacebookIcon/> facebook</a></li>
                <li><a href="#"><LinkedInIcon/> Linkedin</a></li>
                <li><a href="#"><InstagramIcon/> Instagram </a></li>
            </ul>
        </>
    );
}
export default Socialicons;