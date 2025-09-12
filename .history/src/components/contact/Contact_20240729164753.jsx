import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Enter your name ..." />
      </div>
      <div>
        <input type="email" placeholder="Enter your email ..." />
      </div>
      <div><textarea name="text area" id="" cols="30" rows="10" placeholder='Your message ...'></textarea></div>
      <button></button>
    </div>
  );
}

export default Contact
