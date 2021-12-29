import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Button from 'components/Button';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-card first-container">
          <div className="home-card first-content-container">
            <div>
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <div className="home-card second-container">
          <div className="home-btn-container">
            <div>
              <Link to="/cars">
                <Button />
              </Link>
            </div>
          </div>
          <div className="content-second-container">
            <h5>Comece agora a navegar</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
