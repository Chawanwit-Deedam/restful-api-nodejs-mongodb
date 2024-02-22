import express from "express";
import AppRouter from "./src/app.route.js";
// import  Mysql from "mysql";
import AppMiddleware from "./src/app.middleware.js";
import AppConfig from './src/app.config.js'

const app = express()

app.use(AppConfig)
app.use(AppMiddleware)
app.use(AppRouter)

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
    console.log( `SERVER IS RUNNING ON PORT ${PORT}` )
})