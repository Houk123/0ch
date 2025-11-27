export const boardKeys = {
    all: ['boards'] as const,
    lists: () => [...boardKeys.all, 'list'] as const,
    list: (filters: string) => [...boardKeys.lists(), { filters }] as const,
    details: () => [...boardKeys.all, 'detail'] as const,
    detail: (id: number) => [...boardKeys.details(), id] as const,
    byUrl: (url: string) => [...boardKeys.details(), 'url', url] as const,
};