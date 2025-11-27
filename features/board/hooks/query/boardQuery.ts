import { boardAPI } from "../../api/client/board";
import { UpdateBoardData } from "../../types/requests";
import { boardKeys } from "./boardKeys";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

export const useBoards = (params?: { limit?: number; offset?: number }) => {
    return useQuery({
        queryKey: boardKeys.list(JSON.stringify(params)),
        queryFn: () => boardAPI.getBoards(params),
    });
};

export const useBoard = (id: number) => {
    return useQuery({
        queryKey: boardKeys.detail(id),
        queryFn: () => boardAPI.getBoardById(id),
        enabled: !!id,
    });
};

export const useBoardByUrl = (url: string) => {
    return useQuery({
        queryKey: boardKeys.byUrl(url),
        queryFn: () => boardAPI.getBoardByUrl(url),
        enabled: !!url,
    });
};

export const useSearchBoards = (name: string) => {
    return useQuery({
        queryKey: boardKeys.list(`search-${name}`),
        queryFn: () => boardAPI.searchBoards(name),
        enabled: !!name,
    });
};

export const useCreateBoard = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: boardAPI.createBoard,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: boardKeys.lists() });
        },
    });
};

export const useUpdateBoard = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: UpdateBoardData }) =>
            boardAPI.updateBoard(id, data),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: boardKeys.detail(variables.id) });
            queryClient.invalidateQueries({ queryKey: boardKeys.lists() });
        },
    });
};

export const useDeleteBoard = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: boardAPI.deleteBoard,
        onSuccess: (_, id) => {
            queryClient.removeQueries({ queryKey: boardKeys.detail(id) });
            queryClient.invalidateQueries({ queryKey: boardKeys.lists() });
        },
    });
};