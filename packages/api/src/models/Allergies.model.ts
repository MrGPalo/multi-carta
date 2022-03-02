import mongoose, { Document, Schema } from 'mongoose';

export interface iAllergies extends Document {
  types_Allergies: Array<String>;
  userId: User['_id'] //User dado por el user provider de auth0
}

const schema = new Schema({
});

export const Allergies = mongoose.model<iAllergies>('Allergies', schema);
