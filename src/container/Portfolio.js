import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <div className="heading">
					<h1>Portfolio</h1>
					<u>
					<p>My Project</p>
					</u>
				</div>
        <div className='portfolio-container'>
          <div className='portfolio-card'>
          <img src="data:image/jpeg;base64,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"/>
          <h3>Todo List</h3>
          <div className='but'>
         <a href="https://github.com/jagadeeshpuppala5/TodoList-React"> <button>Source Code</button></a><a href="https://todolist-with-reactjs.netlify.app/"><button>Live Link</button></a>
          </div>
          </div>

          

          

        </div>
    </div>
  )
}

export default Portfolio
