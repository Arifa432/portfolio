 import { useState, useEffect } from 'react';

export default function ContactForm() {

  const [name, setName] = useState(() => localStorage.getItem('user_name') || '');
  const [email, setEmail] = useState(() => localStorage.getItem('user_email') || '');
  const [message, setMessage] = useState(() => localStorage.getItem('user_message') || '');
  const [debouncedEmail, setDebouncedEmail] = useState(email);
  const [formError, setFormError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('user_name', name);
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_message', message);
  }, [name, email, message]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedEmail(email);
    }, 400);

    return () => clearTimeout(timer);
  }, [email]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailError = debouncedEmail && !emailRegex.test(debouncedEmail) 
    ? 'The email format is not valid.' 
    : '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormError('Please fill out all fields.');
      return;
    }

    if (emailError) {
      setFormError(' please first remove the email error.');
      return;
    }

    setFormError('');
    setShowSuccess(true);
    
    setName('');
    setEmail('');
    setMessage('');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_message');

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className='formContainer'>
      
      <div className='form'>
        <h3 className='form-title'>Contact Me</h3>
        
        {(name || email || message) && (
          <p className='show-hint'>
            You have unsent message data saved!
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label className='name-label'>Name:</label>
            <input
              className='name-input' 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label className='email-label'>Email:</label>
            <input 
              className='email-input'
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: emailError ? '1px solid red' : '1px solid #ccc'}}
            />
            {emailError && <span className='show-error'>{emailError}</span>}
          </div>

          <div style={{ marginBottom: '15px' }}>
            [6/2/2026 6:40 PM] A: <label className='message-label'>Message:</label>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className='message-input'
            ></textarea>
          </div>

          {formError && formError.trim() !== '' && (
            <p className='show-error'>
              {formError}
            </p>
)}

          <button className='submit-btn' type="submit">
            Sent Message
          </button>
        </form>
      </div>

      
      <div className='live-show-container'>
        <h3 style={{ marginTop: 0 }}>Live Preview</h3>

        <div className='live-box'>

          <p>
            <strong>Name:</strong> {name || <span className='live-name' >Typing...</span>}
          </p>
          <p>
            <strong>Email:</strong> {email || <span className='live-email'>Typing...</span>
            }</p>
          <p>
            <strong>Message Content</strong>
          </p>
          <p className='pre-message'>
            {message || <span style={{ color: '#aaa' }}>Your message preview will appear here... ✨✍️</span>}
          </p>
        </div>
      </div>


      {showSuccess && (
        <div className='show-success'>
          🎉 Your message sent successfuly.
        </div>
      )}

    </div>
  );
}