const Koa = require('koa');
const app = new Koa();
const router = require('koa-router');

// use logger
const logger = require('koa-logger');
app.use(logger());

const routers =require('./router/index')
// ctx.query.name
// ctx.query.msg
// var bodyParser = require('koa-bodyparser');

// 若想使用 koa-convert 進行轉換，要先載入模組：
// const convert = require('koa-convert');
// 再以 convert(bodyParser()) 包裝

// ctx.request.body.name
// ctx.request.body.msg
// app.use(bodyParser());

// router.get('/user/:name', async (ctx) => {      // 使用 :name 標註這個url變數
//     ctx.body = `This is ${ctx.params.name}'s page.`;      // 使用 ctx.params 將這個url變數取出
// });

// const test11 = ctx => {
//     console.log("124")
//     console.log(ctx.request.query)
//     console.log(ctx.request.query.www)
//     console.log(ctx.req.params)
//     console.log(ctx.response)
//     console.log(ctx)
//     ctx.response.body = `this iss ${ctx.request.query.name}'s page.`;
// }

// const main = ctx => {
//     console.log("1234")
//     ctx.response.body = 'Hello World';

//     console.log('>> three');
// };


// const about = ctx => {
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">Index Page</a>';
// };

// app.use(route.get('/', main));
// app.use(route.get('/about', about));
// app.use(route.get('/test11/:name', test11));



// app.use( async ( ctx ) => {
//     let url = ctx.url
    
//     // 从上下文的request对象中获取
//     let request = ctx.request
//     let req_query = request.query
//     let req_querystring = request.querystring
  
//     // 从上下文中直接获取
//     let ctx_query = ctx.query
//     let ctx_querystring = ctx.querystring
    
//     ctx.body = {
//       url,
//       req_query,
//       req_querystring,
//       ctx_query,
//       ctx_querystring
//     }
//   })

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())


app.listen(3000, console.log('[demo] request get is starting at port 3000'));
