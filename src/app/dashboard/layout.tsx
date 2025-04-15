import NavBar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import FetchUserData from "@/services/FetchUserData";
import { ScrollArea } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await FetchUserData();

  return (
    <main className="flex items-start min-h-svh bg-neutral-light">
      <Sidebar />

      <ScrollArea h={"100svh"} className="flex-1 relative">
        <NavBar type="Dashboard" user={user!} />

        <div className="pt-16">{children}</div>
      </ScrollArea>
    </main>
  );
}
