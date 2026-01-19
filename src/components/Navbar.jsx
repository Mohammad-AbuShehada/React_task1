import './Navbar.css'

export default function Navbar() {
  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>START BOOTSTRAP</h1>
        </div>

        <ul className="navbar-menu">
          <li><a onClick={() => handleNavClick('portfolio')}>PORTFOLIO</a></li>
          <li><a onClick={() => handleNavClick('about')}>ABOUT</a></li>
          <li><a onClick={() => handleNavClick('contact')}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  )
}
