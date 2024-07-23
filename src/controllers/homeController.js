const getHomePage = (req, res) => {
    res.send('Hello World!')
}

const getHungdeptraiPage = (req, res) => {
    res.render('hungdeptrai', { title: 'Hey', message: 'Hello there!' })
} 

module.exports = {
    getHomePage,
    getHungdeptraiPage
}