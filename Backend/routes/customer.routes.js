import Router from '@koa/router';
import { fetchCustomer, registerCustomer } from '../api/customer.api.js';

const router = new Router({
    prefix:'/customers'
});

//register customer
router.post('/', async ctx=>{
    let customer = ctx.request.body;
    customer = await registerCustomer(customer);
    ctx.response.status = 201;
    ctx.body = customer;
});

//fetch customer
router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await fetchCustomer(id);
})

export default router;