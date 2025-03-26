import { Hono } from 'hono'
import { registerHandler, loginHandler, changePasswordHandler, deleteUserHandler } from '../handlers/auth'
import { authMiddleware } from '../middlewares/auth'

export const authRoutes = new Hono()
authRoutes.post('/register',authMiddleware, registerHandler)
authRoutes.post('/login', loginHandler)
authRoutes.put('/password', authMiddleware, changePasswordHandler);
authRoutes.delete('/users/:username', authMiddleware, deleteUserHandler); 