import Router from "@koa/router";
import { login } from "../api/login.api.js";
import { registerUser } from "../api/user.api.js";

const router = new Router ();

//login
router.post('/login', async ctx=>{
    let creds = ctx.request.body;
    const result = await login(creds);
    ctx.response.status = 201;
    ctx.body = result;
})

//register
router.post('/register', async ctx=>{
    let user = ctx.request.body;
    const result = await registerUser(user);
    ctx.response.status = 201;
    ctx.body = result;
})

export default router;