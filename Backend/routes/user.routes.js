import Router from '@koa/router';
import { fetchCustomers, fetchUser } from '../api/user.api.js';

const router = new Router({
    prefix:'/users'
});

//fetch user
router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await fetchUser(id);
})

//fetchCustomers
router.get('/customers/:role', async ctx =>{
    let role = ctx.params.role;
    const result = await fetchCustomers(role);
    try{
        ctx.response.status = 200;
        ctx.body = result;
    }catch(e){
        throw new Error("Failed fetching customers!");
    }
})
export default router;