import Router from '@koa/router';
import { createWishList, fetchLists, fetchList, addToList } from '../api/wishList.api.js';

const router = new Router ({
    prefix:'/lists'
});

//Ccreate list route
router.post('/', async ctx =>{
    const list = ctx.request.body;
    const result = await createWishList(list);
    try{
        ctx.response.status =201;
        ctx.body = result
    }catch(e){
        throw new Error("Error in creating list!");
    }
});

//fetch List
router.get('/', async ctx =>{
    const result = await fetchLists();
    try{
        ctx.response.status = 200;
        ctx.body = result;
    }catch(e){
        throw new Error ("Error in fetching the lists!");
    }
}) ;

//fetch List
router.get('/:id', async ctx=>{
    let id = ctx.params.id;
    const result = await fetchList(id);
    try{
        ctx.response.status = 200;
        ctx.body = result;
    }catch(e){
        throw new Error("Error in fetching the List!")
    }
})

//addToList
router.put('/:id', async ctx=>{
    let id = ctx.params.id;
    let item = ctx.request.body;
    const result = await addToList(id, item);
    try{
        ctx.response.status = 201;
        ctx.body = result;
    }catch(e){
        throw new Error("Error in adding to the List!")
    }
})

export default router;