import mongoose, { Document, Schema } from 'mongoose';

export interface iFoodPref extends Document {
  types_Allergies: Array<String>;
  userId: User["_id"]; //User dado por el user provider de auth0
}

const schema = new Schema({
  types_Food: { type: Array, require: true },
});

export const FoodPref = mongoose.model<iFoodPref>('FoodPref', schema);
