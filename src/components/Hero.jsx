import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img 
            src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" 
            alt="Profile" 
          />
        </div>
        <h1>START BOOTSTRAP</h1>
        <p className="hero-divider">
          <span></span>
          
          <span></span>
        </p>
        <p className="hero-subtitle">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  )
}
