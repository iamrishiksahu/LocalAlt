const express = require('express')
const app = express()

app.use(express.json())

app.use('/', (req, res) => {
    res.status(201).json({message: 'Welcome to LocalAlt! I will be happy to serve your requests.'})
})

const PORT = process.env.PORT || 8032

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})