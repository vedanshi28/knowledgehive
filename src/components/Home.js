import React from 'react';
import img from '../assets/img.png';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
   <>
        <div className="container-fluid  bg-dark" id="header">
           <div className="row">
             <div className="col-10 mx-auto">
           
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main">
                   
                   <div className='title'><strong className="brand-name">Explore , Share & </strong></div><br/><strong><span> Learn.</span></strong>
                  
                   <h2 className="my-3">
                    Explore Communities, Share Ideas & Learn From Experiences.
                   </h2>
                   <div className="mt-3">
                    <NavLink to='/' className="bttn">View Knowledge Hive</NavLink>
                    <NavLink to='/' className="learn">Learn more</NavLink>
                   </div>
                </div>
             </div>
             </div>
           </div>
           <div className="bg-dark img">
           <img src={img} alt=''/>
         </div>
         </>
  )
}

export default Home;