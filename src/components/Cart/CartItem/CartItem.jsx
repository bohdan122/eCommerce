import React from 'react';
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';

const CartItem = ({ item }) => {
    return (
        <Card>
            <CardMedia image = {item.media.source} alt = {item.name} className = {classes.cardmedia} />
            <CardContent className = {classes.CardContent}>
                <Typography variant = "h3">
                {item.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CartItem;