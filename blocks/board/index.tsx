"use client";

import { Box, Card, Heading } from "@chakra-ui/react";
import BoardCreateForm from "./components/client/form";

const BoardCreatePageClient = () => {
    return (
        <Card.Root>
            <Card.Body gap="2">
                <Heading size="lg" mb={6}>
                    Создать новую доску
                </Heading>
                <BoardCreateForm />
            </Card.Body>
        </Card.Root>  
    );
}


export default BoardCreatePageClient;