import { Router } from 'express';

import UserController from './controllers/UserController';
import DisciplineController from './controllers/DisciplineController';

const routes = Router();

/**
 * Rotas de usuarios
 */
routes.get('/users', UserController.index);
routes.get('/user', UserController.show);
routes.delete('/user', UserController.delete);
routes.post('/user', UserController.store);

/**
 * Rotas de disciplinas
 */
routes.get('/disciplines', DisciplineController.index);
routes.get('/discipline', DisciplineController.show);
routes.delete('/discipline', DisciplineController.delete);
routes.post('/discipline', DisciplineController.store);

export default routes;
