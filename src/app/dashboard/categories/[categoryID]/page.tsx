import ActionButtons from "@/components/ui/ActionButtons";
import NotFound from "@/components/ui/NotFound";
import { GetCookie } from "@/lib/server/cookie";
import FetchSingleCategoryData from "@/services/FetchSingleCategoryData";

export default async function CategoryView({
  params,
}: {
  params: { categoryID: string };
}) {
  const { categoryID } = await params;

  const token = await GetCookie();
  const category = await FetchSingleCategoryData(categoryID);

  if (!category) {
    return <NotFound title="Category" />;
  }

  return (
    <section className="card">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{category.name}</h1>

        <ActionButtons
          entityType="categories"
          entityName={category.name}
          id={categoryID}
          token={token!}
          queryKey={["Categories"]}
          successRedirectUrl="/dashboard/categories"
        />
      </div>
      <div className="p-8 bg-neutral-light rounded-md">
        {/* img */}

        <div className="border-l-2 border-primary-light px-4 py-2">
          <p className="text-sm font-medium">{category.description}</p>
        </div>
      </div>
    </section>
  );
}
