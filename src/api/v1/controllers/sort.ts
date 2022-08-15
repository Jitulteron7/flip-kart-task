import { Request, Response } from 'express';
import { ProductModel } from '../models/product';

class Sort {
    async getAllSortBy(req: Request, res: Response) {
        try {
            const { type } = req.body;
            let data: any;
            if (type == 'popularity') {
                data = await ProductModel.find({}).sort({ review: -1, rating: -1 });
            } else if (type == 'priceLH') {
                data = await ProductModel.find({}).sort({ price: 0 });
            } else if (type == 'priceHL') {
                data = await ProductModel.find({}).sort({ price: -1 });
            } else if (type == 'newest') {
                data = await ProductModel.find({}).sort({ createdAt: 0, review: 0, rating: 0 });
            } else if (type == 'relevance') {
                data = await ProductModel.find({});
            }
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
export default Sort;
