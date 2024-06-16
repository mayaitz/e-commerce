import express, {Request, Response} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../package.json';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Shopen API',
            version: version,
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    apis: ['./src/Routes/*.ts']
}

const swaggerSpec = swaggerJsdoc(options);

function swagger(app: express.Express): void {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get('/swagger.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    }); 

    console.log("Swagger UI is available at /docs");
} 

export default swagger;
