import './Portfolio.css'

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png',
      bgColor: '#d04d5a'
    },
    {
      id: 2,
      image: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png',
      bgColor: '#18bc9c'
    },
    {
      id: 3,
      image: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png',
      bgColor: '#1f1f1f'
    },
    {
      id: 4,
      image: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png',
      bgColor: '#3b5998'
    },
    {
      id: 5,
      image: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png',
      bgColor: '#2c3e50'
    },
    {
      id: 6,
      image: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png',
      bgColor: '#c9b3a3'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2>PORTFOLIO</h2>
        <p className="portfolio-divider">
          <span></span>
          <i className="fas fa-star"></i>
          <span></span>
        </p>

        <div className="portfolio-grid">
          {portfolioItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
