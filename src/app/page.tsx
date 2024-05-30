import { Portal } from "@/pages/portal";
import Layout from "@/app/layout";
import { AdminPortal } from "@/pages/admin-portal";

export default function Home() {
  return (
    <Layout>
      {/* PORTAL DE APIS */}
      <Portal />

      {/* PORTAL DE ADMIN - Tirar do comentário para visualizar*/}
      {/* <AdminPortal /> */}
    </Layout>
  );
}