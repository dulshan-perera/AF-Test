import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv'
import { authenticate } from './middleware/auth.middleware.js';
import UserRoutes from './routes/user.routes.js'
import OpenRoutes from './routes/open.routes.js'
import ItemRoutes from './routes/item.routes.js';
import './dal/index.js';

const app = new Koa();
dotenv.config();
app.use(bodyParser());

app.use(OpenRoutes.routes())
    .use(OpenRoutes.allowedMethods());

app.use(authenticate)

app.use(UserRoutes.routes())
    .use(UserRoutes.allowedMethods());
app.use(ItemRoutes.routes())
    .use(ItemRoutes.allowedMethods());
        
app.listen(3000);
console.log("Application is running on port 3000");