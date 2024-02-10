import React from 'react'

function Footer() {
  return (
    <section className='footer bg-dark'>
     <div className='footer-content'>
      <h3><strong>Knowledge Hive</strong></h3>
      <p><div>The world of education is constantly evolving, with the digital</div><div>landscape offering innovative opportunities for students to learn and<div>collaborate.</div></div></p>
      <div className='icons'>
       <a><i className="fa-brands fa-twitter nav-link active"></i></a>
        <a><i className="fa-brands fa-reddit nav-link active"></i></a>
      </div>
      <div className='copyright'>&#169; 2022 Character. All Rights Reserved</div>
     </div>
     <div className='footer-content link1'>
        <h4>Site</h4>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Collection</a></li>
        <li><a href='/'>Roadmap</a></li>
        <li><a href='/'>Features</a></li>
     </div>

     <div className='footer-content link'>
        <h4>Company</h4>
        <li><a href='/'>Team</a></li>
        <li><a href='/'>Press</a></li>
        <li><a href='/'>Terms</a></li>
        <li><a href='/'>Limitations</a></li>
        <li><a href='/'>Licenses</a></li>
     </div>
    </section>
  )
}

export default Footer;