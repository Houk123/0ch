import { api } from "@/libs/network/axios";
import { Board } from "../../types/board";
import { CreateBoardData, UpdateBoardData } from "../../types/requests";

export const boardAPI = {
    getBoards: async (params?: { limit?: number; offset?: number }): Promise<Board[]> => {
        const { data } = await api.get('/boards', { params });
        return data;
    },

    searchBoards: async (name: string): Promise<Board[]> => {
        const { data } = await api.get('/boards', { params: { name } });
        return data;
    },

    getBoardById: async (id: number): Promise<Board> => {
        const { data } = await api.get(`/boards/${id}`);
        return data;
    },

    getBoardByUrl: async (url: string): Promise<Board> => {
        const { data } = await api.get(`/boards/url/${url}`);
        return data;
    },

    createBoard: async (boardData: CreateBoardData): Promise<Board> => {
        const { data } = await api.post('/boards', boardData);
        return data;
    },

    updateBoard: async (id: number, boardData: UpdateBoardData): Promise<Board> => {
        const { data } = await api.put(`/boards/${id}`, boardData);
        return data;
    },

    deleteBoard: async (id: number): Promise<void> => {
        await api.delete(`/boards/${id}`);
    },
};