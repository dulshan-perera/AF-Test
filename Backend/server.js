import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv'
import UserRoutes from './routes/user.routes.js'
import LoginRoutes from './routes/login.routes.js'
import './dal/index.js';

const app = new Koa();
dotenv.config();
app.use(bodyParser());

app.use(UserRoutes.routes())
    .use(UserRoutes.allowedMethods());
app.use(LoginRoutes.routes())
    .use(LoginRoutes.allowedMethods());


app.listen(3000);
console.log("Application is running on port 3000");