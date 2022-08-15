import Sort from '../controllers/sort';
import { Router } from 'express';
const route = Router();

const sort = new Sort();

route.post('/', sort.getAllSortBy);
route.get('/test', sort.testing);

export default route;
