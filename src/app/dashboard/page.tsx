import FetchUserData from "@/services/FetchUserData";

export default async function Dashboard() {
  const user = await FetchUserData();

  return (
    <section className="card">
      <h2 className="title">
        Welcome, {user?.firstName} {user?.lastName}
      </h2>
    </section>
  );
}
