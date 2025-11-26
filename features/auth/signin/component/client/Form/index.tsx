'use client'

import { Button, Checkbox, Field, Flex, Heading, Input, Link, Stack } from "@chakra-ui/react";
import React from "react";

import { useForm } from "react-hook-form"

import axios from "axios";

export type SignInForm = {
    password: string;
    email: string;
}

const FormUsers: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInForm>()

    const onSubmit = handleSubmit((data) => axios.post("/api/add-user", data))

    return (
        <form onSubmit={onSubmit}>
            <Stack gap="4" align="flex-start" maxW="sm">
                <Heading>Авторизация</Heading>
                <Field.Root invalid={!!errors.email}>
                    <Field.Label>Логин</Field.Label>
                    <Input 
                        type="email"
                        {...register('email', {
                            required: 'Логин обязателен!'
                        })}
                    />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                </Field.Root>
                <Field.Root invalid={!!errors.email}>
                    <Field.Label>Почта</Field.Label>
                    <Input 
                        type="password"
                        {...register('password', {
                            required: 'Почта обязательна',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Некорректный email'
                            }
                        })}
                    />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                </Field.Root>
                <Checkbox.Root>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Запомнить пароль</Checkbox.Label>
                </Checkbox.Root>
                <Button w="100%" type="submit">Войти</Button>
                <Flex w="100%" justifyContent="space-between">
                    <Link href="/register">Зарегистрироваться</Link>
                    <Link href="/recover-account ">Восстановить пароль</Link>
                </Flex>
            </Stack>
        </form>
    );
}

export default FormUsers;