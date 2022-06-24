import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser());

app.listen(3000);
console.log("Application is running on port 3000");