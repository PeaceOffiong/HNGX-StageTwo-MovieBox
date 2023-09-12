import Image from 'next/image';
import { useClient } from "next/react";
import { AppProvider } from '@/context/useGlobalContext';

export default useClient(function Home() {
  return (
    <AppProvider>
      <main>
        hey there
      </main>
    </AppProvider>
  )
})
