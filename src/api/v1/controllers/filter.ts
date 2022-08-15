import { Request, Response } from 'express';
import { ProductModel } from '../models/product';

class Filter {
    async getAllFilterBy(req: Request, res: Response) {
        try {
            const { search_field, search_value } = req.body;
            let data: any;

            let queryObj = {};
            console.log(search_value[0], 'queryObj');
            if (search_field !== '' && search_value !== '') {
                if (search_field == 'rating') {
                    // db.myCollection.find({ $or: [{ field1: { $gt: 30 } }, { field1: { $lt: 20 } }] });
                    if (search_value.length == 2) {
                        queryObj['$or'] = [{ [search_field]: { $gte: parseInt(search_value[0]) } }, { [search_field]: { $gte: parseInt(search_value[1]) } }];
                    } else {
                        queryObj['$or'] = [{ [search_field]: { $gte: search_value[0] } }];
                    }
                } else {
                    queryObj[search_field] = { $in: search_value };
                }
            }

            console.log(queryObj, 'queryObj');
            data = await ProductModel.find(queryObj);

            res.status(200).json({ data });
        } catch (e: any) {
            if (e instanceof Error) {
                throw e;
            }
            console.log(e);
        }
    }

    async getSomething(req: Request, res: Response) {
        try {
            const data = await ProductModel.find({});
            res.status(200).json({ data });
        } catch (e: any) {
            if (e instanceof Error) {
                throw e;
            }
        }
    }

    async testing(req: Request, res: Response) {
        try {
            res.status(200).json({ msg: 'working' });
        } catch (e: any) {
            if (e instanceof Error) {
                throw e;
            }
        }
    }
}

export default Filter;
