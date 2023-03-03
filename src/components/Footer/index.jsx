import './index.css';
import ViioIco from './viio_ico.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className='footer-container-inner'>
        <div className='isotipo'>
          <Link to="/">
            <img src={ViioIco} alt="Isotipo" />
          </Link>
        </div>

        <div className='copyright'>
          @ 2023 Sergio Beleño Inc. All rights reserved
        </div>

        <div className='isotipo'>
          <Link to="/">
            <img src={ViioIco} alt="Isotipo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
