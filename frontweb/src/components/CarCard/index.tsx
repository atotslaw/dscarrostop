import './styles.css';
import CarImg from 'assets/images/car-card.png';
import Button from 'components/Button';

const CarCard = () => {
    return (
        <div className="base-card car-card">
            <div  className="car-card-container">
                <div className="card-image-container">
                    <img src={CarImg} alt="Nome do carro" />
                </div>
                <div className="card-content-container">
                    <h6>Audi Supra TT</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="card-btn-container">
                    <Button text="comprar"/>
                </div>
            </div>
        </div>
    );
}

export default CarCard;