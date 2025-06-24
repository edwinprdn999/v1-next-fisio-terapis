'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LoadingOverlay from '@/components/LoadingOverlay'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.prefetch('/');

    window.addEventListener('next/navigation-start', handleStart);
    window.addEventListener('next/navigation-complete', handleStop);
    window.addEventListener('next/navigation-error', handleStop);

    return () => {
      window.removeEventListener('next/navigation-start', handleStart);
      window.removeEventListener('next/navigation-complete', handleStop);
      window.removeEventListener('next/navigation-error', handleStop);
    };
  }, [router]);

  return (
    <>
      {loading && <LoadingOverlay />}
      {children}
    </>
  );
}