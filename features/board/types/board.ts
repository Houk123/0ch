import { boards } from '@/libs/db/schema';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';

export type Board = InferSelectModel<typeof boards>;
export type NewBoard = InferInsertModel<typeof boards>;
export type BoardUpdate = Partial<Omit<NewBoard, 'id'>>;