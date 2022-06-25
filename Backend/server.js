import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import CustomerRoutes from './routes/customer.routes.js'
import './dal/index.js';

const app = new Koa();

app.use(bodyParser());

app.use(CustomerRoutes.routes())
    .use(CustomerRoutes.allowedMethods());

app.listen(3000);
console.log("Application is running on port 3000");