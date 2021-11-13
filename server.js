const express = require('express');
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const PORT = process.env.PORT || 5002

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title:'Issue Management API',
            version: "1.0.0",
            description: "Issue Management API information",
        },
        servers: [
            {
                url: "http://localhost:5002/api/v0",
            },
        ],
    },
    apis: ["./controllers/*.js"],
};

const swaggerDocs =swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocs))

//middleware config
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//router
const router = require('./routers/issueRouter')

app.use('/api/v0', router)

//api testing
app.get('/', (req, res) => {
    res.json({ message: 'hello from issue management api' })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

module.exports = app