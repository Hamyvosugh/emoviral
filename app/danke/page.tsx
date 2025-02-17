'use client';
import ThankYouPage from '@/components/Form/ThankYouPage';
import Layout from '@/components/Layout/Layout';

export default function DankePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Layout>
      <ThankYouPage searchParams={searchParams} />
    </Layout>
  );
}