const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const fs = require('fs')

router.get('/error', (ctx, next) => {
    console.log(ctx.request.query)
    let error = ctx.request.query
    let time = new Date().toISOString()
    let text = 'time:' + time + '\n' + 'message：' + error.message + '\n' + 'name:'+error.name + '\n' + 'line:' + error.lineNumber + '\n' + 'column:' + error.columnNumber + '\n' + '------------------------分割线---------------------------------\n'
    fs.writeFileSync('./error.text',text,{flag:'a'})
    ctx.body = {
        message:'ok'
    }
  });

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000,()=>{console.log('server is running in port 3000')});
