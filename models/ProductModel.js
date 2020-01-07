/*
能操作products集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')
// 2.字义Schema(描述文档结构)
const popproductSchema = new mongoose.Schema()
const newproductSchema = new mongoose.Schema()
const sellproductSchema = new mongoose.Schema()

// 3. 定义Model(与集合对应, 可以操作集合)
const PopProductSchema = mongoose.model('popproducts', popproductSchema)
const NewProductSchema = mongoose.model('newproducts', newproductSchema)
const SellProductSchema = mongoose.model('sellproducts', sellproductSchema)

// 4. 向外暴露Model
module.exports = {
  pop: PopProductSchema,
  new: NewProductSchema,
  sell: SellProductSchema
}
