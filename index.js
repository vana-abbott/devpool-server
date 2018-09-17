const app = require('express')()
const port = 8888

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => console.log(`Listening on ${port}!`))