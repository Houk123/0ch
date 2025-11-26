import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider"
import "./globals.css";
import { Container, Flex, Link, VStack } from "@chakra-ui/react";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Flex minHeight="100vh">
            <aside>
              <nav aria-label="Основная навигация">
                <VStack gap={5} margin={5} alignItems='start'>
                  <Link>Главная</Link>
                  <Link href="/users">Пользователи</Link>
                  <Link href="/add-user">Добавить пользователя</Link>
                  <Link>ТоТоТо</Link>
                </VStack>
              </nav>
            </aside>
          
            <main style={{width: '100%'}}>
              <Container paddingBlock={5}>
                {children}
              </Container>
            </main>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
