import React from "react";
import { Grid } from '@material-ui/core';

import Product from "./Product/Product";
import useStyles from "./styles"

/*const products = [
    { id:1, nameproduct: 'Красівки', description: 'Сучасні модні кросівки для ходьби', price: 'Ціна:$50', image: 'https://www.sportonline.store/image/cache/catalog/easyphoto/sportivnaya-obuv/obuv-dlya-trenirovok/krossovki-dlya-bega-asics-dynaflyte-500x400.jpg.webp'},
    { id:2, nameproduct: 'Телефон', description: 'Сучасна модель смартфону для підлітків.',price: 'Ціна:$150', image: 'https://patifon.ua/storage/web/cache/2/CeSkXzwAhpemtTtEuQKcVJZpf4SbT_b6.jpg?w=858&h=560&fit=resize&s=b391f388acfe3b49b6607d4fd7c25609'},
    { id:3, nameproduct: 'Комп\'ютор', description: 'Високопродуктивний комп\'ютор для відеомонтажу .',price: 'Ціна:$1500', image: 'https://content1.rozetka.com.ua/goods/images/big/193885752.jpg'},
    { id:4, nameproduct: 'Монітор', description: 'Широкоформатний монітор для дизайнера',price: 'Ціна:$445,50', image: 'https://rusartdesign.ru/wp-content/uploads/2018/09/large_01-1024x602.jpg'},
    { id:5, nameproduct: 'Навушники', description: 'Навушники для компютора.',price: 'Ціна:$95,50', image: 'https://brain.com.ua/static/images/prod_img/9/2/U0255492_big.jpg'},
    { id:6, nameproduct: 'Ігрова Мишка', description: 'Комп\'юторна мишка для геймерів.',price: 'Ціна:$111', image: 'https://images.ua.prom.st/2850237430_igrova-mishka-z.jpg'},
    
];*/

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>

            ))}

        </Grid>
    </main>
    );
    
}

export default Products;