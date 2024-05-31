import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CollectionDto } from '../dtos/collection.dto';
import { Document } from 'mongoose';

@Schema({})
export class Employee extends Document {
  @Prop({ required: true, trim: true })
  firstName: string;
  @Prop({ required: true, trim: true })
  lastName: string;
  phone: string;
  @Prop({ required: true, trim: true })
  idCard: string;
  @Prop({ required: true, trim: true })
  date: Date;

  @Prop()
  collectionCoffe: CollectionDto;
}

export const employeeSchema = SchemaFactory.createForClass(Employee);
employeeSchema.index({ entityId: 1 });
