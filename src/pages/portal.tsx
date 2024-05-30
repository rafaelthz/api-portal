import { Header } from '@/components/header';
import { Resources } from '@/components/resources';
import { Support } from '@/components/support';
import { Footer } from '@/components/footer';
import { ApiList } from '@/components/api-list';
import { loadApis } from '../lib/load-apis'

export async function Portal() {
  const apiData = await loadApis()

  return (
    <>
      <Header admin={false} />
      <main className="container mx-auto py-12 px-6 md:px-10">
        <section className="my-12">
          <Resources />
        </section>
        <section>
          <ApiList data={apiData} />
        </section>
        <section className="mt-8">
          <Support />
        </section>
      </main>
      <Footer />
    </>
  );
}