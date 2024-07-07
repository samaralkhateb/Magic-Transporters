// magicMover.ts
import { Schema, model, Document, Types } from 'mongoose';
import { IMagicItem } from './magicItem';

export interface IMagicMover extends Document {
    weightLimit: number;
    energy: number;
    questState: 'resting' | 'loading' | 'on a mission' | 'done';
    missionsCompleted: number;
    items: IMagicItem[];
}

const magicMoverSchema = new Schema<IMagicMover>({
    weightLimit: { type: Number, required: true },
    energy: { type: Number, required: true },
    questState: { type: String, enum: ['resting', 'loading', 'on a mission', 'done'], default: 'resting' },
    missionsCompleted: { type: Number, default: 0 },
    items: [{ type: Types.ObjectId, ref: 'MagicItem' }]
});

const MagicMover = model<IMagicMover>('MagicMover', magicMoverSchema);

export default MagicMover;
