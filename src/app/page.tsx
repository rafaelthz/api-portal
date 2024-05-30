import { Portal } from "@/pages/portal";
import Layout from "@/app/layout";
import { AdminPortal } from "@/pages/admin-portal";

export default function Home() {
  return (
    <Layout>
      <Portal />
      {/* <AdminPortal /> */}
    </Layout>
  );
}