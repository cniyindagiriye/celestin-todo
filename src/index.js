import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import router from './routes/index';

const app = express();

app.use('/', router);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).send('Request not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});

export default app;
