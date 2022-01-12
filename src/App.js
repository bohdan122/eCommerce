import React, {useState, useEffect} from 'react';
import {Products, Navbar} from './components';
import { commerce } from './lib/commerce'

const App = () => {
    const [products, SetProducts] = useState([]);

    const fetchProducts = async () =>{
        const { data } = await commerce.products.list();

        SetProducts(data);
    }

    useEffect(() =>{
        fetchProducts();
    }, []);

    return (
        <div>
            <Navbar/>
            <Products products = {products} />
        </div>
    );
};

export default App;