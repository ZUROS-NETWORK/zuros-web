import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { router } from './routes/index';
import { secureHeadersMiddleware } from './middlewares/auth';

const app = new Hono();

app.use('*', cors({
  origin: '*', 
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'], 
  exposeHeaders: ['Content-Length', 'X-Custom-Header'], 
  credentials: true,
  maxAge: 86400,
}));

app.use('*', secureHeadersMiddleware);

app.notFound((c) => {
  return c.text('404 page not found', 404);
});

app.route('/api/', router);

export default app;