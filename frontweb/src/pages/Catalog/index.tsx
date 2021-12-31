import './styles.css';
import CarCard from 'components/CarCard';
import Button from 'components/Button';

const Catalog = () => {
  return (
    <div className="main-container catalog-container">
      <div className="row">
        <div className="search-container">
          <div className="search-text-container">
            <input type="search" placeholder="Digite sua busca" />
          </div>
          <div className="search-btn-container">
            <Button text="buscar" />
          </div>
        </div>
      </div>

      <div className="container my-4 card-container">
  
          <div className="row car-card-list">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Catalog;
