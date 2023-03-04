import React, { useEffect, useState, useMemo } from "react";
import { connect } from 'react-redux';
import { setItemInMiniCart } from "../../actions";
import './index.css'

const Products = (props) => {

    const { userID, miniCart } = props

    const [products, setProducts] = useState([]);
    const [items, setItems] = useState(miniCart);
    const [search, setSearch] = useState("");

    useEffect(() => {

        if (localStorage["products"]) {
            if (JSON.parse(localStorage["products"]).length >= 1) {
                // Local storage to update quickly the products 
                setProducts(JSON.parse(localStorage["products"]));
            }
        } else {
            fetch('https://dummyjson.com/products?limit=15')
                .then(response => response.json())
                .then((data) => {
                    setProducts(data.products);
                    localStorage.setItem("products", JSON.stringify(data.products))
                })
        }

    }, []);

    const handleAddToCart = (items, id) => {
        setItems([...items, JSON.parse(localStorage["products"])[id]])

        if (!localStorage["user-id"]) {
            localStorage.setItem("user-id", userID)
        }

        let minicart = JSON.parse(localStorage["products"])[id]

        props.setItemInMiniCart({
            minicart
        })
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const filteredProducts = useMemo(() =>
        products.filter((product) => {
            return product.title.toLowerCase().includes(search.toLocaleLowerCase());
        }),
        [products, search]
    )

    return (
        <>
            <div className="search-results">
                <div className="search-container-results">
                    <span>Search </span><input type="text" value={search} onChange={handleSearch} />
                </div>
            </div>
            <div className='product-list-container'>

                {
                    filteredProducts.map((product, index) => (
                        <div className="product-item" id={product.id - 1} key={index}>
                            {localStorage.setItem("cart-items", JSON.stringify(miniCart))}
                            <div className="image">
                                <img src={product.images[0]} alt={product.title} />
                            </div>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>$ {product.price}</p>
                            <button onClick={() => { handleAddToCart(items, (product.id - 1)) }}>Add to cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

const mapStateToProps = (state, actions) => {
    return {
        userID: state.userID,
        miniCart: state.miniCart
    }
}

const mapDispatchToProps = {
    setItemInMiniCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)