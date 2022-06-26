import Router from '@koa/router';
import { addPromotion, fetchPromotion, fetchPromotions } from '../api/promotion.api.js';

const router = new Router ({
    prefix:'/promotions'
});

//addPromotion route
router.post('/', async ctx =>{
    const promotion = ctx.request.body;
    const result = await addPromotion(promotion);
    try{
        ctx.response.status =201;
        ctx.body = promotion
    }catch(e){
        throw new Error("Error in adding promotion!");
    }
});

//fetch Promotions
router.get('/', async ctx =>{
    const result = await fetchPromotions();
    try{
        ctx.response.status = 200;
        ctx.body = result;
    }catch(e){
        throw new Error ("Error in fetching the promotions!");
    }
}) ;

//fetchPromotion
router.get('/:id', async ctx=>{
    let id = ctx.params.id;
    const result = await fetchPromotion(id);
    try{
        ctx.response.status = 200;
        ctx.body = result;
    }catch(e){
        throw new Error("Error in fetching the Promotion!")
    }
})

export default router;