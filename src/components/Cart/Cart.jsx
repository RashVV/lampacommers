import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../ChekoutForm/Chekout/SimpleForm/store";
import showResults from "../ChekoutForm/Chekout/SimpleForm/showResalt";
import SimpleForm from "../ChekoutForm/Chekout/SimpleForm/SimpleForm";


import CartItem from './CartItem/CartItem';
import useStyles from "./styles"

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const classes = useStyles();
    
    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant='subtitle1'>У Вас в корзині нема жодного товару,  <Link className={classes.link} to="/">оберіть та додайте товар який Ви хочете придбати в Корзину </Link>!</Typography>
    );

    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((lineItem) => (
                <Grid item xs={12} sm={4} key={lineItem.id}>
                    <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                </Grid>
            ))}
            <Grid item xs={4} > 
                        <Provider store={store}>
                            <div style={{ padding: 15 }}>
                            <Paper className={classes.paper}><SimpleForm onSubmit={showResults} /></Paper>
                                </div>
                        </Provider>
            </Grid>
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'>Загальна Сума покупки: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type='button' variant='contained' color="secondary" onClick={handleEmptyCart}>Очистити корзину</Button>
               {/* <Button className={classes.chrckoutButton} component={Link} to="/checkout" size="large" type='button' variant='contained' color="primary">Оформити покупку</Button>*/}
            </div>

        </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Ваші товари</Typography>
            { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        </Container>

      
    );
}

export default Cart
