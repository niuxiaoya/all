const Koa = require('koa');
const app = new Koa();
const serve = require("koa-static")

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });

//静态页处理
app.use(serve(__dirname+"/html",{extensions:['html']}))


app.listen(3000);