/* eslint-disable no-tabs */
import mongoose, { Document, Schema } from 'mongoose';

export interface iCustomer extends Document {
	zip: Number;
	comments: String;
}

const schema = new Schema({
  zip: { type: Number, require: true },
  comments: { type: String, require: true },
});

export const Customer = mongoose.model<iCustomer>('Customer', schema);
