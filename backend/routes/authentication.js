import { Router } from 'express'
import { login, logout } from '../controllers/authentication.js';

const router = Router();
router.post('/login', login);
router.get('/logout', logout);

export default router;