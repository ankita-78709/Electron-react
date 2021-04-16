import React, { useState } from 'react';
import Swal from 'sweetalert2';

const About = () => {

    //initializing state for handling user inputs
    const [email, setMail] = useState('');
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    //saves user entered name
    const nameChange = (e) => {
        setName(e.target.value)
    }

    //saves user entered mailid
    const emailChange = (e) => {
        setMail(e.target.value)
    }

    //saves user entered message
    const messageChange = (e) => {
        setFeedback(e.target.value)
    }

    //handles Submiiting on click of submit button
    const handleSubmit = (event) => {
        event.preventDefault();

        //This templateId is created in EmailJS.com
        const templateId = "template1";

        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        sendFeedback(templateId, {
            message: feedback,
            name: name,
            email: email
        }
        )
    }


    //custom EmailJS functions
    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            // Email successfully sent alert
            Swal.fire({
              title: 'Email Successfully Sent',
              icon: 'success'
            })
          })
          // Email Failed to send Error alert
          .catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
            console.error('Email Error:', err)
          })
          setName('')
          setMail('')
          setFeedback('')
      }

    return (
        <div className="about-container">
            <form className="" onSubmit={handleSubmit}>
                <br />
                <div>
                    <h1>Feedback</h1>
                    <p>You can also send me an email for any kind of suggestions and recommendations</p>

                    <div>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input className="form-control email-message-text" name="user_name" type="text"
                            id="name" onChange={nameChange} required />
                    </div>

                    <div>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input className="form-control email-message-text" name="user_email" type="text"
                            id="email" onChange={emailChange} required />
                    </div>

                    <label htmlFor="message">
                        <strong>Message</strong>
                    </label>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            onChange={messageChange}
                            placeholder="Put your message here"
                            required
                            className="form-control email-message-text"
                            rows="8"
                            cols="20"
                        />
                    </div>

                </div>

                <input type="submit" value="Submit" className="btn btn-outline-secondary m-1" />
            </form>
        </div>
    )
}

export default About;