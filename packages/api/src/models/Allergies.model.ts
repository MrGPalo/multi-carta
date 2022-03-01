import mongoose, { Document, Schema } from 'mongoose';

export interface iAllergies extends Document {
  name: String;
  email: String;
  zip: Number;
}

const schema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  zip: { type: Number, require: true },
});

export const Allergies = mongoose.model<iAllergies>('Allergies', schema);
