import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Your Name' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='youremailid@xyz.com' />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Message down your query here' />
                </div>
                <button type='submit'>Send</button>
            </form>
      </main>
    </div>
  );
};

export default Contact
