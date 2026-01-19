import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>ABOUT</h2>
        <p className="about-divider">
          <span></span>
          <i className="fas fa-star"></i>
          <span></span>
        </p>

        <div className="about-content">
          <div className="about-text">
            <p>
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
            <p>
              You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
            </p>
          </div>

          <button className="download-btn">
            <i className="fas fa-download"></i> Free Download
          </button>
        </div>
      </div>
    </section>
  )
}
