import './cards.css';

function Cards(){
    return(
         <section className="cards-section" id="Service">
      <div className="section-header">
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">discover what makes us extraordinary</p>
      </div>
      <div className="cards-navigation">
        <button className="nav-btn prev-btn" id="prevBtn">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="nav-btn next-btn" id="nextBtn">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="cards-container">
        <div className="cards">
          <div className="cards-icon">
            <i className="fas fa-code"></i>
          </div>
          <h3 className="cards-title">Web Dev</h3>
          <p className="cards-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            id!
          </p>
          <button className="cards-button">Learn More</button>
        </div>

        <div className="cards">
          <div className="cards-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h3 className="cards-title">Web Dev</h3>
          <p className="cards-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, minus?
          </p>
          <button className="cards-button">Learn More</button>
        </div>

        <div className="cards">
          <div className="cards-icon">
            <i className="fas fa-pallet"></i>
          </div>
          <h3 className="cards-title">Web Dev</h3>
          <p className="cards-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, minus?
          </p>
          <button className="cards-button">Learn More</button>
        </div>

        <div className="cards">
          <div className="cards-icon">
            <i className="fas fa-rocket"></i>
          </div>
          <h3 className="cards-title">Web Dev</h3>
          <p className="cards-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, minus?
          </p>
          <button className="cards-button">Learn More</button>
        </div>

        <div className="cards">
          <div className="cards-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <h3 className="cards-title">Web Dev</h3>
          <p className="cards-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, minus?
          </p>
          <button className="cards-button">Learn More</button>
        </div>

        <div className="cards">
          <div className="cards-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="cards-title">Web Dev</h3>
          <p className="cards-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, minus?
          </p>
          <button className="cards-button">Learn More</button>
        </div>

        <div className="cards">
          <div className="cards-icon">
            <i className="fas fa-brain"></i>
          </div>
          <h3 className="cards-title">Web Dev</h3>
          <p className="cards-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, minus?
          </p>
          <button className="cards-button">Learn More</button>
        </div>

        <div className="cards">
          <div className="cards-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="cards-title">Web Dev</h3>
          <p className="cards-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            expedita?
          </p>
          <button className="cards-button">Learn More</button>
        </div>
      </div>
    </section>
    )
}

export default Cards;