import './index.css';
import Logo from './Logo.svg'
import Carrito from './shopping-cart.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className='pre-header'>

        <div className='logo'>
          <Link to="/">
            <img src={Logo} width="80" alt="VIIO Logo" />
          </Link>
        </div>

        <div className='user-name-container'>
          <img src={Carrito} alt="Carrito" />
        </div>
      </div>
      <div className='white-space-in-header'>
      </div>
    </div>
  );
}

export default Header;
