import React from 'react';
import { connect } from 'react-redux';
import { deleteItemInMinicart } from "../../actions";
import './index.css';
import Logo from './Logo.svg'
import Carrito from './shopping-cart.png'
import { Link } from 'react-router-dom';

function Header(props) {

  const { miniCart } = props;

  const handleDeleteFromCart = (myId) => {
    props.deleteItemInMinicart(myId)
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
              {miniCart.length}
            </div>
          </div>
          {
            (miniCart.length >= 1) ? (
              <div className='opened-cart'>
                {miniCart.map((item, index) => (
                  (item.minicart !== undefined) && (
                    <div className='item-in-minicart' key={index}>
                      <div className='image'>
                        {localStorage.setItem("cart-items", JSON.stringify(miniCart))}
                        <img src={item.minicart.images[0]} alt={item.minicart.title} />
                      </div>
                      <div className='content'>
                        <div className='name'>
                          {item.minicart.title}
                        </div>
                        <div className='name'>
                          $ {item.minicart.price}
                        </div>
                      </div>
                      {
                        <button className='close' onClick={() => { handleDeleteFromCart(item.minicart.id) }}>
                          x
                        </button>
                      }
                    </div>
                  )
                ))}
              </div>
            ) : ""
          }
        </div>
      </div>
      <div className='white-space-in-header'>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    miniCart: state.miniCart,
  }
}

const mapDispatchToProps = {
  deleteItemInMinicart
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)