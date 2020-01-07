/*
能操作recommends集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')
// 2.字义Schema(描述文档结构)
const recommendSchema = new mongoose.Schema()

// 3. 定义Model(与集合对应, 可以操作集合)
const RecommendModel = mongoose.model('recommends', recommendSchema)

// 4. 向外暴露Model
module.exports = RecommendModel
