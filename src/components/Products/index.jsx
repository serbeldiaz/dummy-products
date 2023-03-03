import React, { useEffect, useState } from "react";
import './index.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        if(localStorage["cart-items"]){
            setItems(JSON.parse(localStorage["cart-items"]))
        }
    },[])

    useEffect(() => {
        
        if (localStorage["products"]) {
            if (JSON.parse(localStorage["products"]).length >= 1) {
                // Local storage to update quickly the products 
                setProducts(JSON.parse(localStorage["products"]));
            }
        }else{
            fetch('https://dummyjson.com/products?limit=15')
                .then(response => response.json())
                .then((data) => {
                    setProducts(data.products);
                    localStorage.setItem("products", JSON.stringify(data.products))
                })
        }
        
        localStorage.setItem("cart-items", JSON.stringify(items))

    }, [items]);

    const handleAddToCart = (items, id) => setItems([...items, JSON.parse(localStorage["products"])[id]])

    return (
        products.map((product, index) => (
            <div className="product-item" id={product.id - 1} key={index}>
                <div className="image">
                    <img src={product.images[0]} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
                <button onClick={() => { handleAddToCart(items, (product.id - 1)) }}>Add to cart</button>
            </div>
        ))
    )
}

export default Products