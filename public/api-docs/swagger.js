import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'ToDo API',
      version: '1.0.0',
      description: 'ToDo app for scheduling your tasks',
      contact: {
        name: 'Celestin Niyindagiriye(Developer)',
      },
      servers: ['https://localhost:3000'],
    },
  },
  apis: ['public/api-docs/*.js', 'src/index.js', 'src/routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
