import React from 'react'

export default function Contact() {
  return (
    <section>
      <h2 className='text-3xl pb-4 font-bold'>Contact Us</h2>
      <form id='contact-form'>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <input type="email" placeholder="Email" />
        </p>
        <p>
          <input type="text" placeholder="Website" />
        </p>
        <p>
          <textarea placeholder="Message"></textarea>
        </p>
        <p>
          <button className='bg-blue-800 text-white px-2 py-1 border rounded-md' type="submit">Submit</button>
        </p>
        
        
        
      </form>
    </section>
  )
}