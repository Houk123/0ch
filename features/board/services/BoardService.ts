import { BoardUpdate, NewBoard } from "@/features/board/types/board";
import { boardModel } from "../models/BoardModel";

export class BoardService {
    async createBoard(boardData: NewBoard) {
        const urlRegex = /^[a-zA-Z0-9-]+$/;
        if (!urlRegex.test(boardData.url)) {
            throw new Error('URL может содержать только латинские буквы, цифры и дефисы');
        }

        const existingBoard = await boardModel.findByUrl(boardData.url);
        if (existingBoard) {
            throw new Error('Доска с таким URL уже существует');
        }

        return await boardModel.create(boardData);
    }

    async getBoardById(id: number) {
        const board = await boardModel.findById(id);
        if (!board) {
            throw new Error('Доска не найдена');
        }
        return board;
    }

    async getBoardByUrl(url: string) {
        const board = await boardModel.findByUrl(url);
        if (!board) {
            throw new Error('Доска не найдена');
        }
        return board;
    }

    async getAllBoards(limit?: number, offset?: number) {
        return await boardModel.findAll(limit, offset);
    }

    async searchBoards(name: string) {
        return await boardModel.searchByName(name);
    }

    async updateBoard(id: number, boardData: BoardUpdate) {
        const board = await this.getBoardById(id);

        if (boardData.url && boardData.url !== board.url) {
            const existingBoard = await boardModel.findByUrl(boardData.url);
            if (existingBoard) {
                throw new Error('Доска с таким URL уже существует');
            }
        }

        return await boardModel.update(id, boardData);
    }

    async deleteBoard(id: number) {
        await this.getBoardById(id);
        return await boardModel.softDelete(id);
    }
}

export const boardService = new BoardService();