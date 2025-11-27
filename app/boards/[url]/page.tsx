// app/boards/[slug]/page.tsx
import { Board as IBoard } from "@/features/board/types/board";
import { Tag, Box, Heading, Text } from "@chakra-ui/react";

interface PageProps {
    params: {
        url: string;
    };
}

const BoardPage = async ({ params }: PageProps) => {
    const url = (await params).url;
    const response = await fetch(`http://localhost:3000/api/boards/url/${url}`);

    if (!response.ok) {
        return (
            <Box p={6}>
                <Heading>Доска не найдена</Heading>
                <Text>URL: {url} не существует</Text>
            </Box>
        );
    }
    
    const board: IBoard = await response.json();
    
    console.log('board data', board);
    
    return (
        <Box p={6}>
            <Heading mb={4}>{board.name}</Heading>
            <Tag.Root colorScheme="blue" mb={4}>/{board.url}</Tag.Root>
            {board.description && (
                <Text mb={4}>{board.description}</Text>
            )}
            <Text color="gray.500">
                Создано: {board.createdAt ? new Date(board.createdAt).toLocaleDateString('ru-RU') : ""}
            </Text>
        </Box>
    );
}

export default BoardPage;