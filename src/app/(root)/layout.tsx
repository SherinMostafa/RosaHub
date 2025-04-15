import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/Navbar";

export default async function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-root bg-fixed bg-cover bg-center">
      <NavBar type={"Root"} />

      <div className="pt-16">{children}</div>

      <Footer />
    </main>
  );
}
