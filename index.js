const express = require('express');
const bodyParser = require('body-parser');
const domainError = require('./src/middlewares/errorMiddleware/domainError');
const { userRouter, loginRouter, categoriesRouter, blogPost } = require('./src/router');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', blogPost);

app.use(domainError);

app.listen(3000, () => console.log('ouvindo porta 3000!'));