import { db } from "@/libs/db";
import { boards } from "@/libs/db/schema";
import { Board, BoardUpdate, NewBoard } from "@/features/board/types/board";
import { eq, like, and } from 'drizzle-orm';

export class BoardModel {
    async create(boardData: NewBoard): Promise<Board> {
        const [board] = await db.insert(boards).values(boardData).returning();
        return board;
    }

    async findAll(limit: number = 50, offset: number = 0): Promise<Board[]> {
        return await db
            .select()
            .from(boards)
            .where(eq(boards.isActive, true))
            .limit(limit)
            .offset(offset)
            .orderBy(boards.createdAt);
    }

    async findById(id: number): Promise<Board | null> {
        const [board] = await db
            .select()
            .from(boards)
            .where(and(eq(boards.id, id), eq(boards.isActive, true)));

        return board || null;
    }

    async findByUrl(url: string): Promise<Board | null> {
        const [board] = await db
            .select()
            .from(boards)
            .where(and(eq(boards.url, url), eq(boards.isActive, true)));

        return board || null;
    }

    async searchByName(name: string): Promise<Board[]> {
        return await db
            .select()
            .from(boards)
            .where(and(like(boards.name, `%${name}%`), eq(boards.isActive, true)))
            .limit(20);
    }

    async update(id: number, boardData: BoardUpdate): Promise<Board | null> {
        const updateData = {
            ...boardData,
            updatedAt: new Date(),
        };

        const [board] = await db
            .update(boards)
            .set(updateData)
            .where(eq(boards.id, id))
            .returning();

        return board || null;
    }

    async softDelete(id: number): Promise<Board | null> {
        const [board] = await db
            .update(boards)
            .set({ 
                isActive: false,
                updatedAt: new Date()
            })
            .where(eq(boards.id, id))
            .returning();

        return board || null;
    }

    async hardDelete(id: number): Promise<boolean> {
        const result = await db
            .delete(boards)
            .where(eq(boards.id, id));

        return result.rowCount != null;
    }
}

export const boardModel = new BoardModel();