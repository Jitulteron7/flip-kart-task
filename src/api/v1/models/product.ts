import mongoose, { Document } from 'mongoose';
export interface ProductDoc extends Document {
    desc: String;
    img: String;
    feature: String;
    brand: String;
    rating: Number;
    review: Number;
    price: Number;
    originalPrice: Number;
    offer: Number;
    assured: String;
    offerType: String;
}
//Desscription	Image	Brand	Features	Rating	Review	Price	Original Price	Offers	Assured	Offer Type

const product = new mongoose.Schema(
    {
        desc: String,
        img: String,
        brand: String,
        feature: String,
        rating: Number,
        review: Number,
        price: Number,
        originalPrice: Number,
        offer: Number,
        assured: String,
        offerType: String
    },
    {
        timestamps: true
    }
);

export const ProductModel = mongoose.model<ProductDoc>('Product', product);
