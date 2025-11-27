"use client"

import { useCreateBoard } from "@/features/board/hooks/query/boardQuery";
import { Button, Field, Input, Textarea, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const BoardCreateForm = () => {
    //const router = useRouter();
    const { mutate: createBoard, isPending } = useCreateBoard();

    const [formData, setFormData] = useState({
        name: '',
        url: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('push');
        createBoard(formData, {
            onSuccess: (board) => {
                //router.push('/boards');
            },
            onError: (error) => {

            },
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <VStack>
                <Field.Root>
                    <Field.Root>Название доски</Field.Root>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Введите название доски"
                    />
                </Field.Root>

                <Field.Root>
                    <Field.Root>URL доски</Field.Root>
                    <Input
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        placeholder="my-board"
                    />
                </Field.Root>

                <Field.Root>
                    <Field.Root>Описание</Field.Root>
                    <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Описание доски (необязательно)"
                        rows={4}
                    />
                </Field.Root>

                <Button type="submit">
                    Создать доску
                </Button>
            </VStack>
        </form>
    );
}

export default BoardCreateForm;