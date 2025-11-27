import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider"
import "./globals.css";
import { Box, Container, Flex, Heading, IconButton, Input, InputGroup, Link, VStack } from "@chakra-ui/react";
import AuthProvider from "@/features/auth/session/component/client/AuthProvider";
import { getServerSession } from "next-auth";
import SignInUser from "@/features/auth/signin/component/client/SignInUser";
import { UserPlus } from "lucide-react";
import { LuSearch } from "react-icons/lu";
import ClientLayout from "@/features/query/components/client/QueryClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Моё приложение крутое!",
  description: "Тут я ловлю приколы)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()

  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <ClientLayout>
            <AuthProvider session={session}>
              <Flex as="aside" gap={5} margin={5} justifyContent="space-between" alignItems='center'>
                <Flex gap={5}>
                  <Heading fontSize="3.5rem">0ch</Heading>
                  <Flex as="nav" gap={5}>
                    <Link>Главная</Link>
                  </Flex>
                </Flex>

                <Flex gap={5}>
                  <InputGroup flex="1" endElement={<LuSearch />}>
                    <Input placeholder="Поиск" />
                  </InputGroup>
                  <SignInUser/>
                </Flex>
              </Flex>
            
              <main style={{width: '100%'}}>
                <Container paddingBlock={5}>
                  {children}
                </Container>
              </main>
            </AuthProvider>
          </ClientLayout>
          
        </Provider>
      </body>
    </html>
  );
}
