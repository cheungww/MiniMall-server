/*
用来定义路由的路由器模块
 */
const express = require('express')

const MultiImgModel = require('../models/MultiImgModel')
const ProductModel = require('../models/ProductModel')
const CategoryModel = require('../models/CategoryModel')
const SubcategoryModel = require('../models/SubcategoryModel')
const CategoryProductModel = require('../models/CategoryProductModel')
const RecommendModel = require('../models/RecommendModel')

// 得到路由器对象
const router = express.Router()

// 获取轮播图
router.get('/home/multidata', (req, res) => {
  MultiImgModel.findOne({},{ _id: 0 })
    .then(multiImgs => res.send({
      data: multiImgs,
      returnCode: "SUCCESS",
      success: true
    }))
    .catch(err => {
      console.error('获取轮播图异常', err);
      res.send({
        returnCode: "fail",
        msg: "获取轮播图失败，请重新尝试!，可联系qq：1329105041"
      })
    })
})

// 获取商品
router.get('/home/data', (req, res) => {
  const {type, page} = req.query
  ProductModel[type].findOne({"data.page": parseInt(page)},{data: 1, _id:0 })
    .then(popProduct => res.send(popProduct))
    .catch(err => {
      console.error('获取商品异常', err);
      res.send({
        returnCode: "fail",
        msg: "获取商品失败，请重新尝试!，可联系qq：1329105041"
      })
    })
})

// 获取商品分类
router.get('/category', (req, res) => {
  CategoryModel.findOne({}, {category: 1, _id: 0})
    .then(category => res.send({
      data: category,
      returnCode: "SUCCESS",
      success: true
    }))
    .catch(err => {
      console.error('获取商品分类异常', err);
      res.send({
        returnCode: "fail",
        msg: "获取商品分类失败，请重新尝试!，可联系qq：1329105041"
      })
    })
})

// 获取二级分类
router.get('/subcategory', (req, res) => {
  const { maitKey } = req.query;
  SubcategoryModel.findOne({key: maitKey}, { data: 1, key: 1, _id: 0 })
    .then(subcategory => res.send(subcategory))
    .catch(err => {
      console.error('获取二级分类异常', err);
      res.send({
        returnCode: "fail",
        msg: "获取二级分类失败，请重新尝试!，可联系qq：1329105041"
      })
    })
})

// 获取分类商品
router.get('/subcategory/detail', (req, res) => {
  const { miniWallkey, type } = req.query;
  CategoryProductModel.find({ miniWallKey: miniWallkey, sort: type })
    .then(products => res.send(products))
    .catch(err => {
      console.error('获取分类商品异常', err);
      res.send({
        returnCode: "fail",
        msg: "获取分商品类失败，请重新尝试!，可联系qq：1329105041"
      })
    })
})

// 获取推荐商品
router.get('/recommend', (req, res) => {
  RecommendModel.findOne()
    .then(products => res.send({
      data: products,
      returnCode: "SUCCESS",
      success: true
    }))
    .catch(err => {
      console.error('获取推荐商品异常', err);
      res.send({
        returnCode: "fail",
        msg: "获取推荐商品失败，请重新尝试!，可联系qq：1329105041"
      })
    })
})

module.exports = router
