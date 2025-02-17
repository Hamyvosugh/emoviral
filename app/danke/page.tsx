'use client';
import { useSearchParams } from 'next/navigation';
import ThankYouPage from '@/components/Form/ThankYouPage';
import Layout from '@/components/Layout/Layout';

export default function DankePage() {
  const searchParams = useSearchParams();

  return (
    <Layout>
      <ThankYouPage searchParams={Object.fromEntries(searchParams.entries())} />
    </Layout>
  );
}