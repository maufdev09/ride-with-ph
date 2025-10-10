import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from '@/app/middlewares/globalErrorHandler';
import notFound from '@/app/middlewares/notFound';

const app: Application = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ride with PH API 🚗</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 20px;
                background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .container {
                max-width: 800px;
                width: 100%;
                background: #0f3460;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                color: #e4e4e4;
            }
            h1 {
                color: #00d4ff;
                text-align: center;
                margin-bottom: 30px;
            }
            .status {
                background: #4caf50;
                color: white;
                padding: 10px 20px;
                border-radius: 50px;
                display: inline-block;
                margin-bottom: 20px;
            }
            .env-badge {
                background: #ffa502;
                color: white;
                padding: 8px 15px;
                border-radius: 50px;
                display: inline-block;
                margin-left: 10px;
                font-size: 0.9em;
            }
            .routes {
                background: #1a1a2e;
                padding: 20px;
                border-radius: 10px;
                margin: 20px 0;
            }
            .route {
                display: flex;
                justify-content: space-between;
                padding: 10px;
                border-bottom: 1px solid #2c3e50;
            }
            .route:last-child {
                border-bottom: none;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                color: #a8a8a8;
            }
            .badge {
                background: #00d4ff;
                color: #0f3460;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 0.9em;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚗 Ride with Next Level Team</h1>
            
            <div style="text-align: center;">
                <div class="status">🚀 Server is running smoothly</div>
                
            </div>

            <div class="routes">
                <h2>📚 Available Routes</h2>
                <div class="route">
                    <span>Rides API</span>
                    <span class="badge">/api/rides</span>
                </div>
                <div class="route">
                    <span>Users API</span>
                    <span class="badge">/api/users</span>
                </div>
                <div class="route">
                    <span>Drivers API</span>
                    <span class="badge">/api/drivers</span>
                </div>
            </div>

            <div style="background: #2c3e50; padding: 15px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #00d4ff; margin: 0;">📖 Documentation</h3>
                <p style="margin: 10px 0 0 0;">Coming soon...</p>
            </div>

            <div class="footer">
                <p>🌐 Running on: <strong>${
                  process.env.NODE_ENV || 'development'
                }</strong></p>
                <p>Version 1.0.0</p>
                <p>Maintained by Next Level Team</p>
                <p>Last Updated: ${new Date().toLocaleString()}</p>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
