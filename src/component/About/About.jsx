import React from 'react';
import './about.scss';
const About=()=>{
const skills=[
    {
        name:'HTML',
        per:'90'
    },

    {
        name:'CSS',
        per:'90'
    },

    {
        name:'JAVASCRIPT',
        per:'90'
    },

    {
        name:'BOOTSTRAP',
        per:'90'
    },

    {
        name:'REACT',
        per:'90'
    },

    {
        name:'SASS',
        per:'90'
    },
    {
        name:'JQUERY',
        per:'90'
    },
    {
        name:'PHOTOSHOP',
        per:'90'
    },


]

    return(
        <>
        <section className='about'>
        <div class="container">
           <div className='row'>
           
               <div className='col-sm-6 left-col'>
               <div className='left-container'>
                   <h4>About Me</h4>
                   <h1>CREATIVE DESIGNER WITH
MODERN TECHNIQUES</h1>
</div>
               </div>
               <div className='col-sm-6 right-col'>
                    <p>Meticulous web developer with over 2 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach. W3C certified. Implemented new responsive website approach which increased mobile traffic by 20%.</p>
               </div>
           </div>
           <div className='row'>

           <div className="skills">
           
           <div className="container">
          {skills.map((cv)=>{
              return(
                  <><div className="card">
			<div className="box">
				<div className="percent">
					<svg>
						<circle cx="70" cy="70" r="70"></circle>
						<circle cx="70" cy="70" r="70"></circle>
					</svg>
					<div className="number">
						<h2>{cv.per}<span>%</span></h2>
					</div>
				</div>
				<h2 className="text">{cv.name}</h2>
			</div>
		</div></>
              )
          })}
		

	

		

	</div>
           </div>
           </div>
           
           </div>

           </section>
        </>
    )
}

export default About;