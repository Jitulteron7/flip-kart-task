import { Request, Response } from 'express';
import { ProductModel } from '../models/product';

class Get {
    async getAllProducts(req: Request, res: Response) {
        try {
            const data = await ProductModel.find({});
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

export default Get;
