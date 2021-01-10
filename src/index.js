import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from '../public/api-docs/swagger';
import userRoutes from './routes/userRoute';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.status(200).json({
    info: {
      title: 'ToDo app',
      author: 'Celestin Niyindagiriye',
    },
    request: {
      type: 'GET',
      url: 'https://celestin-todo.herokuapp.com/api/docs',
    },
  });
});
app.use('/users', userRoutes);

app.use((req, res) => {
  res.status(404).send('Not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT ${PORT}...`);
});

export default app;
