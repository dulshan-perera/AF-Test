import Router from '@koa/router';
import { fetchUser } from '../api/user.api.js';

const router = new Router({
    prefix:'/users'
});

//fetch user
router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await fetchUser(id);
})

export default router;