import PortFolioItem from "./PortfolioItem"

const PortFolio = () => {
    return (
      <>
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            {/* <!-- Portfolio Section Heading--> */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Portfolio
            </h2>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Portfolio Grid Items--> */}
            <div className="row justify-content-center">
              {/* <!-- Portfolio Item 1--> */}
              <PortFolioItem />
              {/* <!-- Portfolio Item 2--> */}
              <PortFolioItem />
              {/* <!-- Portfolio Item 3--> */}
              <PortFolioItem />
              {/* <!-- Portfolio Item 4--> */}
              <PortFolioItem />
              {/* <!-- Portfolio Item 5--> */}
              <PortFolioItem />
              {/* <!-- Portfolio Item 6--> */}
              <PortFolioItem />
            </div>
          </div>
        </section>
      </>
    );
}
export default PortFolio