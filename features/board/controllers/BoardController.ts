import { boardService } from "../services/BoardService";
import { BoardQuery, ControllerResponse, CreateBoardData, UpdateBoardData } from "../types/requests";

export class BoardController {
    async createBoard(body: CreateBoardData): Promise<ControllerResponse> {
        try {
            const board = await boardService.createBoard(body);
            return { status: 201, data: board };
        } catch (error) {
            return { status: 400, error: (error as Error).message };
        }
    }

    async getBoard(id: string): Promise<ControllerResponse> {
        try {
            const board = await boardService.getBoardById(Number(id));
            return { status: 200, data: board };
        } catch (error) {
            return { status: 404, error: (error as Error).message };
        }
    }

    async getBoardByUrl(url: string): Promise<ControllerResponse> {
        try {
            const board = await boardService.getBoardByUrl(url);
            return { status: 200, data: board };
        } catch (error) {
            return { status: 404, error: (error as Error).message };
        }
    }

    async getAllBoards(query: BoardQuery): Promise<ControllerResponse> {
        try {
            const { limit, offset, name } = query;

            if (name) {
                const boards = await boardService.searchBoards(name);
                return { status: 200, data: boards };
            }

            const boards = await boardService.getAllBoards(
                limit ? Number(limit) : undefined,
                offset ? Number(offset) : undefined
            );
            return { status: 200, data: boards };
        } catch (error) {
            return { status: 500, error: (error as Error).message };
        }
    }

    async updateBoard(id: string, body: UpdateBoardData): Promise<ControllerResponse> {
        try {
            const board = await boardService.updateBoard(Number(id), body);
            return { status: 200, data: board };
        } catch (error) {
            return { status: 400, error: (error as Error).message };
        }
    }

    async deleteBoard(id: string): Promise<ControllerResponse> {
        try {
            await boardService.deleteBoard(Number(id));
            return { status: 204 };
        } catch (error) {
            return { status: 404, error: (error as Error).message };
        }
    }
}

export const boardController = new BoardController();