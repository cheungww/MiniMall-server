/*
能操作subcategorys集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')
// 2.字义Schema(描述文档结构)
const subcategorySchema = new mongoose.Schema()

// 3. 定义Model(与集合对应, 可以操作集合)
const SubcategorySchema = mongoose.model('subcategorys', subcategorySchema)

// 4. 向外暴露Model
module.exports = SubcategorySchema
