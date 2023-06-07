import React from 'react'

const ContactMe = () => {
  return (
    <div>
      <div className="heading">
					<h1>Contact Me</h1>
					<u>
					<p>Lets Keep in Touch</p>
					</u>
				</div>

      <div className='contactme'>
        <h2>Get In Touch</h2><br/>
        <div className="form">
					<form>
						<p>Name</p>
						<input type="text" required/>
						<p>Email</p>
						<input type="email" required/>
						<p>Message</p>
						<input type="textarea"/><br/>
						<button>Send</button>
					</form>
        </div>  
      </div>
    </div>
  )
}

export default ContactMe
