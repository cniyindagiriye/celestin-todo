import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from '../public/api-docs/swagger';

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
      url: 'localhost://api/docs',
    },
  });
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running...');
});
