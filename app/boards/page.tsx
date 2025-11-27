import { Board } from "@/features/board/types/board";
import { Tag } from "@chakra-ui/react"

const AllBoards = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/boards`);
    const data = await response.json() as Board[];
    
    console.log('data', data);
    
    return (
        <div>
            <h1>Все доски</h1>
            {
                data.map(board => (
                    <Tag.Root>
                        <Tag.Label>{board.name}</Tag.Label>
                        <Tag.Label>/{board.url}/</Tag.Label>
                    </Tag.Root>
                ))
            }
        </div>
    );
}

export default AllBoards;