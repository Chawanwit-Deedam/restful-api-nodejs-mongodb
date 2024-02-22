export default () => (req, res, next) => {
    console.info(`[${new Date()}]: {URI: ${req.originalUrl}, Methods: ${req.method} }`)
    next()
}