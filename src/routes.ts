import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/user', UserController.show);
routes.delete('/user', UserController.delete);
routes.post('/user', UserController.store);

export default routes;
