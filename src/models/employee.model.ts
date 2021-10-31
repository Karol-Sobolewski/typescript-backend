import mongoose, { Document, Schema, Model } from 'mongoose';
import { prop, getModelForClass } from '@typegoose/typegoose';

class EmployeeClass {
  @prop({ required: true })
  public firstName: string;

  @prop({ required: true })
  public lastName: string;

  @prop({ required: true })
  public department: string;
}

const Employee = getModelForClass(EmployeeClass);
export default Employee;