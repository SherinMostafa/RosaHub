import ActionButtons from "@/components/ui/ActionButtons";
import NotFound from "@/components/ui/NotFound";
import { GetCookie } from "@/lib/server/cookie";
import FetchSinglePlantData from "@/services/FetchSinglePlantData";

export default async function PlantView({
  params,
}: {
  params: { plantID: string };
}) {
  const { plantID } = await params;

  const token = await GetCookie();
  const plant = await FetchSinglePlantData(plantID);

  if (!plant) {
    return <NotFound title="Plant" />;
  }

  return (
    <section className="card">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{plant.name}</h1>

        <ActionButtons
          entityType="plants"
          entityName={plant.name}
          id={plantID}
          token={token!}
          queryKey={["Plants"]}
          successRedirectUrl="/dashboard/plants"
        />
      </div>
      <div className="p-8 bg-neutral-light rounded-md space-y-8">
        {/* img */}

        <div className="border-l-2 border-primary-light px-4 py-2">
          <p className="text-sm font-medium">
            Category - {plant.category.name}
          </p>
        </div>

        <div className="border-l-2 border-primary-light px-4 py-2">
          <p className="text-sm font-medium">{plant.lightRequirements}</p>
        </div>
      </div>
    </section>
  );
}
