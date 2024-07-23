const configEngineView = (app) => {
    app.set('views', './src/views')
    app.set('view engine', 'ejs')
}

module.exports = configEngineView;