// magicController.ts
import { Request, Response } from 'express';
import * as magicService from '../services/magicService';

export const addMover = async (req: Request, res: Response) => {
    const mover = await magicService.addMover(req.body);
    res.status(201).json(mover);
};

export const addItem = async (req: Request, res: Response) => {
    const item = await magicService.addItem(req.body);
    res.status(201).json(item);
};

export const loadMover = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { itemId } = req.body;
    const result = await magicService.loadMover(id, itemId);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Mover or Item not found' });
    }
};

export const startMission = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await magicService.startMission(id);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Mover not found' });
    }
};

export const endMission = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await magicService.endMission(id);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Mover not found' });
    }
};

export const getTopMovers = async (req: Request, res: Response) => {
    const movers = await magicService.getTopMovers();
    res.status(200).json(movers);
};
