import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles-products'
import Product from './Product/Product';

const products = [
    {id: 1, name: 'Keyboard', description: 'Membrane keyboard', price: '$20', image:'https://img.mta.ua/image/cache/data/foto/z608/60821/photos/Logitech-K400-Plus-WL-Black-1-600x600.jpg'}
];

const Products = () => {
    const classes = useStyles();
    return(
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}> 
        {products.map((product) =>(
            <Grid item key={product.id} xs={12} sm={6} lg={3}>
                <Product product={product} />
                </Grid>
        ))}
        </Grid>
    </main>
    );
}

export default Products;