import Get from '../controllers/get';
import { Router } from 'express';
const route = Router();

const get = new Get();

route.get('/', get.getAllProducts);
route.get('/test', get.testing);
export default route;
