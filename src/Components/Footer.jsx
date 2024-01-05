import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className='footer d-flex justify-content-evenly align-items-center'>
          <div className='website' style={{ width: "400px" }}>
            <h5> <i class="fa-solid fa-video text-warning me-2"></i> Media Player</h5>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur reiciendis fuga accusamus nihil laboriosam sapiente tempora quos aspernatur debitis sint corrupti, numquam beatae, at, itaque doloremque est excepturi voluptate possimus?
            </p>
          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='./' style={{ color: "white", textDecoration: "none" }}>Landing page</Link>
            <Link to='./Home' style={{ color: "white", textDecoration: "none" }}>Home Page</Link>
            <Link to='./Watchhistory' style={{ color: "white", textDecoration: "none" }}>Watch History</Link>
          </div>
          <div className='guides d-flex flex-column ms-5 '>
            <h4>Guids</h4>
            <Link to='https://react.dev/' target='_blank' style={{ color: "white", textDecoration: "none" }}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{ color: "white", textDecoration: "none" }}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{ color: "white", textDecoration: "none" }}>Boots Watch</Link>
          </div>
          <div className='contactus  ms-5 '>
            <h4 style={{ color: "white" }}>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='enter your email' />
              <button className='btn btn-warning ms-3' >subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-atems-center mt-3'>
              <Link ><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link ><i class="fa-brands fa-facebook fa-2x"></i></Link>
              <Link ><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
              <Link > <i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-5 text-center' >Copyright &copy; 2023 Media Player .Built with react</p>
    </>
  )
}

export default Footer          