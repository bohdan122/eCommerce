import React, {useState, useEffect} from 'react';
import { Navbar, Products, Cart } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        const { cart } = await commerce.cart.add(productId, quanitity);
        
        SetCart(cart);
    }

    const handleUpdateCartQty = async(productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, {quantity});

        SetCart(cart);
    }

    const handleRemoveFromCart = async(productId) => {
        const { cart } = await commerce.cart.remove(productId);

        SetCart(cart);
    }

     const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    SetCart(cart);
  };

    useEffect(() =>{
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
    <Router>
        <div>
            <Navbar totalItems = {cart.total_items}/>
           <Switch>
           <Route exact path = "/">
                <Products products = {products} onAddToCart = {handleAddCart} />
           </Route>
         <Route exact path = "/cart">
                <Cart cart = {cart} />
           </Route>
           </Switch>
        </div>
    </Router>
    );
};

export default App;
