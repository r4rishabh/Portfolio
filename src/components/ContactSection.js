import React from 'react'
import emailIcon from '../resources/email.png'
import githubIcon from '../resources/github.png'
import linkedinIcon from '../resources/linkedin.png'
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactSection() {
  const [state, handleSubmit] = useForm("xovqebkq");

  if (state.succeeded) {
    // window.alert("thank you for your response")
    toast.success("Thank you for yor response.", {
      position: toast.POSITION.TOP_CENTER
    });
}
  return (
    <section className='py-20 w-full px-4' id='contact'>
     <ToastContainer />
        <div className='w-full'>
            <div>
              <h1 className="text-center font-bold text-4xl dark:text-white">
                  Contact
                 <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
              </h1>
            </div>
       <div className='flex '> 
         <div className="md:w-4/5 w-[90%] py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
         <div className=''>
            <h1 className='font-semibold dark:text-white'>I am open to talk regarding freelancing or full-time opportunities. Fell free to contact me using your preferred medium.</h1>
         </div>
         <div className='flex flex-row items-center justify-center gap-4 mt-6 mb-6'>
          <a href="mailto:r303799@gmail.com"><img src={emailIcon} alt='email-icon'/></a>
          <a target='blank' href='https://www.linkedin.com/in/rds1333/'><img src={linkedinIcon} alt='linkedin-icon'/></a>
          <a target='blank' href='https://github.com/r4rishabh'><img src={githubIcon} alt='git-icon'/></a>
         </div>
         <form onSubmit={handleSubmit} className=" space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="xyz@email.com" required/>
              <ValidationError 
             prefix="Email" 
              field="email"
              errors={state.errors}
              />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name='subject' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave your comment..."></textarea>
              <ValidationError 
              prefix="Message" 
              field="message"
               errors={state.errors}
              />
          </div>
          <button type="submit" disabled={state.submitting} className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-600 sm:w-fit hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
         </div>
       </div>
        </div>
    </section>
  )
}

export default ContactSection