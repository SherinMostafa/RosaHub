import { UpdateCategoryForm } from "@/components/forms";
import NotFound from "@/components/ui/NotFound";
import { GetCookie } from "@/lib/server/cookie";
import FetchSingleCategoryData from "@/services/FetchSingleCategoryData";

export default async function UpdateCategory({
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
      <UpdateCategoryForm category={category} token={token!} />
    </section>
  );
}
