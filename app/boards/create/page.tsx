
import BoardCreatePageClient from '@/blocks/board';
import {
    Container,
} from '@chakra-ui/react';

export default function CreateBoardPage() {
    return (
        <Container maxW="container.md" py={8}>
            <BoardCreatePageClient />
        </Container>
    );
}