import { Header } from "@/components/header"
import ApiTable from "@/components/api-table"
import Dashboard from "@/components/dashboard"
import { loadApis } from "@/lib/load-apis"
import { Footer } from "@/components/footer"

export async function AdminPortal() {
  const apiData = await loadApis()

  return (
    <div className="flex flex-col w-full">
      <Header admin={true} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <ApiTable data={apiData} />
        <Dashboard />
      </main>
      <Footer />
    </div>
  )
}