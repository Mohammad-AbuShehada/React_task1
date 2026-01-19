import './PortfolioModal.css'

export default function PortfolioModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-body">
          <img src={project.image} alt={project.title} />
          
          <div className="modal-info">
            <h2>{project.title}</h2>
            <hr />
            <p>{project.description}</p>
            <p><strong>Category:</strong> {project.category}</p>
            
            <div className="modal-buttons">
              <button className="btn-primary">
                <i className="fas fa-download"></i> Download
              </button>
              <button className="btn-secondary" onClick={onClose}>
                <i className="fas fa-times"></i> Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
