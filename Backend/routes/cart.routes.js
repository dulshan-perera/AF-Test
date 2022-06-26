import Router from '@koa/router';
import { addToCart, createCart, fetchCart, fetchCarts } from '../api/cart.api.js';

const router = new Router ({
    prefix:'/carts'
});

//Ccreate cart route
router.post('/', async ctx =>{
    const cart = ctx.request.body;
    const result = await createCart(cart);
    try{
        ctx.response.status =201;
        ctx.body = result
    }catch(e){
        throw new Error("Error in creating cart!");
    }
});

//fetch Carts
router.get('/', async ctx =>{
    const result = await fetchCarts();
    try{
        ctx.response.status = 200;
        ctx.body = result;
    }catch(e){
        throw new Error ("Error in fetching the carts!");
    }
}) ;

//fetchCart
router.get('/:id', async ctx=>{
    let id = ctx.params.id;
    const result = await fetchCart(id);
    try{
        ctx.response.status = 200;
        ctx.body = result;
    }catch(e){
        throw new Error("Error in fetching the Cart!")
    }
})

//addToCart
router.put('/:id', async ctx=>{
    let id = ctx.params.id;
    let item = ctx.request.body;
    const result = await addToCart(id, item);
    try{
        ctx.response.status = 201;
        ctx.body = result;
    }catch(e){
        throw new Error("Error in adding to the Cart!")
    }
})

export default router;