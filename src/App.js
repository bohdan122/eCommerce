import React, {useState, useEffect} from 'react';
import { Navbar, Products, Cart } from './components';
import { commerce } from './lib/commerce'

const App = () => {
    const [products, SetProducts] = useState([]);
    const [cart, SetCart] = useState({});

    const fetchProducts = async () =>{
        const { data } = await commerce.products.list();

        SetProducts(data);
    }

    const fetchCart = async () => {
        SetCart(await commerce.cart.retrieve());
    }

    const handleAddCart = async (productId, quanitity) => {
        const item = await commerce.cart.add(productId, quanitity);
        SetCart(item.cart);
    }

    useEffect(() =>{
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <div>
            <Navbar totalItems = {cart.total_items}/>
           {/* <Products products = {products} onAddToCart = {handleAddCart} /> */}
           <Cart cart = {cart} />
        </div>
    );
};

export default App;