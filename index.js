const express = require('express');
const app = express();
const router = require('./routes/router')

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.json');

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use('/', router)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
    console.log('server running!')
})