import mongoose, { Document, Schema } from 'mongoose';

export interface iRestaurant extends Document {
  name: String;
  email: String;
  adress: String;
  url: String;
  foodType: String;
  menu: Object;
  zip: Number;
}

const schema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  adress: { type: String, require: true },
  url: { type: String, require: true },
  foodType: { type: String, require: true },
  menu: { type: Object, require: true },
  zip: { type: Number, require: true },
});

export const Restaurant = mongoose.model<iRestaurant>('Restaurant', schema);
