import Router from '@koa/router';
import { addItem, fetchItem, updateItem } from '../api/item.api.js';
import { getItems } from '../dal/item.dao.js';

const router = new Router({
    prefix:'/items'
});

//addItem
router.post('/', async ctx=>{
    let item = ctx.request.body;
    const result = await addItem(item);
    try{
        ctx.response.status = 201;
        ctx.body = item;
    }catch (e){
        throw new Error ("Error in adding item!");
    }
})

//fetchItems
router.get('/', async ctx =>{
    const result = await getItems();
    try{
        ctx.response.status = 200;
        ctx.body = result;
    }catch (e){
        throw new Error ("Error in fetching items!");
    }
})

//fetchItem
router.get('/:id', async ctx =>{
    let id = ctx.params.id;
    const result = await fetchItem(id);
    try{
        ctx.response.status = 200;
        ctx.body = result;
    }catch(e){
        throw new Error("Error in fetching Item!")
    }
})

//updateItem
router.put('/:id', async ctx =>{
    let id = ctx.params.id;
    let item = ctx.request.body;
    const result = await updateItem(id, item);
    try{
        ctx.response.status = 201;
        ctx.body = result;
    }catch(e){
        throw new Error ("Failed to update the Item!");
    }
})

export default router;