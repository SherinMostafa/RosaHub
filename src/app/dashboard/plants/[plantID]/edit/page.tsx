import { UpdatePlantForm } from "@/components/forms";
import NotFound from "@/components/ui/NotFound";
import { GetCookie } from "@/lib/server/cookie";
import FetchAllCategoriesData from "@/services/FetchAllCategoriesData";
import FetchSinglePlantData from "@/services/FetchSinglePlantData";

export default async function UpdatePlant({
  params,
}: {
  params: { plantID: string };
}) {
  const { plantID } = await params;

  const token = await GetCookie();
  const plant = await FetchSinglePlantData(plantID);

  const categories = await FetchAllCategoriesData();
  const formattedCategories = categories.map((category) => ({
    value: category._id.toString(),
    label: category.name,
  }));

  if (!plant) {
    return <NotFound title="Plant" />;
  }

  return (
    <section className="card">
      <UpdatePlantForm
        plant={plant}
        token={token!}
        categories={formattedCategories}
      />
    </section>
  );
}
