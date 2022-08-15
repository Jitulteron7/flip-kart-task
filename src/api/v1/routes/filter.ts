import Filter from '../controllers/filter';
import { Router } from 'express';
const route = Router();

const filter = new Filter();

route.post('/', filter.getAllFilterBy);
route.get('/test', filter.testing);

export default route;
