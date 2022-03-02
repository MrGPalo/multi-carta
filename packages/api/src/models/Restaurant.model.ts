import mongoose, { Document, Schema } from 'mongoose';
import { iMenu } from './Menu.model';

export interface iRestaurant extends Document {
  name: String;
  email: String;
  adress: String;
  url: String;
  foodType: Array<String>;
  menu: iMenu['_id'];
  zip: Number;
}

const schema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  adress: { type: String, require: true },
  url: { type: String, require: true },
  foodType: { type: [String], require: true },
  menu: { type: Schema.Types.ObjectId, ref: 'iMenu' },
  zip: { type: Number, require: true },
});

export const Restaurant = mongoose.model<iRestaurant>('Restaurant', schema);
