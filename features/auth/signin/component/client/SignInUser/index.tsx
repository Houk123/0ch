'use client'

import FormUsers from '@/features/auth/signin/component/client/Form'
import { Button, IconButton, Popover, Portal } from '@chakra-ui/react'
import { User } from "lucide-react";

export default function SignInUser() {
    return (
        <Popover.Root positioning={{placement: "left"}}>
            <Popover.Trigger asChild>
              <IconButton variant="outline">
                <User />
              </IconButton>
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content>
                    <Popover.Body>
                        <Popover.Arrow />
                        <FormUsers />
                    </Popover.Body>
                </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}