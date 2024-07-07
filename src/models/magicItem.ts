// magicItem.ts
import { Schema, model, Document } from 'mongoose';

export interface IMagicItem extends Document {
    name: string;
    weight: number;

}

const magicItemSchema = new Schema<IMagicItem>({
    name: { type: String, required: true },
    weight: { type: Number, required: true }

});

export default model<IMagicItem>('MagicItem', magicItemSchema);
