const express=require('express')
const bodyParser=require('body-parser')
const app=express()
// 跨域
app.use(require('./Tools/cors').cors)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("服务器")
})


// 子路由
app.use("user",require('./Controller/user'))
app.use("uploads",require('./Controller/uploads'))

// 静态资源
qpp.use('uploads',express.static(__dirname+'uploads'))

app.listen(81,()=>{
    console.log('服务器端口81启动')
})