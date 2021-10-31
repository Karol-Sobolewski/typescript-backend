
import mongoose, { Document, Schema, Model } from 'mongoose';
import { prop, getModelForClass } from '@typegoose/typegoose';

class ProductClass {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public client: string;

}

const Product = getModelForClass(ProductClass);
export default Product;