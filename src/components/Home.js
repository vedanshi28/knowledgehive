import React from 'react';
import img from '../assets/img.png';
import box1img from '../assets/box1-img.png';
import box2img from '../assets/box2img.png';
import collabicon from '../assets/collabicon.png';
import collabimg from '../assets/collab-img.png';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
   <>
        <div className="container-fluid bg-dark" id="header">
           <div className="row">
             <div className="col-10 mx-auto">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main">
                   <div className='title'><strong className="brand-name">Explore , Share & </strong></div><br/><strong><span className='text'> Learn.</span></strong>
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

         {/*Info*/}
         <div className='bg-dark main-container'>
           <div className='box1'>
           <div><img src={box1img} alt='' className='boximg'/></div>
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1><strong className="brand-name title1">Knowledge Exchange</strong></h1>
            </div>
            <div className="my-1 content1"><div>The content sharing interface allows students</div><div>to share a wide range of materials, from </div><div>articles and blog posts to videos and relevent</div><div> academic content</div></div>
            <button className="learn-more">Learn more <i className="fa-solid fa-arrow-right"></i></button>
           </div>

           <div className='box2'>
            <div><img src={box2img} alt='' className='boximg'/></div>
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1><strong className="brand-name title2">Peer-to-Peer Learning</strong></h1>
            </div>
            <div className="my-1 content2"><div>The question and answer interface empowers</div><div> students to seek guidance from their peers on</div><div> academic, and project-related matters.</div><div>Contributions are evaluated through upvotes</div><div>and downvotes, ensuring the visibility of</div> <div>valuable insights and information.</div></div>
            <button className="learn-more2">Learn more <i className="fa-solid fa-arrow-right"></i></button>
           </div>
         </div>

        {/*Collaborative coding*/}
        <div className="main-container-collab bg-dark">
           <div className="row div">
                <div className="col d-flex flex-column container">
                <div><img src={collabicon} alt='' className='boximg'/></div>
                   <h1>
                   <strong className="collab">Collaborative <div>Coding</div></strong>
                   </h1>
                   <div><div>The code sharing interface facilities project</div><div>collaboration by enabling students to share</div><div>and manage repositories. This feature</div><div>encourages students to work together on</div><div>programming assignments, personal projects,</div><div>and team-based initiatives.</div></div>
                   <div><button className="learn-more3">Learn more <i className="fa-solid fa-arrow-right"></i></button></div>
                </div>
                <div className="col-lg-6">
                     <img src={collabimg} className="img" alt=""/>
                </div>
             </div>
             </div>
         </>
  )
}

export default Home;