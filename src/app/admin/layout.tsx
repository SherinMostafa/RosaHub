export default function Admin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-svh flex items-center justify-center bg-neutral-light">
      <section className="relative space-y-6 my-4 px-8 py-6 w-[calc(100vw-2rem)] max-w-lg bg-white rounded shadow-lg">
        {children}
      </section>
    </main>
  );
}
