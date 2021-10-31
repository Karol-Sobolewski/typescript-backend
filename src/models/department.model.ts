import mongoose, { Document, Schema, Model } from 'mongoose';
import { prop, getModelForClass } from '@typegoose/typegoose';

class DepartmentClass {
  @prop({ required: true, minlength: 5, maxlength: 20 })
  public name: string;
}

const Department = getModelForClass(DepartmentClass);
export default Department;