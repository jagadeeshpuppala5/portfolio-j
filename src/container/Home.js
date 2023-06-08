import React from 'react'
import jimg from './Capture1.jpg'
import resumepdf from './Jagadeesh-Resume-FullStack .pdf'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-1">
					<h3>Hello, I'M <span><h2>Jagadeesh</h2></span></h3><br/>
					<h1>Full Stack Web Developer</h1><br/>
					<p>Knack of building applications with front and back end operations.</p>
					<a href={resumepdf} download="Jagadeesh-Resume" target='_blank'>
						<button>Get Resume</button>
					</a>
				</div>
        <img className='jimg' src={jimg}/>
    </div>
  )
}

export default Home
