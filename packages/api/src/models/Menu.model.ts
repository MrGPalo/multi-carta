import mongoose, { Document, Schema } from 'mongoose';

export interface iMenu extends Document {
	diet_type: String;
	appetizer: Array<String>;
	main: Array<String>;
	dessert: Array<String>;
	drink: Object;
}

const schema = new Schema({
  diet_type: { type: String, require: true },
  appetizer: { type: Array, require: true },
  main: { type: Array, require: true },
  dessert: { type: Array, require: true },
  drink: { type: Object, require: true },
});

export const Menu = mongoose.model<iMenu>('Menu', schema);
