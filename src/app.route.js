import express from 'express'
import ProductRouter from './modules/product/product.route.js'

const AppRouter = express()

AppRouter.use('/product', ProductRouter)

export default AppRouter