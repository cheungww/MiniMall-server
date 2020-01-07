/*
能操作categoryproducts集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')
// 2.字义Schema(描述文档结构)
const categoryProdSchema = new mongoose.Schema()

// 3. 定义Model(与集合对应, 可以操作集合)
const CategoryProductModel = mongoose.model('categoryproducts', categoryProdSchema)

// 4. 向外暴露Model
module.exports = CategoryProductModel
