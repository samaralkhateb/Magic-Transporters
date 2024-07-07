// magicService.ts
import MagicMover, { IMagicMover } from '../models/magicMover';
import MagicItem, { IMagicItem } from '../models/magicItem';

export const addMover = async (moverData: Partial<IMagicMover>): Promise<IMagicMover> => {
    const mover = new MagicMover(moverData);
    return await mover.save();
};

export const addItem = async (itemData: Partial<IMagicItem>): Promise<IMagicItem> => {
    const item = new MagicItem(itemData);
    return await item.save();
};

export const loadMover = async (moverId: string, itemId: string): Promise<IMagicMover | null> => {
    const mover = await MagicMover.findById(moverId).populate('items');
    const item = await MagicItem.findById(itemId);

    if (!mover || !item || mover.questState !== 'loading') {
        return null;
    }

    if (mover.weightLimit >= item.weight) {
        mover.items.push(item);
        mover.weightLimit -= item.weight;
    }

    return await mover.save();
};

export const startMission = async (moverId: string): Promise<IMagicMover | null> => {
    const mover = await MagicMover.findById(moverId);

    if (!mover || mover.questState !== 'loading') {
        return null;
    }

    mover.questState = 'on a mission';
    return await mover.save();
};

export const endMission = async (moverId: string): Promise<IMagicMover | null> => {
    const mover = await MagicMover.findById(moverId);

    if (!mover || mover.questState !== 'on a mission') {
        return null;
    }

    mover.questState = 'done';
    mover.items = [];
    mover.missionsCompleted += 1;

    return await mover.save();
};

export const getTopMovers = async (): Promise<IMagicMover[]> => {
    return await MagicMover.find().sort({ missionsCompleted: -1 });
};
