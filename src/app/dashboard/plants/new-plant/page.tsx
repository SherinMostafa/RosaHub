import { CreatePlantForm } from "@/components/forms";
import { GetCookie } from "@/lib/server/cookie";
import FetchAllCategoriesData from "@/services/FetchAllCategoriesData";

export default async function NewPlant() {
  const token = await GetCookie();

  const categories = await FetchAllCategoriesData();
  const formattedCategories = categories.map((category) => ({
    value: category._id.toString(),
    label: category.name,
  }));

  return (
    <section className="card">
      <h2 className="title">
        Create New Plant
      </h2>

      <CreatePlantForm token={token!} categories={formattedCategories} />
    </section>
  );
}
