import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-section">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>

          <div className="footer-section">
            <h3>AROUND THE WEB</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, open source Bootstrap theme created by Start Bootstrap.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Your Website 2023</p>
      </div>
    </footer>
  )
}
