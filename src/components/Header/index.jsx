import './index.css';
import Logo from './Logo.svg'
import Carrito from './shopping-cart.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [itemsInCart, setItemsInCart] = useState([])

  setInterval(() => {
    try {
      if (itemsInCart !== JSON.parse(localStorage["cart-items"])) {
        setItemsInCart(JSON.parse(localStorage["cart-items"]))
      }
    } catch (error) {
      console.log(error.message)
    }
  }, 100);

  const handleDeleteFromCart = (myId) => {
    var items = JSON.parse(localStorage["cart-items"])

    var filtered = items.filter(function (item) {
      return item.id !== myId;
    });

    localStorage["cart-items"] = JSON.stringify(filtered)

    setTimeout(() => {
      window.location = "/"
    }, 200);
  }

  return (
    <div className="header">
      <div className='pre-header'>

        <div className='logo'>
          <Link to="/">
            <img src={Logo} width="80" alt="VIIO Logo" />
          </Link>
        </div>

        <div className='cart'>
          <div className='cart-logo'>
            <img src={Carrito} alt="Carrito" />
            <div className='numbers'>
              {itemsInCart.length}
            </div>
          </div>
          {
            (itemsInCart.length) ? (
              <div className='opened-cart'>
                {itemsInCart.map((item, index) => (
                  <div className='item-in-minicart' key={index}>
                    <div className='image'>
                      <img src={item.images[0]} alt={item.title} />
                    </div>
                    <div className='content'>
                      <div className='name'>
                        {item.title}
                      </div>
                      <div className='name'>
                        $ {item.price}
                      </div>
                    </div>
                    {
                      <button className='close' onClick={() => { handleDeleteFromCart(item.id) }}>
                        x
                      </button>
                    }
                  </div>
                ))}
              </div>
            ):""
          }
        </div>
      </div>
      <div className='white-space-in-header'>
      </div>
    </div>
  );
}

export default Header;
