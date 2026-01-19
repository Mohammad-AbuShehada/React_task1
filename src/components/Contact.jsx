import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', formData)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>CONTACT ME</h2>
        <p className="contact-divider">
          <span></span>
          <i className="fas fa-star"></i>
          <span></span>
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </section>
  )
}
