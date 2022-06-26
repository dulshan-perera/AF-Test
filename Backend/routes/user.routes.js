import Router from '@koa/router';
import { fetchUser, registerUser } from '../api/user.api.js';

const router = new Router({
    prefix:'/users'
});

//register user
router.post('/', async ctx=>{
    let user = ctx.request.body;
    user = await registerUser(user);
    ctx.response.status = 201;
    ctx.body = user;
});

//fetch user
router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await fetchUser(id);
})

export default router;