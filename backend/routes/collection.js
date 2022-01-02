import { Router } from 'express'
import { getCurrentUserCollection } from '../controllers/collection.js'
import authenticate from '../middleware/authenticate-user.js';

const router = Router();
router.route('/getMyStarWarsCollection').get(authenticate, getCurrentUserCollection)

export default router