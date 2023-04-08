const swaggerJSDocs = require('swagger-jsdoc')

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Mock Test",
            version: "1.0.0",
            description: "Documentation API",
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./swagger.json"]
}

const swaggerSpec = swaggerJSDocs(swaggerOptions)

module.exports = swaggerSpec