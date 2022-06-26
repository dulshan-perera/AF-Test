import Router from "@koa/router";
import { login } from "../api/login.api.js";

const router = new Router ({
    prefix:'/login'
});

//login
router.post('/', async ctx=>{
    let creds = ctx.request.body;
    creds = await login(creds);
    ctx.response.status = 201;
    ctx.body = creds;
})

export default router;