'use client'

import { Button, Container, Field, Input, Stack } from "@chakra-ui/react";
import React from "react";

import { useForm } from "react-hook-form"

import axios from "axios";

interface FormValues {
    email: string
    name: string
}

const FormUsers: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const onSubmit = handleSubmit((data) => axios.post("/api/add-user", data))

    return (
        <form onSubmit={onSubmit}>
            <Stack gap="4" align="flex-start" maxW="sm">
                <Field.Root invalid={!!errors.name}>
                    <Field.Label>Логин</Field.Label>
                    <Input 
                        type="login"
                        {...register('name', {
                            required: 'Логин обязателен!'
                        })}
                    />
                    <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                </Field.Root>
                <Field.Root invalid={!!errors.email}>
                    <Field.Label>Почта</Field.Label>
                    <Input 
                        type="email"
                        {...register('email', {
                            required: 'Почта обязательна',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Некорректный email'
                            }
                        })}
                    />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                </Field.Root>
                <Button type="submit">Добавить пользователя</Button>
            </Stack>
        </form>
    );
}

export default FormUsers;