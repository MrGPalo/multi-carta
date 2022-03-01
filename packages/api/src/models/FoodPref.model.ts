import mongoose, { Document, Schema } from 'mongoose';

export interface iFoodPref extends Document {
  
}

const schema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  zip: { type: Number, require: true },
});

export const FoodPref = mongoose.model<iFoodPref>('FoodPref', schema);
