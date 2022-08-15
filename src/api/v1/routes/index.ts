import { Router, Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';
import { ProductModel } from '../models/product';
import filter from './filter';
import get from './get';
import sort from './sort';
import { filterAndSortFun } from '../services';
const route = Router();

//use only when you have to recreate data again
// route.get('/saveData', (req, res) => {

//     try {
//         type FlipKartData = {
//             desc: String;
//             img: String;
//             feature: String;
//             brand: String;
//             rating: Number;
//             review: Number;
//             price: Number;
//             originalPrice: Number;
//             offer: Number;
//             assured: String;
//             offerType: String;
//         };

//         (() => {
//             const csvFilePath = path.resolve(__dirname, 'flipkart.csv');

//             const headers = ['desc', 'img', 'feature', 'brand', 'rating', 'review', 'price', 'originalPrice', 'offer', 'assured', 'offerType'];

//             const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

//             parse(
//                 fileContent,
//                 {
//                     delimiter: ',',
//                     columns: headers
//                 },
//                 (error, result: FlipKartData[]) => {
//                     if (error) {
//                         console.error(error);
//                     }

//                     console.log('Result', result[1]);

//                     for (let i = 1; i < result.length; i++) {
//                         const data = ProductModel.create(result[i])
//                             .then(() => {
//                                 console.log('success');
//                             })
//                             .catch((e) => {
//                                 // console.log(e);
//                                 throw e;
//                             });
//                     }

//                     // fs.writeFile('result.json', result, function (err) {
//                     //     if (err) {
//                     //         console.log(err);
//                     //     }
//                     // });
//                 }
//             );
//         })();

//         res.send('success');
//     } catch (error) {
//         console.log(error, 'data save error');
//     }
// });

route.use('/get', get);
route.use('/filter', filter);
route.use('/sort', sort);

route.post('/filterAndSort', async (req: Request, res: Response) => {
    try {
        let { filter } = req.body;
        const data = await filterAndSortFun(filter);
        res.status(200).json({ data });
    } catch (err) {
        console.log(err);
        throw err;
    }
});
export const MainRouter: Router = route;
