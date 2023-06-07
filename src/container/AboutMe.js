import React from 'react'
import resumepdf from './Jagadeesh-Resume-FullStack.pdf'

const AboutMe = () => {
  return (
    <div>
        <div className="heading">
			<h1>About Me</h1>
			<u>
			<p>Why choose Me?</p>
			</u>
		</div>
        <div className="about">
			<p>Full stack web developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. 
				Strong professional with a ReactJs willing to be an asset for an organization.</p><br/>
			<h3>Here are a Few Highlights:</h3><br/>
			<ul>
				<li>Full Stack web development</li>
				<li>Interactive Front End as per the design</li>
				<li>ReactJs</li>
				<li>Redux for State Management</li>
				<li>Building REST API</li>
				<li>Managing database</li>
				<li>Core Java</li>
			</ul>
			<a href={resumepdf} download="Jagadeesh-Resume" target='_blank'>
						<button>Get Resume</button>
			</a>		
		</div>

    </div>
  )
}

export default AboutMe
