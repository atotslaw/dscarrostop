import './styles.css';

import CarImg from 'assets/images/car-card.png';

const CarCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={CarImg} alt="Nome do carro" />
            </div>
            <div className="card-bottom-container">
                <h6>Nome do carro</h6>
            </div>
        </div>
    );
}

export default CarCard;