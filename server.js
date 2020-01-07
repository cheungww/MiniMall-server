/*
应用的启动模块
1. 通过express启动服务器
2. 通过mongoose连接数据库
  说明: 只有当连接上数据库后才去启动服务器
3. 使用中间件
 */
const mongoose = require('mongoose')
const express = require('express')
const app = express() // 产生应用对象

// 声明使用静态中间件
app.use(express.static('public'))
// 声明使用解析post请求的中间件
app.use(express.urlencoded({extended: true})) // 请求体参数是: name=tom&pwd=123
app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}

// 声明使用路由器中间件
const indexRouter = require('./routers')
app.use('/minimall/api', indexRouter)  //

// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost/MiniMall', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('连接数据库成功!!!')
    // 只有当连接上数据库后才去启动服务器
    app.listen('5001', '0.0.0.0', () => {
      console.log('服务器启动成功, 请访问: http://localhost:5001')
    })
  })
  .catch(error => {
    console.error('连接数据库失败', error)
  })