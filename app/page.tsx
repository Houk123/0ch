//import { Provider } from "@/components/ui/provider"
import { Suspense } from 'react';

export default async function Home() {
  const response = await fetch("http:/localhost:3000/api/test");
  const data = await response.json();
  return (
    <>
      123
    </>
  );
}
